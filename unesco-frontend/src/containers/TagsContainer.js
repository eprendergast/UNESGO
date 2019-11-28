import React from 'react'
import { Link } from 'react-router-dom'
import Tag from '../styled_components/Tag'

const TagsContainer = (props) => {
    return(
        <div className="tags-container">
            {props.tags && props.tags.map(tag => <Tag tag={tag}/>)}
        </div>
    )
}

export default TagsContainer