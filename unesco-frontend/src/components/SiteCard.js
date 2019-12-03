import React from 'react'
import { Link } from 'react-router-dom'

import API from '../API'
import { Icon } from 'semantic-ui-react'

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
        className='active-button'
        onClick={() => this.handleAddToBucketlist(this.props.site)}
      >
        Save to Bucketlist
      </button>
    )
  }

  removeFromBucketlistButton = () => {
    return (
      <button
        className='passive-button'
        onClick={() => this.handleRemoveFromBucketlist(this.props.site.id)}
      >
        Remove from Bucketlist
      </button>
    )
  }

  addToVisitedButton = () => {
    return (
      <button
        className='active-button'
        onClick={() => this.handleAddToVisited(this.props.site)}
      >
        Save to Visited
      </button>
    )
  }

  removeFromVisitedButton = () => {
    return (
      <button
        className='passive-button'
        onClick={() => this.handleRemoveFromVisited(this.props.site.id)}
      >
        Remove from Visited
      </button>
    )
  }

  buttons = () => {
    const { bucketlist, visited } = this.props
    if (visited) {
      return (
        <div className='save-buttons-container'>
          {this.removeFromVisitedButton()}
        </div>
      )
    } else if (bucketlist) {
      return (
        <div className='save-buttons-container'>
          {this.addToVisitedButton()}
          {this.removeFromBucketlistButton()}
        </div>
      )
    } else {
      return (
        <div className='save-buttons-container'>
          {this.addToVisitedButton()}
          {this.addToBucketlistButton()}
        </div>
      )
    }
  }

  render () {
    const { id, name, image_url, states, saves } = this.props.site

    return (
      <div className='site-card-container'>
        <div className='site-card-image-container'>
          <img className='site-card-image' src={image_url} alt={name} />
          <div className='site-card-buttons-hover-container '>
            {this.buttons()}
          </div>
        </div>

        <div className='site-card-details-container'>
          <div className='site-card-text-details-container'>
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
                {name.length > 38 ? `${name.substr(0, 32)}...` : name}
              </div>
            </Link>
            <div className="site-card-star-container">
              <Icon name ="star" className="star" size="small"/> {parseInt(saves) === 1 ? ('1 person has saved this') : (`${saves} people have saved this`)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SiteCard
