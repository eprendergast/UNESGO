import React from 'react'
import API from '../API'
import SitesContainer from './SitesContainer'
import { Header } from 'semantic-ui-react'
import background_image from '../images/poland.jpg'
import regions from '../regions'
import RegionContainer from './RegionContainer'

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
        <img
          src={background_image}
          style={{ width: 'auto', height: '600px', borderRadius: '10px' }}
        />
        <Header as='h1'>Explore Europe and North America</Header>
        <SitesContainer
          sites={this.state.europe_and_north_america}
          visited_site_ids={visited_site_ids}
          bucketlist_site_ids={bucketlist_site_ids}
        />
      </div>
    )
  }
}

export default HomeContainer
