import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import API from '../API'

class SiteCard extends React.Component {
  handleAddToBucketlist = site => {
    API.addToBucketlist(site.id).then(
      this.props.addBucketlistSiteToState
    )
  }

  handleRemoveFromBucketlist = site_id => {
    API.removeFromBucketlist(site_id).then(
      this.props.removeBucketlistSiteFromState
    )
  }

  handleAddToVisited = site => {
    API.addToVisited(site.id).then(this.props.addVisitedSiteToState)
  }

  handleRemoveFromVisited = site_id => {
    API.removeFromVisited(site_id).then(
      this.props.removeVisitedSiteFromState
    )
  }

  addToBucketlistButton = () => {
    return (
      <Button
        basic
        color='blue'
        onClick={() => this.handleAddToBucketlist(this.props.site)}
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
        onClick={() => this.handleRemoveFromBucketlist(this.props.site.id)}
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
        onClick={() => this.handleAddToVisited(this.props.site)}
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
        onClick={() => this.handleRemoveFromVisited(this.props.site.id)}
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
        <Link to={`/sites/${id}`}>
          <div style={{overflow: 'hidden'}}>
          <Image
            src={image_url}
            wrapped
            ui={false}
            height={'250'}
            width={'auto'}
          />
          </div>
        </Link>

        <Card.Content>
          <Card.Header>{name}</Card.Header>

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
