import React from 'react'
import { withRouter } from 'react-router-dom'

import searchTypes from '../data/searchTypes'
import categories from '../data/categories'
import regions from '../data/regions'
import states from '../data/states'

import { Form, Select } from 'semantic-ui-react'

class SearchBar extends React.Component {
  state = {
    keywords: '',
    searchType: '',
    selection: ''
  }

  handleSubmit = event => {
    debugger
    event.preventDefault()

    if (this.state.searchType === 'tag'){
      this.props.history.push(`/search_by_tag/${this.state.keywords}`)
    } else {
      let searchQuery = `${this.state.searchType}=${this.state.selection
        .split(' ')
        .join('+')}`
      this.props.history.push(`/search/${searchQuery}`)
    }
  }

  handleDropdownChange = (event, data) => {
    event.preventDefault()
    this.setState({
      [data.name]: data.value,
      keywords: ''
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
      default: 
        return ''
    }
  }

  selectionFieldToRender = () => {
    if (this.state.searchType === 'tag'){
      return (
          <Form.Field>
            <input
              name='keywords'
              placeholder="Try 'Architecture'"
              value={this.state.keywords}
            />
          </Form.Field>
      )
    } else {
      return (
          <Form.Field
            name='selection'
            control={Select}
            options={this.getSelectionOptions()}
            placeholder='Selection...'
            onChange={this.handleDropdownChange}
          />
      )
    }
    
  }

  render () {

    const {handleKeywordChange, handleSubmit, handleDropdownChange, selectionFieldToRender} = this

    return (
      <Form onChange={handleKeywordChange} onSubmit={handleSubmit}>

        <div className='search-form-container'>

          <div className='search-field'>
            <Form.Field
              name='searchType'
              control={Select}
              options={searchTypes}
              onChange={handleDropdownChange}
              placeholder='Search Type...'
            />
          </div>

          <div className='search-field'>
            {selectionFieldToRender()}
          </div>

          <Form.Field>
          <div className='search-field'>
            <button className='primary-button' type='submit'>
              Search
            </button>
          </div>
          </Form.Field>

        </div>

      </Form>
    )
  }
}

export default withRouter(SearchBar)
