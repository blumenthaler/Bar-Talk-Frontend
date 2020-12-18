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
                <ul>
                    {this.props.comments.map(comment => <Comment 
                   comment={comment} key={comment.id} />)}
                </ul>
            )
        }
    }
}

export default Comments