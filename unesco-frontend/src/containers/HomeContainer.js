import React from 'react'
import API from '../API'
import SitesContainer from './SitesContainer'
import { Header } from 'semantic-ui-react'
import background_image from '../images/poland.jpg'
import SearchBar from '../components/SearchBar'
import { PulseLoader } from 'react-spinners'
import sampleSites from '../data/sampleSites'

class HomeContainer extends React.Component {
  state = {
    loading: true,
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

    const europe_and_north_america = sampleSites["europe_and_north_america"].map(id => {
      API.getSite(id)
    })
    const latin_america_and_the_caribbean = await sampleSites["latin_america_and_the_caribbean"].map(id => {
      API.getSite(id)
    })

    const africa = await sampleSites["africa"].map(id => {
      API.getSite(id)
    })

    const asia_and_the_pacific = await sampleSites["asia_and_the_pacific"].map(id => {
      API.getSite(id)
    })

    const arab_states = await sampleSites["arab_states"].map(id => {
      API.getSite(id)
    })

    this.setState({
      europe_and_north_america,
      latin_america_and_the_caribbean,
      africa,
      asia_and_the_pacific,
      arab_states,
      loading: false
    })
  }

  snakeCaseRegion = region => {
    return region
      .toLocaleLowerCase()
      .split(' ')
      .join('_')
  }

  render () {
    const {
      bucketlist,
      visited,
      addBucketlistSiteToState,
      addVisitedSiteToState,
      removeBucketlistSiteFromState,
      removeVisitedSiteFromState
    } = this.props

    return (
      <div className="page-content-container">

        <div className="home-image-container">
          <img 
            className="home-image"
            src="https://images.unsplash.com/photo-1564748250444-fb69f41b9415?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" 
            alt="Image" 
          />
          <div class="home-details-container">
            <div className="home-header"> Welcome to UNESGO </div>
            <div className="home-sub-header"> Explore UNESCO World Heritage Sites around the world </div>
            <SearchBar {...this.routerProps} />
          </div>
        </div>
            
      </div>
    )
  }
}

export default HomeContainer

 {/* <Header as='h1'>Europe and North America</Header>
            <SitesContainer
              sites={this.state.europe_and_north_america}
              visited={visited}
              bucketlist={bucketlist}
              addBucketlistSiteToState={addBucketlistSiteToState}
              addVisitedSiteToState={addVisitedSiteToState}
              removeBucketlistSiteFromState={removeBucketlistSiteFromState}
              removeVisitedSiteFromState={removeVisitedSiteFromState}
            />
            <Header as='h1'>Latin America and the Caribbean</Header>
            <SitesContainer
              sites={this.state.latin_america_and_the_caribbean}
              visited={visited}
              bucketlist={bucketlist}
              addBucketlistSiteToState={addBucketlistSiteToState}
              addVisitedSiteToState={addVisitedSiteToState}
              removeBucketlistSiteFromState={removeBucketlistSiteFromState}
              removeVisitedSiteFromState={removeVisitedSiteFromState}
            />
            <Header as='h1'>Africa</Header>
            <SitesContainer
              sites={this.state.africa}
              visited={visited}
              bucketlist={bucketlist}
              addBucketlistSiteToState={addBucketlistSiteToState}
              addVisitedSiteToState={addVisitedSiteToState}
              removeBucketlistSiteFromState={removeBucketlistSiteFromState}
              removeVisitedSiteFromState={removeVisitedSiteFromState}
            />
            <Header as='h1'>Asia and the Pacific</Header>
            <SitesContainer
              sites={this.state.asia_and_the_pacific}
              visited={visited}
              bucketlist={bucketlist}
              addBucketlistSiteToState={addBucketlistSiteToState}
              addVisitedSiteToState={addVisitedSiteToState}
              removeBucketlistSiteFromState={removeBucketlistSiteFromState}
              removeVisitedSiteFromState={removeVisitedSiteFromState}
            />
            <Header as='h1'>Arab States</Header>
            <SitesContainer
              sites={this.state.arab_states}
              visited={visited}
              bucketlist={bucketlist}
              addBucketlistSiteToState={addBucketlistSiteToState}
              addVisitedSiteToState={addVisitedSiteToState}
              removeBucketlistSiteFromState={removeBucketlistSiteFromState}
              removeVisitedSiteFromState={removeVisitedSiteFromState}
            /> */}

{/* <Header as='h1'>Welcome to UNESGO</Header>
            <Header as='h3'>
              Explore UNESCO World Heritage Sites from around the world
            </Header>
            <SearchBar {...this.routerProps} />
            <img
              src={background_image}
              style={{ width: 'auto', height: '600px', borderRadius: '10px' }}
            /> */}