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

        // const {comments} = this.props
        // console.log(this.props)
            return (
                <div>
                    {/* <Comments /> */}
                    <Comments comments={this.props.comments.comments.data.filter(comment => (this.props.recipe.relationships.comments.data.map(comment => comment.id)).includes(comment.id.toString()))}
                    users={this.props.users.users} /> 
                </div>
            )
            }    
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comments,
        users: state.users
    }
}

export default connect(mapStateToProps, {getAllComments})(CommentsContainer)