import React from 'react'
import SitesContainer from './SitesContainer'
import API from '../API'
import { Header } from 'semantic-ui-react'

class SavedContainer extends React.Component {
  state = {
    bucketlist: [],
    visited: []
  }

  componentDidMount () {
    localStorage.getItem('token')
      ? this.getSavedSiteData()
      : this.props.history.push('/')
  }

  getSavedSiteData = async () => {
    const { user_id } = this.props

    const bucketlist = await API.getBucketlist(user_id)
    const visited = await API.getVisited(user_id)

    this.setState({
      bucketlist,
      visited
    })
  }

  render () {
    const { bucketlist_site_ids, visited_site_ids } = this.props
    const { bucketlist, visited } = this.state
    return (
      <div>
        <Header as={'h1'}>Bucketlist</Header>
        <SitesContainer
          sites={bucketlist}
          bucketlist_site_ids={bucketlist_site_ids}
          visited_site_ids={visited_site_ids}
        />
        <Header as={'h1'}>Visited</Header>
        <SitesContainer
          sites={visited}
          bucketlist_site_ids={bucketlist_site_ids}
          visited_site_ids={visited_site_ids}
        />
      </div>
    )
  }
}

export default SavedContainer
