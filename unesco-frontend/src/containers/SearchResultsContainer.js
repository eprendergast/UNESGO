import React from 'react'
import { withRouter } from 'react-router-dom'
import API from '../API'
import SitesContainer from './SitesContainer'
import { ClipLoader } from 'react-spinners'

class SearchResultsContainer extends React.Component {
  state = {
    sites: [],
    searchCriteria: '',
    loading: true
  }

  componentDidMount () {
    let url = this.props.match.url
    API.search(url).then(data => {
      this.setState({
        sites: data,
        searchCriteria: url
          .split('=')[1]
          .split('+')
          .join(' '),
        loading: false
      })
    })
  }

  render () {
    const { bucketlist_site_ids, visited_site_ids } = this.props
    const { sites, searchCriteria, loading } = this.state

    return (
      <div>
        {loading ? (
          <ClipLoader />
        ) : (
          <div>
            <h1>{`Displaying results for "${searchCriteria}"`}</h1>
            <SitesContainer
              sites={sites.slice(0, 10)}
              visited_site_ids={visited_site_ids}
              bucketlist_site_ids={bucketlist_site_ids}
            />
          </div>
        )}
      </div>
    )
  }
}

export default withRouter(SearchResultsContainer)
