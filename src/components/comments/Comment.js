import React from 'react'


class Comment extends React.Component {
    render() {
        return (
            <li>
                {this.props.user.username}: "{this.props.comment.attributes.content}"
            </li>
        )
    }
}

export default Comment