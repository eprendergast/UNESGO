import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { identifier } from '@babel/types'
import PrimaryButton from './PrimaryButton'

class SiteCard extends React.Component {
    render(){

        const {id, name, image_url, short_description, states} = this.props.site

        return(
            <Card>
                
                <Image src={image_url} wrapped ui={false} />
        
                <Card.Content>
                    <Link to={`/sites/${id}`} > 
                        <Card.Header>{name}</Card.Header>
                    </Link>
                    
                    <Card.Meta>
                        <span className='date'>{states.map(state => state["name"]).join(", ")}</span>
                    </Card.Meta>

                    <Card.Description>
                        {short_description.substring(0, 100) + '...'}
                    </Card.Description>
                    
                </Card.Content>

                <Card.Content extra>
                <div className='ui two buttons'>
                    
                    < PrimaryButton text="Add to Bucketlist" />

                    < PrimaryButton text="Mark as Visited"/>

                </div>
                </Card.Content>

            </Card>
        )
    }
}

export default SiteCard