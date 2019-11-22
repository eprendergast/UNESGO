import React from 'react'
import { Menu, Input, Button } from 'semantic-ui-react'
import logo from '../unesco-logo.png'

import SignInModal from '../modals/SignInModal'
import SignUpModal from '../modals/SignUpModal'

import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render () {
    const { id, first_name, signup, signin, signout } = this.props

    return (
      <Menu>
        <Menu.Item header>
          <img src={logo} alt='UNESCO Logo' />
        </Menu.Item>

        <Menu.Item header><Link to={'/'}> UNESGO </Link></Menu.Item>

        <Menu.Item>
          <Input
            className='icon'
            icon='search'
            placeholder="Try 'ancient ruins'"
          />
        </Menu.Item>

        <Menu.Item position='right'>
          {first_name && `Welcome back, ${first_name}`}
        </Menu.Item>

        <Menu.Item position='right'>
          {first_name ? (
            <Link to={`/users/${id}/saved`}>
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
