import React from 'react'
import SitesContainer from './SitesContainer'
import { Icon } from 'semantic-ui-react'
import SearchBar from '../components/SearchBar'
import { Link } from 'react-router-dom'
import LoadingContainer from './LoadingContainer'

class HomeContainer extends React.Component {
  state = {
    loading: true
  }

  componentDidMount () {
    this.props.africa &&
      this.setState({
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
      removeVisitedSiteFromState,
      signup,
      signin
    } = this.props

    const { loading } = this.state

    return (
      <div className='page-content-container'>
        {loading ? (
          <LoadingContainer />
        ) : (
          <div>
            <div className='home-header-image-container'>
              <div className='home-header-content-container-flex'>
                <div className='welcome-to'>WELCOME TO</div>
                <div className='unesgo-large'>UNESGO</div>
                <div className='unesgo-tagline'>
                  Discover UNESCO World Heritage Sites from around the world
                </div>
              </div>

              <div className='home-header-content-container-flex'>
                <SearchBar {...this.routerProps} />
              </div>
            </div>

            <div className='sample-sites-container'>
              <div className='region-sites-container'>
                <div className='primary-header-container'>Explore Africa</div>
                <div className='sub-header-container'>
                  Wildlife, medinas, and ancient wonders...
                </div>
                <SitesContainer
                  signup={signup}
                  signin={signin}
                  sites={africa}
                  visited={visited}
                  bucketlist={bucketlist}
                  addBucketlistSiteToState={addBucketlistSiteToState}
                  addVisitedSiteToState={addVisitedSiteToState}
                  removeBucketlistSiteFromState={removeBucketlistSiteFromState}
                  removeVisitedSiteFromState={removeVisitedSiteFromState}
                />
                <div className='site-description-link-container'>
                  <div className='site-description-link-container-text'>
                    <Link to={'/search/region=Africa'}>
                      {' '}
                      See more from Africa{' '}
                      <Icon name='chevron right' size='small' />{' '}
                    </Link>
                  </div>
                </div>
              </div>

              <div className='region-sites-container'>
                <div className='primary-header-container'>
                  Explore Arab States
                </div>
                <div className='sub-header-container'>
                  Rich in history and beauty...
                </div>
                <SitesContainer
                  signup={signup}
                  signin={signin}
                  sites={arab_states}
                  visited={visited}
                  bucketlist={bucketlist}
                  addBucketlistSiteToState={addBucketlistSiteToState}
                  addVisitedSiteToState={addVisitedSiteToState}
                  removeBucketlistSiteFromState={removeBucketlistSiteFromState}
                  removeVisitedSiteFromState={removeVisitedSiteFromState}
                />
                <div className='site-description-link-container'>
                  <div className='site-description-link-container-text'>
                    <Link to={'/search/region=Arab+States'}>
                      See more from Arab States{' '}
                      <Icon name='chevron right' size='small' />{' '}
                    </Link>
                  </div>
                </div>
              </div>

              <div className='region-sites-container'>
                <div className='primary-header-container'>
                  Explore Asia and the Pacific
                </div>
                <div className='sub-header-container'>
                  Rugged landscapes and fascinating history...
                </div>
                <SitesContainer
                  signup={signup}
                  signin={signin}
                  sites={asia_and_the_pacific}
                  visited={visited}
                  bucketlist={bucketlist}
                  addBucketlistSiteToState={addBucketlistSiteToState}
                  addVisitedSiteToState={addVisitedSiteToState}
                  removeBucketlistSiteFromState={removeBucketlistSiteFromState}
                  removeVisitedSiteFromState={removeVisitedSiteFromState}
                />
                <div className='site-description-link-container'>
                  <div className='site-description-link-container-text'>
                    <Link to={'/search/region=Asia+and+the+Pacific'}>
                      {' '}
                      See more from Asia and the Pacific{' '}
                      <Icon name='chevron right' size='small' />{' '}
                    </Link>
                  </div>
                </div>
              </div>

              <div className='region-sites-container'>
                <div className='primary-header-container'>
                  Explore Europe and North America
                </div>
                <div className='sub-header-container'>
                  Historic architecture and stunning landscapes...
                </div>
                <SitesContainer
                  signup={signup}
                  signin={signin}
                  sites={europe_and_north_america}
                  visited={visited}
                  bucketlist={bucketlist}
                  addBucketlistSiteToState={addBucketlistSiteToState}
                  addVisitedSiteToState={addVisitedSiteToState}
                  removeBucketlistSiteFromState={removeBucketlistSiteFromState}
                  removeVisitedSiteFromState={removeVisitedSiteFromState}
                />
                <div className='site-description-link-container'>
                  <div className='site-description-link-container-text'>
                    <Link to={'/search/region=Europe+and+North+America'}>
                      See more from Europe and North America{' '}
                      <Icon name='chevron right' size='small' />{' '}
                    </Link>
                  </div>
                </div>
              </div>

              <div className='region-sites-container'>
                <div className='primary-header-container'>
                  Explore Latin America and the Caribbean
                </div>
                <div className='sub-header-container'>
                  Biodiversity found no where else...
                </div>
                <SitesContainer
                  signup={signup}
                  signin={signin}
                  sites={latin_america_and_the_caribbean}
                  visited={visited}
                  bucketlist={bucketlist}
                  addBucketlistSiteToState={addBucketlistSiteToState}
                  addVisitedSiteToState={addVisitedSiteToState}
                  removeBucketlistSiteFromState={removeBucketlistSiteFromState}
                  removeVisitedSiteFromState={removeVisitedSiteFromState}
                />
                <div className='site-description-link-container'>
                  <div className='site-description-link-container-text'>
                    <Link to={'/search/region=Latin+America+and+the+Caribbean'}>
                      See more from Latin America and the Caribbean{' '}
                      <Icon name='chevron right' size='small' />{' '}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default HomeContainer
