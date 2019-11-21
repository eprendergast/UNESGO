import React from 'react'
import API from '../API'
import SitesContainer from './SitesContainer'


class HomeContainer extends React.Component {
    
    state = {
        sites: []
    }

    componentDidMount(){
        API.getSites().then(data => this.setState({
            sites: data
        }))
    }

    render(){
        return (
            <div>
                <SitesContainer sites={this.state.sites}/>
            </div>
        )
    }

}

export default HomeContainer