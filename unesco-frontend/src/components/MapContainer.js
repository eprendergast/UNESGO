import React from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'

const mapStyles = {
  width: '50%',
  height: '50%'
}

class MapContainer extends React.Component {
  
  state = {
    showingInfoWindow: false, // Hides or the shows the infoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the infoWindow to the selected place upon a marker
    latitude: '',
    longitude: '',
    loading: true
  }

  componentDidMount(){
    this.setState({
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      loading: false
    })
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render () {
    return (
      <div className="map-container">
        {this.state.loading ? (<div>Empty</div>) : 

          (<Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: this.state.latitude, lng: 0 }}
          >
            <Marker
              position={{ lat: this.state.latitude, lng: 0 }}
              onClick={this.onMarkerClick}
              name={'Kenyatta International Convention Centre'}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </Map>)
        }

      </div>
      
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC9kL6GmDUCx-dhhVw4Lxs4v6Hh06y24K4'
})(MapContainer)
