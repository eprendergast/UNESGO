import React from 'react'
import SitesContainer from '../containers/SitesContainer'
import { Header } from 'semantic-ui-react'

class SavedContainer extends React.Component {
  
  componentDidMount () {
    !localStorage.getItem('token') && this.props.history.push('/')
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
      <div className="saved-page-content-container">
        
        <div className="bucketlist-and-visited-content-container">
          <div className="bucketlist-header-container">My Bucketlist</div>
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

        <div className="bucketlist-and-visited-content-container">
      
        <div className="bucketlist-header-container">My Visited</div>
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

        </div>




        
        
    )
  }
}

export default SavedContainer
