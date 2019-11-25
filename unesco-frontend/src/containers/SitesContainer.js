import React from 'react'
import SiteCard from '../components/SiteCard'
import { Card } from 'semantic-ui-react'

const SitesContainer = ({sites, bucketlist_site_ids, visited_site_ids}) => {
    return (
        <div>
            <Card.Group>
                {sites.map( site => < SiteCard key={site.id} site={site} bucketlist={bucketlist_site_ids.includes(site.id) ? true : false} visited={visited_site_ids.includes(site.id) ? true : false} /> ) }
            </Card.Group> 
        </div>
    )
}

export default SitesContainer