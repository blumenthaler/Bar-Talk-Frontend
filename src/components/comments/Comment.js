import React from 'react'

export default class Comment extends React.Component {
    
    handleDelete = () => {
        this.props.deleteComment()
    }

    render() {
    return (
            <>
                <li>
                    {this.props.user.attributes.username}: "{this.props.comment.attributes.content}"
                </li>
                {this.props.user.id === this.props.currentUser.data.id ? <button onClick={() => this.handleDelete}  >Delete</button> : null}
            </>
        )
    }
}