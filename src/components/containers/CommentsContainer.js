import React from 'react';
import { connect } from 'react-redux';
import Comments from '../comments/Comments.js';
import { getAllComments } from '../../actions/comments.js';

class CommentsContainer extends React.Component {

    componentDidMount() {
        this.props.getAllComments()
    }

    render() {
        if ((this.props.comments.loading) || (!this.props.comments.comments.data)) {
            return (<h2>Loading...</h2>)
        }
        else {
        const users = this.props.included.filter(data => data.type === "user")
        const comments = this.props.comments.comments.data.filter(comment => (this.props.recipe.relationships.comments.data.map(comment => comment.id)).includes(comment.id.toString()))
        
            return (
                <div>
                    <Comments comments={comments}
                    users={users} /> 
                </div>
            )
            }    
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comments,
        included: state.comments.comments.included
    }
}

export default connect(mapStateToProps, {getAllComments})(CommentsContainer)