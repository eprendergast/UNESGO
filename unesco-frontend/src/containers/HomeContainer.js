import React from 'react'
import API from '../API'
import SitesContainer from './SitesContainer'
import { Header, Search } from 'semantic-ui-react'
import background_image from '../images/poland.jpg'
import regions from '../regions'
import RegionContainer from './RegionContainer'
import SearchBar from '../components/SearchBar'

class HomeContainer extends React.Component {
  state = {
    sites: [],
    europe_and_north_america: [],
    latin_america_and_the_caribbean: [],
    africa: [],
    asia_and_the_pacific: [],
    arab_states: []
  }

  componentDidMount () {
    this.getRegionSites()
  }

  getRegionSites = async () => {
    const europe_and_north_america = await API.getSitesByRegion(
      'Europe and North America'
    )
    const latin_america_and_the_caribbean = await API.getSitesByRegion(
      'Latin America and the Caribbean'
    )
    const africa = await API.getSitesByRegion('Africa')
    const asia_and_the_pacific = await API.getSitesByRegion(
      'Asia and the Pacific'
    )
    const arab_states = await API.getSitesByRegion('Arab States')

    this.setState({
      europe_and_north_america,
      latin_america_and_the_caribbean,
      africa,
      asia_and_the_pacific,
      arab_states
    })
  }

  snakeCaseRegion = region => {
    return region
      .toLocaleLowerCase()
      .split(' ')
      .join('_')
  }

  render () {
    const { bucketlist_site_ids, visited_site_ids } = this.props
    return (
      <div>
        <Header as='h1'>Welcome to UNESGO</Header>
        <Header as='h3'>
          Explore UNESCO World Heritage Sites from around the world
        </Header>
        <SearchBar
          {...this.routerProps}
        />
        <img
          src={background_image}
          style={{ width: 'auto', height: '600px', borderRadius: '10px' }}
        />
        {/* <Header as='h1'>Europe and North America</Header>
        <SitesContainer
          sites={this.state.europe_and_north_america}
          visited_site_ids={visited_site_ids}
          bucketlist_site_ids={bucketlist_site_ids}
        />
        <Header as='h1'>Latin America and the Caribbean</Header>
        <SitesContainer
          sites={this.state.latin_america_and_the_caribbean}
          visited_site_ids={visited_site_ids}
          bucketlist_site_ids={bucketlist_site_ids}
        />
        <Header as='h1'>Africa</Header>
        <SitesContainer
          sites={this.state.africa}
          visited_site_ids={visited_site_ids}
          bucketlist_site_ids={bucketlist_site_ids}
        />
        <Header as='h1'>Asia and the Pacific</Header>
        <SitesContainer
          sites={this.state.asia_and_the_pacific}
          visited_site_ids={visited_site_ids}
          bucketlist_site_ids={bucketlist_site_ids}
        />
                <Header as='h1'>Arab States</Header>
        <SitesContainer
          sites={this.state.arab_states}
          visited_site_ids={visited_site_ids}
          bucketlist_site_ids={bucketlist_site_ids}
        /> */}
      </div>
    )
  }
}

export default HomeContainer
