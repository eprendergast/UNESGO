import React from 'react'
import SitesContainer from '../containers/SitesContainer'
import LoadingContainer from './LoadingContainer'

class SavedContainer extends React.Component {
  state = {
    loading: true
  }

  componentDidMount () {
    !localStorage.getItem('token') && this.props.history.push('/')
    this.props.bucketlist && this.setState({ loading: false })
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
          <div className='primary-header-container'>My Bucketlist</div>
          <div>{`${bucketlist.length} sites on bucketlist`}</div>
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
          <div className='primary-header-container'>My Visited</div>
          <div>{`${visited.length}/1120 sites visited`}</div>
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
