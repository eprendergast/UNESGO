import React from 'react'
import API from '../API'
import { Container, Header, Icon } from 'semantic-ui-react'
import TagsContainer from './TagsContainer'
import MapContainer from '../components/MapContainer'

class SiteContainer extends React.Component {
  state = {
    site: {}
  }

  componentDidMount () {
    API.getSite(this.props.match.params['id']).then(data =>
      this.setState({
        site: data
      })
    )
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

    const latitudeAsFloat = parseFloat(latitude, 10)
    const longitudeAsFloat = parseFloat(longitude, 10)

    return (
      <div className="page-content-container">
        
        <div className="site-headings-container">
          
          <div className="site-name-heading-container">
            {name}
          </div>
          <div className='site-sub-headings-container'> 
            <div className="site-sub-heading-container">
              {states && states.map(state => state["name"]).join(", ") } 
            </div>
            <div className="site-sub-heading-container">
              {`|  ${region && region["name"]}`}
            </div>
          </div>

        </div>

        <div className="site-details-container">
          
          <div className="site-details-column-1-container">
            
            <div className="site-image-container">
              <img className="site-image" src={image_url} alt={name} />
            </div>

            <TagsContainer tags={tags}/>

            <div className="site-description-container">
              <div className="site-description-container-header">
                The Site 
              </div>
              <div className="site-description-text-container">
                {short_description}
              </div>
              <div className="site-description-link-container">
                <a href={http_url} target="_blank">Learn more</a>
              </div>
                <MapContainer lat={latitudeAsFloat} lng={longitudeAsFloat} name={name}/>
            </div>
        
          </div>

          <div className="site-details-column-2-container">
            
            <div className="site-sub-details-container">
              <div className="site-detail-description">
              <Icon name="calendar alternate outline"/> DATE INSCRIBED 
              </div>
              <div className="site-detail">
                {date_inscribed}
              </div>
            </div>

            <div className="site-sub-details-container">
              <div className="site-detail-description">
                CATEGORY
              </div>
              <div className="site-detail">
                {category && category["name"]}
              </div>
            </div>

            <div className="site-sub-details-container">
              <div className="site-detail-description">
                <Icon name="location arrow"/> {states && (states.length > 1 ? `COUNTRIES` : `COUNTRY`)}
              </div>
              <div className="site-detail">
                {states && states.map(state => state["name"]).join(", ") } 
              </div>
            </div>

            <div className="site-sub-details-container">
              <div className="site-detail-description">
                <Icon name="world"/> REGION
              </div>
              <div className="site-detail">
                {region && region["name"]}
              </div>
            </div>

            <div className="site-sub-details-container">
              <div className="site-detail-description">
                LONGITUDE
              </div>
              <div className="site-detail">
                {longitude}
              </div>
            </div>

            <div className="site-sub-details-container">
              <div className="site-detail-description">
                LATTITUDE
              </div>
              <div className="site-detail">
                {latitude}
              </div>
            </div>

            <div className="site-sub-details-container">
              <div className="site-detail-description">
                {iso_codes && (iso_codes.length > 1 ? `COUNTRY CODES` : `COUNTRY CODE`)}
              </div>
              <div className="site-detail">
              {iso_codes && iso_codes.map(code => code["alpha_2_code"].toUpperCase()).join(", ") }
              </div>
            </div>

            <div className="">

          </div>
          
          </div>


        </div>
        
      </div>
    )
  }
}

export default SiteContainer
