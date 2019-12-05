import React from 'react'
import { withRouter } from 'react-router-dom'
import API from '../API'
import SitesContainer from './SitesContainer'
import LoadingContainer from './LoadingContainer'
import SearchBar from '../components/SearchBar'

class SearchResultsContainer extends React.PureComponent {
  state = {
    sites: [],
    searchCriteria: '',
    loading: true
  }

  getSearchResultsBasedOnURL = () => {
    if (this.props.match.url.split('/').includes('search_by_tag')) {
      let split_url = this.props.match.url.split('/')
      let tag = split_url[split_url.length - 1]
      API.searchByTag(tag).then(data =>
        this.setState({
          sites: data,
          searchCriteria: tag,
          loading: false
        })
      )
    } else {
      let url = this.props.match.url
      API.search(url).then(data =>
        this.setState({
          sites: data,
          searchCriteria: url
            .split('=')[1]
            .split('+')
            .join(' '),
          loading: false
        })
      )
    }
  }

  componentDidMount () {
    this.getSearchResultsBasedOnURL()
  }

  componentDidUpdate(prevProps){
    if(prevProps.match.url !== this.props.match.url) {
      this.setState({
        loading: true
      })
      this.getSearchResultsBasedOnURL() 
    }
  }

  render () {
    const {
      bucketlist,
      visited,
      addBucketlistSiteToState,
      addVisitedSiteToState,
      removeBucketlistSiteFromState,
      removeVisitedSiteFromState,
      signup,
      signin
    } = this.props

    const { sites, searchCriteria, loading } = this.state

    return (
      <div className='page-content-container'>
        {loading ? (
          <LoadingContainer />
        ) : (
          <div>
            <div className='search-results-container-headers'>
              <div className='primary-header-container'>
                {`Displaying results for '${searchCriteria}'`}
              </div>
              <SearchBar {...this.routerProps} />
            </div>
    
            <SitesContainer
              signup={signup}
              signin={signin}
              sites={sites}
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
