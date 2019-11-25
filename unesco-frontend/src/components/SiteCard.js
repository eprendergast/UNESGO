import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import API from '../API'

class SiteCard extends React.Component {
  bucketlistButtonToRender = () => {
    if (this.props.bucketlist === true) {
      return (
        <Button
          basic
          color='blue'
          onClick={() => API.removeFromBucketlist(this.props.site.id)}
        >
          Remove from Bucketlist
        </Button>
      )
    } else {
      return (
        <Button
          basic
          color='blue'
          onClick={() => API.addToBucketlist(this.props.site.id)}
        >
          Add to Bucketlist
        </Button>
      )
    }
  }

  visitedButtonToRender = () => {
    if (this.props.visited === true) {
      return (
        <Button
          basic
          color='blue'
          onClick={() => API.removeFromVisited(this.props.site.id)}
        >
          Remove from Visited
        </Button>
      )
    } else {
      return (
        <Button basic color='blue' onClick={() => API.addToVisited(this.props.site.id)}>
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
            {this.bucketlistButtonToRender()}
            {this.visitedButtonToRender()}
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default SiteCard
