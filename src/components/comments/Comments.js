import React from 'react'
import Comment from './Comment.js'

class Comments extends React.Component {

    render() {
        if (!this.props.comments) {
            return (
                <div>Loading...</div>
            )
        }
        else {
            return (
                <>
                <h4>Comments</h4>
                <ul>
                    {this.props.comments.map(comment => <Comment 
                   comment={comment} key={comment.id} user={this.props.users.find(user => user.id === comment.relationships.user.data.id)} currentUser={this.props.currentUser} deleteComment={this.props.deleteComment} />)}
                </ul>
                </>
            )
        }
    }
}

export default Comments