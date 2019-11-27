import React from 'react'
import SitesContainer from './SitesContainer'
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
      <div>
        <Header as={'h1'}>Bucketlist</Header>
        <SitesContainer
          sites={bucketlist}
          bucketlist={bucketlist}
          visited={visited}
          addBucketlistSiteToState={addBucketlistSiteToState}
          addVisitedSiteToState={addVisitedSiteToState}
          removeBucketlistSiteFromState={removeBucketlistSiteFromState}
          removeVisitedSiteFromState={removeVisitedSiteFromState}
        />
        <Header as={'h1'}>Visited</Header>
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
    )
  }
}

export default SavedContainer
