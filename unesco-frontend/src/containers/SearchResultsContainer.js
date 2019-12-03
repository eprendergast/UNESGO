import React from 'react'
import { withRouter } from 'react-router-dom'
import API from '../API'
import SitesContainer from './SitesContainer'
import { PulseLoader } from 'react-spinners'
import SearchBar from '../components/SearchBar'

class SearchResultsContainer extends React.Component {
  state = {
    sites: [],
    searchCriteria: '',
    loading: true
  }

  componentDidMount () {
    if (this.props.match.url.split('/').includes('search_by_tag')) {
      let split_url = this.props.match.url.split('/')
      let tag = split_url[split_url.length - 1]
      API.searchByTag(tag).then(data => {
        this.setState({
          sites: data,
          searchCriteria: tag,
          loading: false
        })
      })
    } else {
      let url = this.props.match.url
      API.search(url).then(data => {
        this.setState({
          sites: data,
          searchCriteria: url
            .split('=')[1]
            .split('+')
            .join(' '),
          loading: false
        })
      })
    }
  }

  render () {
    const {
      bucketlist,
      visited,
      addBucketlistSiteToState,
      addVisitedSiteToState,
      removeBucketlistSiteFromState,
      removeVisitedSiteFromState
    } = this.props

    const { sites, searchCriteria, loading } = this.state

    return (
      <div className="page-content-container">
        {loading ? (
          <PulseLoader />
        ) : (
          <div>
            <div className="primary-header-container">
              {`Displaying results for '${searchCriteria}'`}
            </div>
            <SearchBar/>
            <SitesContainer
              sites={sites}
              visited={visited}
              bucketlist={bucketlist}
              addBucketlistSiteToState={addBucketlistSiteToState}
              addVisitedSiteToState={addVisitedSiteToState}              removeBucketlistSiteFromState={removeBucketlistSiteFromState}
              removeVisitedSiteFromState={removeVisitedSiteFromState}
            />
          </div>
        )}
      </div>
    )
  }
}

export default withRouter(SearchResultsContainer)
