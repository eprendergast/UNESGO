import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import SignInForm from './components/SignInForm'
import Profile from './components/Profile'

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
              < Route exact path = '/' component={() => <h1>Homepage!</h1>}/>
              < Route path = '/signin' component={routerProps => <SignInForm {...routerProps} signin={this.signin}/>}/>
              {/* < Route path = '/signup' component={routerProps => <SignUpForm {...routerProps} />}/> */}
              < Route path = '/profile' component={routerProps => <Profile {...routerProps} email={this.state.email}/>}/>
              < Route component={() => <h1>Page Not Found</h1>} />
          </Switch>
        </div> 
      </Router>
          
    )
  }

  
}

export default App
