import React from 'react'
import API from '../API'
import { Icon } from 'semantic-ui-react'
import TagsContainer from './TagsContainer'
import MapContainer from './MapContainer'
import LoadingContainer from './LoadingContainer'
import AuthenticationModal from '../modals/AuthenticationModal'

class SiteContainer extends React.Component {
  state = {
    site: {},
    bucketlist: false,
    visited: false,
    loading: true
  }

  componentDidMount () {
    API.getSite(this.props.match.params['id']).then(data =>
      this.setState({
        site: data,
        bucketlist: this.props.bucketlist
          .map(site => site.id)
          .includes(data.id),
        visited: this.props.visited.map(site => site.id).includes(data.id),
        loading: false
      })
    )
  }

  // handleAddToBucketlist = site => {
  //   API.addToBucketlist(site.id).then(this.props.addBucketlistSiteToState)
  //   this.setState({
  //     bucketlist: true
  //   })
  // }

  // handleRemoveFromBucketlist = site_id => {
  //   API.removeFromBucketlist(site_id).then(
  //     this.props.removeBucketlistSiteFromState
  //   )
  //   this.setState({
  //     bucketlist: false
  //   })
  // }

  // handleAddToVisited = site => {
  //   API.addToVisited(site.id).then(this.props.addVisitedSiteToState)
  //   this.setState({
  //     visited: true
  //   })
  // }

  // handleRemoveFromVisited = site_id => {
  //   API.removeFromVisited(site_id).then(this.props.removeVisitedSiteFromState)
  //   this.setState({
  //     visited: false
  //   })
  // }

  handleAddToBucketlist = site => {
    API.addToBucketlist(site.id).then(this.props.addBucketlistSiteToState)
    this.setState({
      bucketlist: true
    })
  }

  handleRemoveFromBucketlist = site_id => {
    API.removeFromBucketlist(site_id).then(
      this.props.removeBucketlistSiteFromState
    )
    this.setState({
      bucketlist: false
    })
  }

  handleAddToVisited = site => {
    API.addToVisited(site.id).then(this.props.addVisitedSiteToState)
    !this.bucketlist &&
      this.setState({
        visited: true
      })
  }

  handleRemoveFromVisited = site_id => {
    API.removeFromVisited(site_id).then(this.props.removeVisitedSiteFromState)
    this.setState({
      visited: false
    })
  }

  addToBucketlistButton = () => {
    const modalTrigger = () => {
      return <button className='active-button'>Save to bucketlist</button>
    }

    if (!localStorage.getItem('token')) {
      return (
        <AuthenticationModal
          signup={this.props.signup}
          signin={this.props.signin}
          modalTrigger={modalTrigger}
          status={'login'}
        />
      )
    } else {
      return (
        <button
          className='active-button'
          onClick={() => this.handleAddToBucketlist(this.state.site)}
        >
          Save to bucketlist
        </button>
      )
    }
  }

  removeFromBucketlistButton = () => {
    return (
      <button
        className='passive-button'
        onClick={() => this.handleRemoveFromBucketlist(this.state.site.id)}
      >
        Remove from bucketlist
      </button>
    )
  }

  addToVisitedButton = () => {
    const modalTrigger = () => {
      return <button className='active-button'>Save to visited</button>
    }

    if (!localStorage.getItem('token')) {
      return (
        <AuthenticationModal
          signup={this.props.signup}
          signin={this.props.signin}
          modalTrigger={modalTrigger}
          status={'login'}
        />
      )
    } else {
      return (
        <button
          className='active-button'
          onClick={() => this.handleAddToVisited(this.state.site)}
        >
          Save to visited
        </button>
      )
    }
  }

  removeFromVisitedButton = () => {
    return (
      <button
        className='passive-button'
        onClick={() => this.handleRemoveFromVisited(this.state.site.id)}
      >
        Remove from visited
      </button>
    )
  }

  buttons = () => {
    const { bucketlist, visited } = this.state
    if (visited) {
      return (
        <div className='save-buttons-container-site-show-page'>
          {this.removeFromVisitedButton()}
        </div>
      )
    } else if (bucketlist) {
      return (
        <div className='save-buttons-container-site-show-page'>
          {this.addToVisitedButton()}
          {this.removeFromBucketlistButton()}
        </div>
      )
    } else {
      return (
        <div className='save-buttons-container-site-show-page'>
          {this.addToVisitedButton()}
          {this.addToBucketlistButton()}
        </div>
      )
    }
  }

