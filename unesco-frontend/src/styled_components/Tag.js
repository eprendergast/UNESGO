import React from 'react'
import { Link } from 'react-router-dom'

const Tag = (props) => {
    return(
        <div className="tag">
            {props.tag}
        </div>
    )
}

export default Tag