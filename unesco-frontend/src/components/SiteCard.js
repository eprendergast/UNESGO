import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { identifier } from '@babel/types'
import PrimaryButton from './PrimaryButton'

import API from '../API'

class SiteCard extends React.Component {
  visitedButtonToRender = () => {
    if (this.props.visited === true) {
      return (
        <Button basic color='blue' >
          Remove from Visited
        </Button>
      )
    } else {
      return (
        <Button basic color='blue' onClick={() => API.saveSite(this.props.site.id, 'visited')}>
          Mark as Visited
        </Button>
      )
    }
  }

  render () {
    const { id, name, image_url, short_description, states } = this.props.site

    return (
      <Card>
        <Image src={image_url} wrapped ui={false} />

        <Card.Content>
          <Link to={`/sites/${id}`}>
            <Card.Header>{name}</Card.Header>
          </Link>

          <Card.Meta>
            <span className='date'>
              {states.map(state => state['name']).join(', ')}
            </span>
          </Card.Meta>

          <Card.Description>
            {short_description.substring(0, 100) + '...'}
          </Card.Description>
        </Card.Content>

        <Card.Content extra>
          <div className='ui two buttons'>
            <Button
              basic
              color='blue'
              onClick={() => API.saveSite(id, 'bucketlist')}
            >
              Add to Bucketlist
            </Button>

            <Button
              basic
              color='blue'
              onClick={() => API.saveSite(id, 'visited')}
            >
              Mark as Visited
            </Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default SiteCard
