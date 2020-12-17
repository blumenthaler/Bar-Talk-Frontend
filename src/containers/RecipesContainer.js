import React from 'react';
import { connect } from 'react-redux';
import Recipes from '../components/Recipes.js';
import { getAllRecipes } from '../actions/recipes.js';

class RecipesContainer extends React.Component {

    componentDidMount() {
        this.props.getAllRecipes()
    }

    render() {
        return (
            <div>
                <Recipes recipes={this.props.recipes}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes.data
    }
}

export default connect(mapStateToProps, {getAllRecipes})(RecipesContainer)