import React from 'react'
import SiteCard from '../components/SiteCard'
import { Card } from 'semantic-ui-react'

const SitesContainer = ({
  sites,
  bucketlist,
  visited,
  addBucketlistSiteToState,
  addVisitedSiteToState,
  removeBucketlistSiteFromState,
  removeVisitedSiteFromState
}) => {
  return (
    <div>
      <Card.Group>
        {sites.map(site => (
          <SiteCard
            key={site.id}
            site={site}
            bucketlist={bucketlist.map(site => site.id).includes(site.id)}
            visited={visited.map(site => site.id).includes(site.id)}
            addBucketlistSiteToState={addBucketlistSiteToState}
            addVisitedSiteToState={addVisitedSiteToState}
            removeBucketlistSiteFromState={removeBucketlistSiteFromState}
            removeVisitedSiteFromState={removeVisitedSiteFromState}
          />
        ))}
      </Card.Group>
    </div>
  )
}

export default SitesContainer
