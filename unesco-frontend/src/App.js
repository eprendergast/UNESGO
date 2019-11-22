import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import HomeContainer from './containers/HomeContainer'
import ProfileContainer from './containers/Profile';
import SavedContainer from './containers/SavedContainer';

import './App.css';
import NavBar from './components/NavBar';
import API from './API';
import SiteContainer from './containers/SiteContainer';

class App extends React.Component {
  
  state = {
    id: '',
    first_name: ''
  }

  componentDidMount(){
    const token = localStorage.getItem('token')
    if (token){
      API.validate().then(data => {
        if (data.error) throw Error(data.error)
        this.signin(data)
      }).catch(error => alert(error))
    }
  }

  signin = user => {
    this.setState({
      id: user.id,
      first_name: user.first_name
    })
    localStorage.setItem('token', user.token)
  }

  signout = () => {
    this.setState({
      first_name: ''
    })
    localStorage.removeItem('token')
  }

  signup = () => {
    console.log("SIGN UP")
  }

  render(){

    const {signup, signin, signout} = this

    return (
      <Router>
        <div className="App">
          < NavBar id={this.state.id} first_name={this.state.first_name} signup={signup} signin={signin} signout={signout}/>
          <Switch>
              < Route exact path = '/' component={routerProps => < HomeContainer {...routerProps}/>}/>
              < Route path='/sites/:id' component={routerProps => < SiteContainer {...routerProps} />}/>
              {/* < Route path = '/signin' component={routerProps => < SignInModal {...routerProps} signin={signin}/>}/> */}
              {/* < Route path = '/signup' component={routerProps => < SignUpContainer {...routerProps} />}/> */}
              < Route path = '/profile' component={routerProps => < ProfileContainer {...routerProps} />}/>
              < Route path = '/users/:id/saved' component={routerProps => < SavedContainer {...routerProps} />}/>
              < Route component={() => <h1>Page Not Found</h1>} />
          </Switch>
        </div> 
      </Router>
          
    )
  }

  
}

export default App
