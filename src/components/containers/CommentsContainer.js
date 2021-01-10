import React from 'react';
import { connect } from 'react-redux';
import {Comments} from '../comments/Comments.js';
import { Route, Link } from 'react-router-dom';
import { getAllComments, addComment, deleteComment } from '../../actions/comments.js';

class CommentsContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showingCommentForm: false
        }
    }

    triggerCommentForm = () => {
        this.setState(prevState => {
            return {
                showingCommentForm: !prevState.showingCommentForm,
            }
        })
    }

    componentDidMount() {
        this.props.getAllComments()
    }

    render() {
        if ((this.props.loading) || (!this.props.comments) || (!this.props.included)) {
            return (<h2>Loading...</h2>)
        }
        else {

        const users = this.props.included.filter(data => data.type === "user")
        const filtered = this.props.comments.filter(comment => (this.props.recipe.relationships.comments.data.map(data => data.id)).includes(comment.id))
            return (
                <>
                <div>
                    <br />
                    <Link to={`${this.props.match.url}comments`}>See Comments   </Link>

                    <Route path={`${this.props.match.path}/comments`} render={routerProps =>   <Comments {...routerProps} 
                        comments={filtered}
                        users={users} 
                        currentUser={this.props.currentUser}
                        deleteComment={this.props.deleteComment}
                        addComment={this.props.addComment}
                        recipe={this.props.recipe}
                        history={this.props.history} 
                        match={this.props.match}
                        showingCommentForm={this.state.showingCommentForm}
                        triggerCommentForm={this.triggerCommentForm}
                    />} 
                    />
                </div>
                </>
            )
        }    
    }
}

const mapStateToProps = state => {
    return {
        included: state.comments.comments.included,
        comments: state.comments.comments.data,
        loading: state.comments.loading
    }
}

export default connect(mapStateToProps, {getAllComments, addComment, deleteComment})(CommentsContainer)