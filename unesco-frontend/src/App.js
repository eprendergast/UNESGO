import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import HomeContainer from './containers/HomeContainer'
import SavedContainer from './containers/SavedContainer'
import SearchResultsContainer from './containers/SearchResultsContainer'
import './App.css'
import NavBar from './components/NavBar'
import API from './API'
import SiteContainer from './containers/SiteContainer'

class App extends React.Component {
  state = {
    user_id: '',
    first_name: '',
    bucketlist_site_ids: [],
    visited_site_ids: []
  }

  componentDidMount () {
    const token = localStorage.getItem('token')
    if (token) {
      API.validate()
        .then(data => {
          if (data.error) throw Error(data.error)
          this.signin(data)
        })
        .catch(error => alert(error))
    }
  }

  signin = user => {
    this.setState(
      {
        user_id: user.id,
        first_name: user.first_name
      },
      () => this.getBucketlistAndVisitedSiteIds(this.state.user_id)
    )
    localStorage.setItem('token', user.token)
  }

  getBucketlistAndVisitedSiteIds = async user_id => {
    const bucketlist_site_ids = await API.getBucketlistSiteIds(user_id)
    const visited_site_ids = await API.getVisitedSiteIds(user_id)
    this.setState({
      bucketlist_site_ids,
      visited_site_ids
    })
  }

  signout = () => {
    this.setState({
      user_id: '',
      first_name: '',
      bucketlist_site_ids: [],
      visited_site_ids: []
    })
    localStorage.removeItem('token')
  }

  signup = () => {
    console.log('SIGN UP')
  }

  render () {
    const { signup, signin, signout } = this
    const {
      user_id,
      first_name,
      bucketlist_site_ids,
      visited_site_ids
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
                  bucketlist_site_ids={bucketlist_site_ids}
                  visited_site_ids={visited_site_ids}
                />
              )}
            />
            <Route
              path='/search/:query'
              component={routerProps => (
                <SearchResultsContainer
                  {...routerProps}
                  visited_site_ids={visited_site_ids}
                  bucketlist_site_ids={bucketlist_site_ids}
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
                  bucketlist_site_ids={bucketlist_site_ids}
                  visited_site_ids={visited_site_ids}
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
