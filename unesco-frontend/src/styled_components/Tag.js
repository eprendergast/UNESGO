import React from 'react'
import { Link } from 'react-router-dom'

const Tag = props => {
  return (
    <Link to={`/search_by_tag/${props.tag}`}>
      <div className='tag'>{props.tag}</div>
    </Link>
  )
}

export default Tag
