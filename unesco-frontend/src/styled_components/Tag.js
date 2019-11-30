import React from 'react'
import { Link } from 'react-router-dom'

const Tag = props => {
  return (
    <Link to={`/search_by_tag/${props.tag}`}>
      <div className='tag'>
        <div className="tag-text"> 
          {props.tag}
        </div>
      </div>
    </Link>
  )
}

export default Tag
