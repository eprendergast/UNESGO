import React from 'react'
import API from '../API'
import SitesContainer from './SitesContainer'
import { Header, Icon } from 'semantic-ui-react'
import background_image from '../images/poland.jpg'
import SearchBar from '../components/SearchBar'
import { PulseLoader } from 'react-spinners'
import sampleSites from '../data/sampleSites'
import {Link} from 'react-router-dom'

class HomeContainer extends React.Component {
  state = {
    loading: true
  }

  componentDidMount(){
    this.props.africa && this.setState({
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
      europe_and_north_america,
      latin_america_and_the_caribbean,
      africa,
      asia_and_the_pacific,
      arab_states,
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

        <div className="sample-sites-container">
          
          <div className="region-sites-container">
            <div className="primary-header-container">
              Africa
            </div>
            <div className="sub-header-container">
              Wildlife, medinas, and ancient wonders...
            </div>
            <SitesContainer
              sites={africa}
              visited={visited}
              bucketlist={bucketlist}
              addBucketlistSiteToState={addBucketlistSiteToState}
              addVisitedSiteToState={addVisitedSiteToState}
              removeBucketlistSiteFromState={removeBucketlistSiteFromState}
              removeVisitedSiteFromState={removeVisitedSiteFromState}
            />
            <div className="site-description-link-container">
              <Link to={'/search/region=Africa'}> See more from Africa <Icon name="chevron right" size="small"/> </Link>
            </div>
          </div>

          <div className="region-sites-container">
            <div className="primary-header-container">
              Arab States
            </div>
            <div className="sub-header-container">
              Rich in history and beauty...
            </div>
            <SitesContainer
              sites={arab_states}
              visited={visited}
              bucketlist={bucketlist}
              addBucketlistSiteToState={addBucketlistSiteToState}
              addVisitedSiteToState={addVisitedSiteToState}
              removeBucketlistSiteFromState={removeBucketlistSiteFromState}
              removeVisitedSiteFromState={removeVisitedSiteFromState}
            />
            <div className="site-description-link-container">
              <Link to={'/search/region=Arab+States'}> See more from Arab States <Icon name="chevron right" size="small"/> </Link>
            </div>
          </div>

          <div className="region-sites-container">
            <div className="primary-header-container">
              Asia and the Pacific
            </div>
            <div className="sub-header-container">
              Rugged landscapes and fascinating history...
            </div>
            <SitesContainer
              sites={asia_and_the_pacific}
              visited={visited}
              bucketlist={bucketlist}
              addBucketlistSiteToState={addBucketlistSiteToState}
              addVisitedSiteToState={addVisitedSiteToState}
              removeBucketlistSiteFromState={removeBucketlistSiteFromState}
              removeVisitedSiteFromState={removeVisitedSiteFromState}
            />
            <div className="site-description-link-container">
              <Link to={'/search/region=Asia+and+the+Pacific'}> See more from Asia and the Pacific <Icon name="chevron right" size="small"/> </Link>
            </div>
          </div>

          <div className="region-sites-container">
            <div className="primary-header-container">
              Europe and North America
            </div>
            <div className="sub-header-container">
              Something about ancient churches...
            </div>
            <SitesContainer
              sites={europe_and_north_america}
              visited={visited}
              bucketlist={bucketlist}
              addBucketlistSiteToState={addBucketlistSiteToState}
              addVisitedSiteToState={addVisitedSiteToState}
              removeBucketlistSiteFromState={removeBucketlistSiteFromState}
              removeVisitedSiteFromState={removeVisitedSiteFromState}
            />
            <div className="site-description-link-container">
              <Link to={'/search/region=Europe+and+North+America'}>See more from Europe and North America <Icon name="chevron right" size="small"/> </Link>
            </div>
          </div>

          <div className="region-sites-container">
            <div className="primary-header-container">
              Latin America and the Caribbean
            </div>
            <div className="sub-header-container">
              Biodiversity and stuff...
            </div>
            <SitesContainer
              sites={latin_america_and_the_caribbean}
              visited={visited}
              bucketlist={bucketlist}
              addBucketlistSiteToState={addBucketlistSiteToState}
              addVisitedSiteToState={addVisitedSiteToState}
              removeBucketlistSiteFromState={removeBucketlistSiteFromState}
              removeVisitedSiteFromState={removeVisitedSiteFromState}
            />
            <div className="site-description-link-container">
              <Link to={'/search/region=Latin+America+and+the+Caribbean'}>See more from Latin America and the Caribbean <Icon name="chevron right" size="small"/> </Link>
            </div>
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