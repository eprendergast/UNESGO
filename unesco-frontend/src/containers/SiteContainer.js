import React from 'react'
import API from '../API'
import { Container, Header } from 'semantic-ui-react'
import Styled from 'styled-components'

class SiteContainer extends React.Component {
  state = {
    site: {}
  }

  componentDidMount () {
    API.getSite(this.props.match.params['id']).then(data =>
      this.setState({
        site: data
      })
    )
  }

  render () {
    const {
      name,
      danger,
      date_inscribed,
      http_url,
      image_url,
      short_description,
      category,
      region,
      states
    } = this.state.site

    return (
      <div className={this.props.className}>
        <Header as='h1'>{name}</Header>
        <img src={image_url} alt={name} />
        <Container>
          <p>Date inscribed: {date_inscribed}</p>
          <p>Category:</p>
          <p>Region:</p>
          <p>Danger: {danger === null ? 'No' : danger}</p>
        </Container>
        <Container>
          <p>{short_description}</p>
        </Container>
        <Container>
          <p>TAGS HERE</p>
        </Container>
      </div>
    )
  }
}

export default Styled(SiteContainer)`
`
