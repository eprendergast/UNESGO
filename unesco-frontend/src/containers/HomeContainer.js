import React from 'react'
import API from '../API'
import SitesContainer from './SitesContainer'
import {Header} from 'semantic-ui-react'


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
                <Header as='h1'>Welcome to UNESGO</Header>
                <Header as='h3'>Explore UNESCO World Heritage Sites from around the world</Header>

                <SitesContainer sites={this.state.sites}/>
            </div>
        )
    }

}

export default HomeContainer