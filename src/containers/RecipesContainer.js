import React from 'react';
import { connect } from 'react-redux';
import Recipes from '../components/Recipes.js';
// import { loginUser } from '../actions/loginUser.js';
import { getAllRecipes } from '../actions/recipes.js';

class RecipesContainer extends React.Component {

    componentDidMount() {
        this.props.getAllRecipes()
    }

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
export default connect(mapStateToProps, {getAllRecipes})(RecipesContainer)