  renderMapContainer = () => {
    if (this.state.site.longitude) {
      const latitudeAsFloat = parseFloat(this.state.site.latitude, 10)
      const longitudeAsFloat = parseFloat(this.state.site.longitude, 10)
      const center = { lat: latitudeAsFloat, lng: longitudeAsFloat }

      return (
        <MapContainer
          center={center}
          lat={latitudeAsFloat}
          lng={longitudeAsFloat}
          name={this.state.site.name}
        />
      )
    }
  }

  render () {
    const {
      id,
      name,
      date_inscribed,
      http_url,
      image_url,
      short_description,
      states,
      iso_codes,
      latitude,
      longitude,
      category,
      region,
      tags,
      bucketlist,
      visited
    } = this.state.site

    const { handleAddToBucketlist, handleRemoveFromBucketlist, handleAddToVisited, handleRemoveFromVisited} = this

    return (
      <div className='page-content-container'>
        {this.state.loading ? (
          <LoadingContainer />
        ) : (
          <React.Fragment>
            <div className='site-headings-container'>
              <div className='site-headings-container-flex-1'>
                <div className='site-name-heading-container'>{name}</div>

                <div className='site-sub-headings-container'>

                  <div className='site-sub-heading-container'>
                    {states && states.map(state => state['name']).join(', ')}
                  </div>
                  <div className='site-sub-heading-container'>
                    {`|  ${region && region['name']}`}
                  </div>


                </div>
              </div>
            </div>

            <div className='site-details-container'>
              <div className='site-details-column-1-container'>
                <div className='site-image-container'>
                  <img className='site-image' src={image_url} alt={name} />
                </div>

                <TagsContainer tags={tags} />

                <div className='site-description-container'>
                  <div className='site-description-container-header'>
                    The Site
                  </div>
                  <div className='site-description-text-container'>
                    {short_description}
                  </div>
                  {this.renderMapContainer()}
                </div>
              </div>

              <div className='site-details-column-2-container'>

                <div className='site-sub-details-container'>
                  <div className='site-detail-description'>
                    <Icon name='calendar alternate outline' /> DATE INSCRIBED
                  </div>
                  <div className='site-detail'>{date_inscribed}</div>
                </div>

                <div className='site-sub-details-container'>
                  <div className='site-detail-description'>
                    {' '}
                    <Icon name='sitemap' /> CATEGORY
                  </div>
                  <div className='site-detail'>
                    {category && category['name']}
                  </div>
                </div>

                <div className='site-sub-details-container'>
                  <div className='site-detail-description'>
                    <Icon name='location arrow' />{' '}
                    {states && (states.length > 1 ? `COUNTRIES` : `COUNTRY`)}
                  </div>
                  <div className='site-detail'>
                    {states && states.map(state => state['name']).join(', ')}
                  </div>
                </div>

                <div className='site-sub-details-container'>
                  <div className='site-detail-description'>
                    <Icon name='world' /> REGION
                  </div>
                  <div className='site-detail'>{region && region['name']}</div>
                </div>

                <div className='site-sub-details-container'>
                  <div className='site-detail-description'>
                    {' '}
                    <Icon name='arrows alternate vertical' /> LONGITUDE
                  </div>
                  <div className='site-detail'>{longitude}</div>
                </div>

                <div className='site-sub-details-container'>
                  <div className='site-detail-description'>
                    {' '}
                    <Icon name='arrows alternate horizontal' />
                    LATTITUDE
                  </div>
                  <div className='site-detail'>{latitude}</div>
                </div>

                <div className='site-sub-details-container'>
                  <div className='site-detail-description'>
                    <Icon name='barcode' />{' '}
                    {iso_codes &&
                      (iso_codes.length > 1 ? `COUNTRY CODES` : `COUNTRY CODE`)}
                  </div>
                  <div className='site-detail'>
                    {iso_codes &&
                      iso_codes
                        .map(code => code['alpha_2_code'].toUpperCase())
                        .join(', ')}
                  </div>
                </div>

                <div className="underline"> </div>
                  
                <div className='site-sub-details-container-buttons'>
                  {/* {!visited && 

                    (<div className='site-primary-button'>
                    <div className='site-primary-button-text' onClick={bucketlist === true ? () => handleRemoveFromBucketlist(id) : () => handleAddToBucketlist(this.state.site)}>
                        { bucketlist === true ? 'Remove from bucketlist' : 'Save to bucketlist' }
                    </div>
                  </div>)
                  
                  }
                  

                  <div className='site-primary-button'>
                    <div className='site-primary-button-text'>
                      Save to visited
                    </div>
                  </div> */}
                     {this.buttons()}
                </div>

                <div className="underline"></div>
                    
                <div className='unesco-link-container'>
                    <a className="unesco-link" href={http_url} target='_blank'>
                      <Icon name='external alternate' />
                      Learn more
                    </a>
                </div>


              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    )
  }
}

export default SiteContainer
