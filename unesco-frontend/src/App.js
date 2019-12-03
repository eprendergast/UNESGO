import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import HomeContainer from './containers/HomeContainer'
import SavedContainer from './containers/SavedContainer'
import SearchResultsContainer from './containers/SearchResultsContainer'
import './App.css'
import NavBar from './components/NavBar'
import API from './API'
import SiteContainer from './containers/SiteContainer'
import sampleSites from './data/sampleSites'

class App extends React.Component {
  state = {
    user_id: '',
    first_name: '',
    bucketlist: [],
    visited: [],
    europe_and_north_america: [],
    latin_america_and_the_caribbean: [],
    africa: [],
    asia_and_the_pacific: [],
    arab_states: [],
    loading: true
  }

  componentDidMount () {
    const token = localStorage.getItem('token')
    if (token) {
      API.validate()
        .then(data => {
          if (data.error) throw Error(data.error)
          this.signin(data)
          this.getBucketlistAndVisited(data.id)
        })
        .catch(error => console.log(error))
    }
    this.getSampleSites()
  }

  signin = user => {
    this.setState(
      {
        user_id: user.id,
        first_name: user.first_name
      }
    )
    localStorage.setItem('token', user.token)
  }

  getBucketlistAndVisited = async user_id => {
    const bucketlist = await API.getBucketlist(user_id)
    const visited = await API.getVisited(user_id)
    this.setState({
      bucketlist,
      visited
    })
  }

  getSampleSites = async () => {
    const sample_site_data = {}
    for (const key in sampleSites) {
      sample_site_data[key] = await this.getTheseSites(sampleSites[key])
    }
    this.setState(sample_site_data)
  }

  getTheseSites = siteIds => Promise.all(siteIds.map(API.getSite))

  addBucketlistSiteToState = site => {
    this.setState({
      ...this.state,
      bucketlist: [...this.state.bucketlist, site]
    })
  }

  removeBucketlistSiteFromState = site_id => {
    let filteredBucketlist = this.state.bucketlist.filter(
      site => site.id !== site_id
    )
    this.setState({
      ...this.state,
      bucketlist: filteredBucketlist
    })
  }

  addVisitedSiteToState = site => {
    let filteredBucketlist = this.state.bucketlist.filter(
      s => s.id !== site.id
    )
    this.setState({
      ...this.state,
      bucketlist: filteredBucketlist,
      visited: [...this.state.visited, site]
    })
  }

  removeVisitedSiteFromState = site_id => {
    let filteredVisited = this.state.visited.filter(site => site.id !== site_id)
    this.setState({
      ...this.state,
      visited: filteredVisited
    })
  }

  signout = () => {
    this.setState({
      user_id: '',
      first_name: '',
      bucketlist: [],
      visited: []
    })
    localStorage.removeItem('token')
  }

  signup = () => {
    console.log('SIGN UP')
  }

  render () {
    const {
      signup,
      signin,
      signout,
      addBucketlistSiteToState,
      addVisitedSiteToState,
      removeBucketlistSiteFromState,
      removeVisitedSiteFromState
    } = this
    const {
      user_id,
      first_name,
      // sites,
      bucketlist,
      visited,
      europe_and_north_america,
      latin_america_and_the_caribbean,
      africa,
      asia_and_the_pacific,
      arab_states
    } = this.state

    return (
      <Router>
        <div className='App'>
          <NavBar
            user_id={user_id}
            first_name={first_name}
            signup={signup}
            signin={signin}
            signout={signout}
          />
          <Switch>
            <Route
              exact
              path='/'
              component={routerProps => (
                <HomeContainer
                  {...routerProps}
                  europe_and_north_america={europe_and_north_america}
                  latin_america_and_the_caribbean={latin_america_and_the_caribbean}
                  africa={africa}
                  asia_and_the_pacific={asia_and_the_pacific}
                  arab_states={arab_states}
                  bucketlist={bucketlist}
                  visited={visited}
                  addBucketlistSiteToState={addBucketlistSiteToState}
                  addVisitedSiteToState={addVisitedSiteToState}
                  removeBucketlistSiteFromState={removeBucketlistSiteFromState}
                  removeVisitedSiteFromState={removeVisitedSiteFromState}
                />
              )}
            />
            <Route
              path='/search/:query'
              component={routerProps => (
                <SearchResultsContainer
                  {...routerProps}
                  visited={visited}
                  bucketlist={bucketlist}
                  addBucketlistSiteToState={addBucketlistSiteToState}
                  addVisitedSiteToState={addVisitedSiteToState}
                  removeBucketlistSiteFromState={removeBucketlistSiteFromState}
                  removeVisitedSiteFromState={removeVisitedSiteFromState}
                />
              )}
            />
            <Route
              path='/search_by_tag/:tag'
              component={routerProps => (
                <SearchResultsContainer
                  {...routerProps}
                  visited={visited}
                  bucketlist={bucketlist}
                  addBucketlistSiteToState={addBucketlistSiteToState}
                  addVisitedSiteToState={addVisitedSiteToState}
                  removeBucketlistSiteFromState={removeBucketlistSiteFromState}
                  removeVisitedSiteFromState={removeVisitedSiteFromState}
                />
              )}
            />

            <Route
              path='/sites/:id'
              component={routerProps => <SiteContainer {...routerProps} />}
            />

            <Route
              path='/users/:id/saved'
              component={routerProps => (
                <SavedContainer
                  {...routerProps}
                  user_id={this.state.user_id}
                  bucketlist={bucketlist}
                  visited={visited}
                  addBucketlistSiteToState={addBucketlistSiteToState}
                  addVisitedSiteToState={addVisitedSiteToState}
                  removeBucketlistSiteFromState={removeBucketlistSiteFromState}
                  removeVisitedSiteFromState={removeVisitedSiteFromState}
                />
              )}
            />
            <Route component={() => <h1>Page Not Found</h1>} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
