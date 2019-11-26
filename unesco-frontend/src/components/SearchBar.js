import React from 'react'
import { withRouter } from 'react-router-dom'

import searchTypes from '../searchFormData/searchTypes'
import categories from '../searchFormData/categories'
import regions from '../searchFormData/regions'
import states from '../searchFormData/states'

import { Button, Form, Select } from 'semantic-ui-react'

class SearchBar extends React.Component {
  state = {
    keywords: '',
    searchType: '',
    selection: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    let searchQuery = `${this.state.searchType}=${this.state.selection
      .split(' ')
      .join('+')}`
      this.props.history.push(`/search/${searchQuery}`)
  }

  handleDropdownChange = (event, data) => {
    event.preventDefault()
    this.setState({
      [data.name]: data.value
    })
  }

  handleKeywordChange = event => {
    this.setState({
      keywords: event.target.value
    })
  }

  stateOptions = () => {
    let stateOptions = []
    states.forEach((state, index) => {
      stateOptions = [
        ...stateOptions,
        {
          key: index,
          text: state,
          value: state
        }
      ]
    })
    return stateOptions
  }

  getSelectionOptions = () => {
    switch (this.state.searchType) {
      case 'category':
        return categories
      case 'region':
        return regions
      case 'state':
        return this.stateOptions()
    }
  }

  render () {
    return (
      <Form onChange={this.handleKeywordChange} onSubmit={this.handleSubmit}>
        <Form.Group width='equal'>
          <Form.Field>
            <input
              name='keywords'
              placeholder="Try 'ancient ruins'"
              value={this.state.keywords}
            />
          </Form.Field>

          <Form.Field
            name='searchType'
            control={Select}
            options={searchTypes}
            onChange={this.handleDropdownChange}
            placeholder='Search Type...'
          />

          <Form.Field
            name='selection'
            control={Select}
            options={this.getSelectionOptions()}
            placeholder='Selection...'
            onChange={this.handleDropdownChange}
          />
          <Button type='submit'>Search</Button>
        </Form.Group>
      </Form>
    )
  }
}

export default withRouter(SearchBar)
