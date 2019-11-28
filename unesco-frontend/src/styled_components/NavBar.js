import React from 'react'
import { Link } from 'react-router-dom'
import SignUpModal from '../modals/SignUpModal'
import SignInModal from '../modals/SignInModal'

import logo from '../images/airbnb-logo.png'
import name from '../images/unesgo4.png'

class NavBar extends React.Component {
    
    linksToRender = () => {
        const { user_id, first_name, signup, signin, signout } = this.props
        if (first_name){
            return(
                <div className="navbar-links-container">
                    <div className="navbar-button-container">
                        <SignUpModal signin={signin} signup={signup} />
                    </div>
                    <div className="navbar-user-container">
                        <SignInModal signin={signin} />
                    </div>
                </div>
            )
        } else {
            return(
                <div className="navbar-links-container">
                <div className="navbar-button-container">
                    <SignUpModal signin={signin} signup={signup} />
                </div>
                <div className="navbar-button-container">
                    <SignInModal signin={signin} />
                </div>
            </div>
            )
        }
    }


    render(){
        const { user_id, first_name, signup, signin, signout } = this.props
        return(
            <div className="navbar-container">
                
                <Link to={`/`}>
                <div className="navbar-logo-container">
                    <img className="navbar-logo" src={logo} alt="UNESGO Logo"/>
                    <img className="navbar-name" src={name} alt="UNESGO Name"/>
                </div>
                </Link>
 
                <div className="navbar-links-container">
                    <div className="navbar-button-container">
                        <SignUpModal signin={signin} signup={signup} />
                    </div>
                    <div className="navbar-user-container">
                        <SignInModal signin={signin} />
                    </div>
                </div>

            </div>
        )
    }
}

export default NavBar