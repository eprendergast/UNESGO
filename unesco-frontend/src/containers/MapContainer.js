import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from 'semantic-ui-react'
import API_KEY from '../data/mapsApiKey'

class MapContainer extends React.Component {
  
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 8
  }

  render () {

    return (
      <div className='map-container'>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: API_KEY,
            language: 'en'
          }}
          defaultCenter={this.props.center}
          center={ this.props.center }
          defaultZoom={this.props.zoom}
        >
          <Icon name="map marker" size="big" color="red"/>
        </GoogleMapReact>
      </div>
    )
  }
}

export default MapContainer
