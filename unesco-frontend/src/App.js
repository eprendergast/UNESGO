import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import HomeContainer from './containers/HomeContainer'
import SignInContainer from './containers/SignInContainer'
import SignUpContainer from './containers/SignUpContainer'
import ProfileContainer from './containers/Profile';
import SavedContainer from './containers/SavedContainer';

import './App.css';
import NavBar from './components/NavBar';
import API from './API';



class App extends React.Component {
  
  state = {
    email: ''
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
      email: user.email
    })
    localStorage.setItem('token', user.token)
  }

  signout = () => {
    this.setState({
      email: ''
    })
    localStorage.removeItem('token')
  }

  signup = () => {

  }

  render(){
    return (
      <Router>
        <div className="App">
          <NavBar email={this.state.email} signout={this.signout}/>
          <Switch>
              < Route exact path = '/' component={routerProps => < HomeContainer {...routerProps}/>}/>
              < Route path = '/signin' component={routerProps => < SignInContainer {...routerProps} signin={this.signin}/>}/>
              < Route path = '/signup' component={routerProps => < SignUpContainer {...routerProps} />}/>
              < Route path = '/profile' component={routerProps => < ProfileContainer {...routerProps} />}/>
              < Route path = '/saved' component={routerProps => < SavedContainer {...routerProps} />}/>
              < Route component={() => <h1>Page Not Found</h1>} />
          </Switch>
        </div> 
      </Router>
          
    )
  }

  
}

export default App
