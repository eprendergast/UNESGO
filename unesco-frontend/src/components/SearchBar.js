import React from 'react'

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

  handleKeywordChange = event => {
    this.setState({
      keywords: event.target.value
    })
  }

  handleSearchTypeChange = event => {
    this.setState({
      searchType: event.target.children[0].innerText
    })
  }

  handleSelectionChange = event => {
    this.setState({
      selection: event.target.children[0].innerText
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
    switch (this.state.searchType){
      case 'Category':
        return categories;
      case 'Region':
        return regions;
      case 'Country':
        return this.stateOptions();
    }
  }

  render () {
    return (
      <Form onChange={this.handleKeywordChange}>
        <Form.Group width='equal'>
          <Form.Field>
            <input name='keywords' placeholder="Try 'ancient ruins'" value={this.state.keywords}/>
          </Form.Field>

          <Form.Field
            name='searchType'
            control={Select}
            options={searchTypes}
            onChange={this.handleSearchTypeChange}
            placeholder='Search Type...'
          />
          <Form.Field
            name='selection'
            control={Select}
            options={this.getSelectionOptions()}
            placeholder='Selection...'
            onChange={this.handleSelectionChange}
          />
          <Button type='submit'>Search</Button>
        </Form.Group>
      </Form>
    )
  }
}

export default SearchBar
