import React from 'react'


class Comment extends React.Component {
    render() {
        console.log(this.props)
        return (
            <li>
                {this.props.comment.content}
            </li>
        )
    }
}

export default Comment