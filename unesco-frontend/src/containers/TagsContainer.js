import React from 'react'
import Tag from '../components/Tag'

const TagsContainer = (props) => {
    return(
        <div className="tags-container">
            {props.tags && props.tags.map(tag => <Tag key={tag} tag={tag}/>)}
        </div>
    )
}

export default TagsContainer