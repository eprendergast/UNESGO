import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

class SiteCard extends React.Component {
    render(){

        return(
            <Card>
                <Image src={this.props.site.image_url} wrapped ui={false} />
                
                <Card.Content>
                    <Card.Header>{this.props.site.name}</Card.Header>
                    
                    <Card.Meta>
                        <span className='date'>{this.props.site.states.map(state => state["name"]).join(", ")}</span>
                    </Card.Meta>

                    <Card.Description>
                        {this.props.site.short_description.substring(0, 100) + '...'}
                    </Card.Description>
                    
                </Card.Content>
                <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='blue'>
                        Mark as Visited
                    </Button>
                    <Button basic color='blue'>
                        Add to Bucketlist
                    </Button>
                </div>
                </Card.Content>

            </Card>
        )
    }
}

export default SiteCard