import React from 'react'

class NavBar extends React.Component {

    render(){
        const {email, signout} = this.props

        return(
            <header className="App">
              {email ? `Welcome back, ${email}` : `Welcome to UNESGO`}
              {email &&  <button onClick={() => signout()}>Sign Out</button>}
            </header>
        )
    }

}

export default NavBar