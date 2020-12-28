import React from 'react'


const Comment = props => {
    return (
        <li>
            {props.user.attributes.username}: "{props.comment.attributes.content}"
        </li>
    )
}

export default Comment