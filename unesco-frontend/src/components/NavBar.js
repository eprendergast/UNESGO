import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthenticationModal from '../modals/AuthenticationModal'

import logo from '../images/unesco-logo.png'
import name from '../images/unesgo4.png'
import profile_photo_placheolder from '../images/profile-photo-placheolder.png'

class NavBar extends React.Component {
  
  linksToRender = () => {
    const { user_id, first_name, signin, signout } = this.props
    if (first_name) {
      return (
        <div className='navbar-links-container'>
          <div className='navbar-button-container'>
            <Link to={`/users/${user_id}/saved`}>
              {' '}
              <button className='navbar-button'>Saved</button>{' '}
            </Link>
          </div>
          <div className='navbar-button-container'>
            <button className='navbar-button' onClick={() => signout()}>
              Logout
            </button>
          </div>
          <div className='navbar-user-container'>
            <button className='navbar-button'>{`Welcome back, ${first_name}`}</button>
          </div>
          <img
            className='navbar-logo'
            src={profile_photo_placheolder}
            alt='profile_photo_placheolder'
          />
        </div>
      )
    } else {
      return (
        <div className='navbar-links-container'>
          <div className='navbar-button-container'>
            <AuthenticationModal
              status={'signup'}
              signin={signin}
              modalTrigger={this.signUpButton}
            />
          </div>
          <div className='navbar-button-container'>
            <AuthenticationModal
              status={'login'}
              signin={signin}
              modalTrigger={this.loginButton}
            />
          </div>
        </div>
      )
    }
  }

  signUpButton = () => {
    return <button className='navbar-button'>Sign up</button>
  }

  loginButton = () => {
    return <button className='navbar-button'>Login</button>
  }

  render () {
    return (
      <div className='navbar-container'>
        <Link to={`/`}>
          <div className='navbar-logo-container'>
            <img className='navbar-logo' src={logo} alt='UNESGO Logo' />
            <img className='navbar-name' src={name} alt='UNESGO Name' />
          </div>
        </Link>

        {this.linksToRender()}
      </div>
    )
  }
}

export default withRouter(NavBar)
