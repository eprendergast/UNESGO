import React from 'react'
import SitesContainer from './SitesContainer'
import API from '../API'
import { Header } from 'semantic-ui-react'

class SavedContainer extends React.Component {
    
    state = {
        saved_sites: [],
        saved_sites_data: []
    }

    componentDidMount(){
        const user_id = this.props.match.params["id"]

        API.getSavedSites(user_id).then(
            data => this.setState({
                saved_sites: data
            })
        ).then(() => {
            this.state.saved_sites.forEach(saved_site => {
                API.getSite(saved_site.site_reference_id).then(this.updateSavedSitesData)
            })
        }
        )
    }

    updateSavedSitesData = (site_data) => {
        this.setState({
            saved_sites_data: [
                ...this.state.saved_sites_data,
                site_data
            ]
        })
    }

    getBucketlistSites = () => {

    }

    getVisitedSites = () => {
        
    }

    render(){
        return (
            <div>
                <Header as={'h1'}>Saved</Header>
                < SitesContainer sites={this.state.saved_sites_data}/>
            </div>
        )
    }
    

}

export default SavedContainer