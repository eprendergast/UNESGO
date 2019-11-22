import React from 'react'
import SiteCard from '../components/SiteCard'
import { Card } from 'semantic-ui-react'

const SitesContainer = ({sites}) => {
    return (
        <div>
            <Card.Group>
                {sites.map( site => < SiteCard key={site.id} site={site} /> )}
            </Card.Group>
        </div>
    )
}

export default SitesContainer