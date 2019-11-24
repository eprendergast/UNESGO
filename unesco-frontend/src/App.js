import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import HomeContainer from './containers/HomeContainer'
import ProfileContainer from './containers/Profile'
import SavedContainer from './containers/SavedContainer'
import PrimaryButton from './components/PrimaryButton'

import './App.css'
import NavBar from './components/NavBar'
import API from './API'
import SiteContainer from './containers/SiteContainer'

class App extends React.Component {
  state = {
    id: '',
    first_name: '',
    saved_sites: [],
    bucketlist: [],
    visited: []
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
        id: user.id,
        first_name: user.first_name
      },
      () => this.getSavedSites(this.state.id)
    )
    localStorage.setItem('token', user.token)
  }

  getSavedSites = async user_id => {
    const saved_sites = await API.getSavedSites(user_id)
    const bucketlist = saved_sites.filter(site => site.bucketlist === true)
    const visited = saved_sites.filter(site => site.visited === true)
    this.setState({
      saved_sites: saved_sites,
      bucketlist: bucketlist.map(object => object.site_reference_id),
      visited: visited.map(object => object.site_reference_id)
    })
  }

  signout = () => {
    this.setState({
      first_name: ''
    })
    localStorage.removeItem('token')
  }

  signup = () => {
    console.log('SIGN UP')
  }

  render () {
    const { signup, signin, signout } = this

    return (
      <Router>
        <div className='App'>
          <NavBar
            id={this.state.id}
            first_name={this.state.first_name}
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
                  bucketlist={this.state.bucketlist}
                  visited={this.state.visited}
                />
              )}
            />
            <Route
              path='/sites/:id'
              component={routerProps => <SiteContainer {...routerProps} />}
            />
            <Route
              path='/profile'
              component={routerProps => <ProfileContainer {...routerProps} />}
            />
            <Route
              path='/users/:id/saved'
              component={routerProps => (
                <SavedContainer
                  {...routerProps}
                  saved_sites={this.state.saved_sites}
                  visited={this.state.visited}
                  bucketlist={this.state.bucketlist}
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
