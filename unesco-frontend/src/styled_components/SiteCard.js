import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import API from '../API'

class SiteCard extends React.Component {
  handleAddToBucketlist = site => {
    API.addToBucketlist(site.id).then(this.props.addBucketlistSiteToState)
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
    API.removeFromVisited(site_id).then(this.props.removeVisitedSiteFromState)
  }

  addToBucketlistButton = () => {
    return (
      <button
        basic
        color='blue'
        onClick={() => this.handleAddToBucketlist(this.props.site)}
      >
        Add to Bucketlist
      </button>
    )
  }

  removeFromBucketlistButton = () => {
    return (
      <button
        basic
        color='blue'
        onClick={() => this.handleRemoveFromBucketlist(this.props.site.id)}
      >
        Remove from Bucketlist
      </button>
    )
  }

  addToVisitedButton = () => {
    return (
      <button
        basic
        color='blue'
        onClick={() => this.handleAddToVisited(this.props.site)}
      >
        Mark as Visited
      </button>
    )
  }

  removeFromVisitedButton = () => {
    return (
      <button
        basic
        color='blue'
        onClick={() => this.handleRemoveFromVisited(this.props.site.id)}
      >
        Remove from Visited
      </button>
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
      <div className='site-card-container'>
        <Link to={`/sites/${id}`}>
          <div className='site-card-image-container'>
            <img className='site-card-image' src={image_url} alt={name} />
          </div>
        </Link>

        <div className='site-card-details-container'>

            <div className="site-card-text-details-container">
            <div className='site-card-country-container'>
            {`${states.map(state => state['name'].toUpperCase()).join(' | ')}`
              .length > 42
              ? `${states
                .map(state => state['name'].toUpperCase())
                .join(' | ')}`.substr(0, 40) + `...`
              : `${states
                .map(state => state['name'].toUpperCase())
                .join(' | ')}`}
          </div>
          <Link to={`/sites/${id}`}>
            <div className='site-card-name-container'>
              {name.length > 38 ? `${name.substr(0, 34)}...` : name}
            </div>
          </Link>
            </div>

          
          <div className="site-card-buttons-container">
            <button className="secondary-button">Mark as Visited</button>
            <button className="secondary-button">Add to Bucketlist</button>


            </div>
        </div>


      </div>
    )
  }
}

export default SiteCard
