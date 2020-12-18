import React from 'react';
// import { connect } from 'react-redux';
import Comments from '../comments/Comments.js';
// import { getAllCocktails } from '../../actions/cocktails.js';

class CommentsContainer extends React.Component {

    // componentDidMount() {
    //     this.props.getAllCocktails()
    // }

    render() {

            return (
                <div>
                    <Comments />
                </div>
            )
    }
}

// const mapStateToProps = state => {
//     return {
//         cocktails: state.cocktails,
//     }
// }

// export default connect(mapStateToProps, {getAllCocktails})(CommentsContainer)
export default CommentsContainer