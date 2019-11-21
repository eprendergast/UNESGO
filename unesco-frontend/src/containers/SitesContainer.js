import React from 'react'
import SiteCard from '../components/SiteCard'
import { Card } from 'semantic-ui-react'

const SitesContainer = (props) => {
    return (
        <div>
            <Card.Group>
                {props.sites.map( site => < SiteCard site={site} /> )}
            </Card.Group>
        </div>
    )
}

export default SitesContainer