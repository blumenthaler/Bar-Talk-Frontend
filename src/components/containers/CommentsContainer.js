import React from 'react';
import { connect } from 'react-redux';
import Comments from '../comments/Comments.js';
import { getAllComments, addComment } from '../../actions/comments.js';
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
        this.setState({
            showingCommentForm: !this.state.showingCommentForm,
            isEmptyState: !this.state.isEmptyState
        })
    }

    componentDidMount() {
        this.props.getAllComments()
    }

    render() {
       
        if ((this.props.comments.loading) || (!this.props.comments.comments.data)) {
            return (<h2>Loading...</h2>)
        }
        else {

        console.log(this.props.comments)

        const users = this.props.included.filter(data => data.type === "user")
        const comments = this.props.comments.comments.data.filter(comment => (this.props.recipe.relationships.comments.data.map(comment => comment.id)).includes(comment.id.toString()))
        
            return (
                <>
                <div>
                    <Comments comments={comments}
                    users={users} /><br />
                    {!this.state.showingCommentForm ? <NewCommentButton triggerCommentForm={this.triggerCommentForm}/> : <CommentInput user={this.props.currentUser} recipe={this.props.recipe} triggerCommentForm={this.triggerCommentForm} addComment={this.props.addComment}/> }
                </div>
                </>
            )
        }    
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comments,
        included: state.comments.comments.included,
    }
}

export default connect(mapStateToProps, {getAllComments, addComment})(CommentsContainer)