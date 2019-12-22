import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from 'semantic-ui-react'
import API_KEY from '../data/mapsApiKey'

const Marker = () => <Icon name='map marker' size='big' color='red' />

class MapContainer extends React.Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 8
  }

  render () {
    const { center, lat, lng, name } = this.props
    return (
      <div className='map-container'>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: ENV['GOOGLE_MAPS_KEY'],
            language: 'en'
          }}
          defaultCenter={center}
          center={center}
          defaultZoom={this.props.zoom}
        >
          <Marker lat={lat} lng={lng} />
        </GoogleMapReact>
      </div>
    )
  }
}

export default MapContainer
