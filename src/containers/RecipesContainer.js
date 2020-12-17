import React from 'react';
import { connect } from 'react-redux';
import Recipes from '../components/Recipes.js';
// import { loginUser } from '../actions/loginUser.js';

class RecipesContainer extends React.Component {

    render() {
        // console.log(this.props.state)
        // console.log(this.props)
        return (
            <Recipes />
        )
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}

// map state/dispatch to props here
// const mapDispatchToProps = dispatch => {
//     return {
//         loginUser: user => dispatch(loginUser(user))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)
export default connect(mapStateToProps)(RecipesContainer)