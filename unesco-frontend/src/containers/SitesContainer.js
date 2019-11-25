import React from 'react'
import SiteCard from '../components/SiteCard'
import { Card } from 'semantic-ui-react'

const SitesContainer = ({sites, visited, bucketlist}) => {
    return (
        <div>
            <Card.Group>
                {sites.map( site => < SiteCard key={site.id} site={site} visited={visited.includes(site.id) ? true : false} bucketlist={bucketlist.includes(site.id) ? true : false} /> ) }
            </Card.Group> 
        </div>
    )
}

export default SitesContainer