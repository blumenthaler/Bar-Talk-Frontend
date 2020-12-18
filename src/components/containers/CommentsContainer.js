import React from 'react';
import { connect } from 'react-redux';
import Comments from '../comments/Comments.js';
import { getAllComments } from '../../actions/comments.js';

class CommentsContainer extends React.Component {

    componentDidMount() {
        this.props.getAllComments()
    }

    render() {
        // console.log(this.props)
            return (
                <div>
                    {/* <Comments /> */}
                    <Comments comments={this.props.comments.comments.filter(comment => (this.props.recipe.relationships.comments.data.map(comment => comment.id)).includes(comment.id.toString()))} /> 
                        
                </div>
            )
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comments,
    }
}

export default connect(mapStateToProps, {getAllComments})(CommentsContainer)