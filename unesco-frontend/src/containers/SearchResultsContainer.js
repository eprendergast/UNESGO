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
      <div>
        {loading ? (
          <PulseLoader />
        ) : (
          <div>
            <h1>{`Displaying results for "${searchCriteria}"`}</h1>
            <SitesContainer
              sites={sites.slice(0, 10)}
              visited={visited}
              bucketlist={bucketlist}
              addBucketlistSiteToState={addBucketlistSiteToState}
              addVisitedSiteToState={addVisitedSiteToState}
              removeBucketlistSiteFromState={removeBucketlistSiteFromState}
              removeVisitedSiteFromState={removeVisitedSiteFromState}
            />
          </div>
        )}
      </div>
    )
  }
}

export default withRouter(SearchResultsContainer)
