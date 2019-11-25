import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import API from '../API'

class SiteCard extends React.Component {
  addToBucketlistButton = () => {
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

  removeFromBucketlistButton = () => {
    return (
      <Button
        basic
        color='blue'
        onClick={() => API.removeFromBucketlist(this.props.site.id)}
      >
        Remove from Bucketlist
      </Button>
    )
  }

  addToVisitedButton = () => {
    return (
      <Button
        basic
        color='blue'
        onClick={() => API.addToVisited(this.props.site.id)}
      >
        Mark as Visited
      </Button>
    )
  }

  removeFromVisitedButton = () => {
    return (
      <Button
        basic
        color='blue'
        onClick={() => API.removeFromVisited(this.props.site.id)}
      >
        Remove from Visited
      </Button>
    )
  }

  buttons = () => {
    const { bucketlist, visited } = this.props

    if (visited) {
      return <div className='ui button'>{this.removeFromVisitedButton()}</div>
    } else if (bucketlist) {
      return (
        <div className='ui two buttons'>
          {this.removeFromBucketlistButton()}
          {this.addToVisitedButton()}
        </div>
      )
    } else {
      return (
        <div className='ui two buttons'>
          {this.addToBucketlistButton()}
          {this.addToVisitedButton()}
        </div>
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

        <Card.Content extra>{this.buttons()}</Card.Content>
      </Card>
    )
  }
}

export default SiteCard
