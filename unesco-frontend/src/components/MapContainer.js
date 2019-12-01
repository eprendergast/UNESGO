import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from 'semantic-ui-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>

class MapContainer extends React.Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 10
  }

  render () {
    // const {google, lat, lng, name} = this.props
    return (
      <div className='map-container'>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyC9kL6GmDUCx-dhhVw4Lxs4v6Hh06y24K4',
            language: 'en'
          }}
          defaultCenter={this.props.center}
          center={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text='My Marker' />
        </GoogleMapReact>
      </div>
    )
  }
}

export default MapContainer
