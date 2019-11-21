import React from 'react'
import {Menu, Input, Button, Modal, Image, Header} from 'semantic-ui-react'
import logo from '../unesco-logo.png'

import SignInModal from '../modals/SignInModal'
import SignInForm from './SignInForm'
import { sign } from 'crypto'

import {Link} from 'react-router-dom'
import SignUpModal from '../modals/SignUpModal'

class NavBar extends React.Component {

    render(){
        const {first_name, signup, signin, signout} = this.props

        return(

            <Menu>

                <Menu.Item header>
                    <img src={logo} alt="UNESCO Logo"/>
                </Menu.Item>
                
                <Menu.Item header>
                    UNESGO
                </Menu.Item>
                
                <Menu.Item>
                    <Input className='icon' icon='search' placeholder="Try 'ancient ruins'" />
                </Menu.Item>

                <Menu.Item position='right'>
                    {first_name && `Welcome back, ${first_name}`}
                </Menu.Item>

                <Menu.Item position='right'>
                    { first_name ? <Button>Saved</Button> : <SignUpModal signin={signin} signup={signup}/> }
                </Menu.Item>

                <Menu.Item position='right'>
                    { first_name ? <Button onClick={() => signout()} >Logout</Button> : <SignInModal signin={signin}/> }
                </Menu.Item>

            </Menu>

        )
    }

}

export default NavBar