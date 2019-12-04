import React from 'react'
import API from '../API'
import { Container, Header, Icon } from 'semantic-ui-react'
import TagsContainer from './TagsContainer'
import MapContainer from './MapContainer'
import LoadingContainer from './LoadingContainer'

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
      tags
    } = this.state.site

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
                  <div className='site-primary-button'>
                    <div className='site-primary-button-text'>
                      Save to bucketlist
                    </div>
                  </div>

                  <div className='site-primary-button'>
                    <div className='site-primary-button-text'>
                      Save to visited
                    </div>
                  </div>
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
