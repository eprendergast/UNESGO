import React from 'react'
import API from '../API'
import { Container, Header } from 'semantic-ui-react'
import TagsContainer from './TagsContainer'

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

    return (
      <div className="site-container">
        
        <div className="site-header-container">
          <div className="site-header-text-container">
            <h1>{name}</h1>
            <span>{states && states.map(state => state["name"]).join(", ") }</span>
          </div>
        </div>
        
        <div className="site-image-container">
          <img className="site-image" src={image_url} alt={name} />
        </div>

        <div className="site-info-container"> 
          <div className="site-description-container">
            <p>{short_description}</p>
            <TagsContainer tags={tags}/>
            <p><a href={http_url} target="_blank">Learn more</a></p>
          </div>
          <div className="site-details-container">
            <p>Date inscribed: {date_inscribed}</p>
            <p>Category: {category && category["name"]}</p>
            <p>Region: {region && region["name"]}</p>
            <p>Longitude: {longitude}</p>
            <p>Latitude: {latitude}</p>
            <p>ISO Codes: {iso_codes && iso_codes.map(code => code["alpha_2_code"].toUpperCase()).join(", ") }</p>
            <div>
              GOOGLE MAP HERE
            </div>
          </div>
     
        </div>
     
        
      </div>
    )
  }
}

export default SiteContainer
