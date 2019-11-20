import React from 'react'

class Profile extends React.Component {

    componentDidMount(){
        if (this.props.email === '') {
            this.props.history.push('/') // IF USER NOT SIGNED IN, SEND TO HOMEPAGE
        }
    }

    render(){
        return(
            <div>
                This is the profile
            </div>
        )
    }

}

export default Profile