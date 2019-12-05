import React from 'react'
import SitesContainer from '../containers/SitesContainer'
import LoadingContainer from './LoadingContainer'

class SavedContainer extends React.Component {
  state = {
    loading: true
  }

  componentDidMount () {
    !localStorage.getItem('token') && this.props.history.push('/')
    this.props && this.setState({ loading: false })
    window.scrollTo(0, 0)
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

    return (
      <div className='saved-page-content-container'>

      {this.state.loading ? <LoadingContainer/> : 

        <React.Fragment>
        <div className='bucketlist-and-visited-content-container'>
        <div className="bucketlist-and-visited-content-container-header">
          <div className='primary-header-container'>My Bucketlist</div>
          <div className="number-saved-container">{`${bucketlist.length} sites on bucketlist`}</div>
        </div>
         
          <SitesContainer
            sites={bucketlist}
            bucketlist={bucketlist}
            visited={visited}
            addBucketlistSiteToState={addBucketlistSiteToState}
            addVisitedSiteToState={addVisitedSiteToState}
            removeBucketlistSiteFromState={removeBucketlistSiteFromState}
            removeVisitedSiteFromState={removeVisitedSiteFromState}
          />
        </div>

        <div className='bucketlist-and-visited-content-container'>
          <div className="bucketlist-and-visited-content-container-header">
            <div className='primary-header-container'>My Visited</div>
            <div className="number-saved-container ">{`${visited.length}/1092 sites visited`}</div>
          </div>
          
          <SitesContainer
            sites={visited}
            bucketlist={bucketlist}
            visited={visited}
            addBucketlistSiteToState={addBucketlistSiteToState}
            addVisitedSiteToState={addVisitedSiteToState}
            removeBucketlistSiteFromState={removeBucketlistSiteFromState}
            removeVisitedSiteFromState={removeVisitedSiteFromState}
          />
        </div>
        </React.Fragment>}
      </div>
    )
  }
}

export default SavedContainer
