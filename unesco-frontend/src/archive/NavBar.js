import React from 'react'
import { Menu, Input, Button } from 'semantic-ui-react'
import logo from '../images/unesgo4.png'

import SignInModal from '../modals/SignInModal'
import SignUpModal from '../modals/SignUpModal'

import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render () {
    const { user_id, first_name, signup, signin, signout } = this.props

    return (
      <Menu className="navbar-container">
        <Menu.Item header>
          <Link to={`/`}> <img src={logo} alt='UNESGO Logo' style={{width:" 100px"}}/> </Link>
        </Menu.Item>

        <Menu.Item position='right'>
          {first_name && `Welcome back, ${first_name}`}
        </Menu.Item>

        <Menu.Item position='right'>
          {first_name ? (
            <Link to={`/users/${user_id}/saved`}>
              {' '}
              <Button>Saved</Button>{' '}
            </Link>
          ) : (
            <SignUpModal signin={signin} signup={signup} />
          )}
        </Menu.Item>

        <Menu.Item position='right'>
          {first_name ? (
            <Button onClick={() => signout()}>Logout</Button>
          ) : (
            <SignInModal signin={signin} />
          )}
        </Menu.Item>
      </Menu>
    )
  }
}

export default NavBar
