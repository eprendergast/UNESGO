import React from 'react'
import SitesContainer from './SitesContainer'
import API from '../API'
import { Header } from 'semantic-ui-react'

class SavedContainer extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      saved_sites: props.savedSites,
      saved_sites_data: []
    }
  }

  componentDidMount () {
    localStorage.getItem('token') ? this.getSavedSites() : this.props.history.push('/')
  }

  getSavedSites = async () => {
    const user_id = this.props.match.params['id']

    const saved_sites = await API.getSavedSites(user_id)

    this.setState({ saved_sites }, this.getSavedSiteData)
  }

  getSavedSiteData = async () => {
    const { saved_sites } = this.state

    const site_data_promises = saved_sites.map(saved_site =>
      API.getSite(saved_site.site_reference_id)
    )

    const site_data = await Promise.all(site_data_promises)

    this.updateSavedSitesData(site_data)
  }

  updateSavedSitesData = saved_sites_data => {
    this.setState({
      saved_sites_data
    })
  }

  getBucketlistSites = () => {}

  getVisitedSites = () => {}

  render () {
    return (
      <div>
        <Header as={'h1'}>Saved</Header>
        <SitesContainer sites={this.state.saved_sites_data} />
      </div>
    )
  }
}

export default SavedContainer
