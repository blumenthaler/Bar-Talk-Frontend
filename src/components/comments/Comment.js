import React from 'react'


class Comment extends React.Component {
    render() {
        return (
            <li>
                {this.props.comment.content}
            </li>
        )
    }
}

export default Comment