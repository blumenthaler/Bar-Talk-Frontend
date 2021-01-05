import React from 'react'

export default class Comment extends React.Component {
    
    handleDelete = event => {
        event.preventDefault()
        this.props.deleteComment(this.props.comment)
    }

    render() {
    return (
            <>
                <li>
                    {this.props.user.attributes.username}: "{this.props.comment.attributes.content}"
                </li>
                {this.props.user.id === this.props.currentUser.data.id ? <button onClick={event => this.handleDelete(event)}  >Delete</button> : null}
            </>
        )
    }
}