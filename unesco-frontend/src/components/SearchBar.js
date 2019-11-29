import React from 'react'
import { withRouter } from 'react-router-dom'

import searchTypes from '../data/searchTypes'
import categories from '../data/categories'
import regions from '../data/regions'
import states from '../data/states'

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
        <div className='search-form-container'>
          <div className='search-field'>
            <Form.Field>
              <input
                name='keywords'
                placeholder="Try 'ancient ruins'"
                value={this.state.keywords}
              />
            </Form.Field>
          </div>

          <div className='search-field'>
            <Form.Field
              name='searchType'
              control={Select}
              options={searchTypes}
              onChange={this.handleDropdownChange}
              placeholder='Search Type...'
            />
          </div>

          <div className='search-field'>
            <Form.Field
              name='selection'
              control={Select}
              options={this.getSelectionOptions()}
              placeholder='Selection...'
              onChange={this.handleDropdownChange}
            />
          </div>

          <div className='search-field'>
            <button className='primary-button' type='submit'>
              Search
            </button>
          </div>

        </div>
      </Form>
    )
  }
}

export default withRouter(SearchBar)
