import React from 'react'
import {Menu, Input, Button} from 'semantic-ui-react'
import logo from '../unesco-logo.png'

class NavBar extends React.Component {

    render(){
        const {email, signout} = this.props

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
                    {email ? `Welcome back, ${email}` : `Sign In`}
                </Menu.Item>

                <Menu.Item position='right'>
                    {email ? <Button onClick={() => signout()} >Logout</Button> : <Button>Login</Button>}
                </Menu.Item>

            </Menu>

        )
    }

}

export default NavBar