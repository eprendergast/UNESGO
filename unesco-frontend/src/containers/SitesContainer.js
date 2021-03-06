import React from 'react'
import SiteCard from '../components/SiteCard'
import NoResults from './NoResultsContainer'

const SitesContainer = ({
  sites,
  bucketlist,
  visited,
  addBucketlistSiteToState,
  addVisitedSiteToState,
  removeBucketlistSiteFromState,
  removeVisitedSiteFromState,
  signin,
  signup
}) => {
  return ( 
    <div>
      {sites.length > 0 ? (
        <div className='sites-container'>
        {sites.map(site => (
          <SiteCard
            key={site.id}
            site={site}
            signup={signup}
            signin={signin}
            bucketlist={bucketlist.map(site => site.id).includes(site.id)}
            visited={visited.map(site => site.id).includes(site.id)}
            addBucketlistSiteToState={addBucketlistSiteToState}
            addVisitedSiteToState={addVisitedSiteToState}
            removeBucketlistSiteFromState={removeBucketlistSiteFromState}
            removeVisitedSiteFromState={removeVisitedSiteFromState}
          />
        ))}
      </div>
      ) : (
        <NoResults/>
      )}

    </div>

    
  )
}

export default SitesContainer
