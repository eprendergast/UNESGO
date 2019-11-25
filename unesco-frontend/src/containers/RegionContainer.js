import React from 'react'
import { Header } from 'semantic-ui-react'
import SitesContainer from './SitesContainer'

const RegionContainer = ({ region, sites, visited_site_ids, bucketlist_site_ids }) => {
  return (
    <div>
      <Header as='h1'>{region}</Header>
      <SitesContainer
        sites={sites}
        visited_site_ids={visited_site_ids}
        bucketlist_site_ids={bucketlist_site_ids}
      />
    </div>
  )
}

export default RegionContainer
