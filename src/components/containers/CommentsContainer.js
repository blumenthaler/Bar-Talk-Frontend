import React from 'react';
import { connect } from 'react-redux';
import Comments from '../comments/Comments.js';
import { getAllComments, addComment, deleteComment } from '../../actions/comments.js';
import { NewCommentButton } from '../comments/NewCommentButton.js';
import CommentInput from '../comments/CommentInput.js'

class CommentsContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isEmptyState: true,
            showingCommentForm: false
        }
    }

    triggerCommentForm = () => {
        this.setState(prevState => {
            return {
                showingCommentForm: !prevState.showingCommentForm,
                isEmptyState: !prevState.isEmptyState
            }
        })
    }

    componentDidMount() {
        this.props.getAllComments()
    }

    render() {
        if ((this.props.comments.loading) || (!this.props.comments) || (!this.props.included)) {
            return (<h2>Loading...</h2>)
        }
        else {
  
        const users = this.props.included.filter(data => data.type === "user")
        const filtered = this.props.comments.filter(comment => (this.props.recipe.relationships.comments.data.map(data => data.id)).includes(comment.id))
            return (
                <>
                <div>
                    <Comments comments={filtered}
                    users={users} currentUser={this.props.currentUser} deleteComment={this.props.deleteComment} /><br />
                    {!this.state.showingCommentForm ? <NewCommentButton triggerCommentForm={this.triggerCommentForm} recipe={this.props.recipe}/> : <CommentInput user={this.props.currentUser} recipe={this.props.recipe} triggerCommentForm={this.triggerCommentForm} addComment={this.props.addComment} history={this.props.history} match={this.props.match} /> }
                </div>
                </>
            )
        }    
    }
}

const mapStateToProps = state => {
    return {
        included: state.comments.comments.included,
        test: state.comments
    }
}

export default connect(mapStateToProps, {getAllComments, addComment, deleteComment})(CommentsContainer)