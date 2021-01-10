import React from 'react'
import Comment from './Comment.js'
import { NewCommentButton } from '../comments/NewCommentButton.js';
import CommentInput from '../comments/CommentInput.js'


export const Comments = props => {
        if (!props.comments) {
            return (
                <div>Loading...</div>
            )
        }
        else {
            return (
                <>
                <h4>Comments</h4>
                <ul>
                    {props.comments.map(comment => <Comment 
                        comment={comment}
                        key={comment.id} 
                        user={props.users.find(user => user.id === comment.relationships.user.data.id)} 
                        currentUser={props.currentUser} 
                        deleteComment={props.deleteComment}
                        history={props.history} 
                        match={props.match} 
                    />)}

                    
                </ul>
                <br />
                    {!props.showingCommentForm ? <NewCommentButton triggerCommentForm={props.triggerCommentForm} recipe={props.recipe}/> : <CommentInput user={props.currentUser} recipe={props.recipe} triggerCommentForm={props.triggerCommentForm} addComment={props.addComment} history={props.history} match={props.match} /> }
                </>
            )
        }
}