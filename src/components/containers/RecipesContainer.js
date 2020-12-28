import React from 'react';
import currentUser from '../../reducers/currentUser.js';
// import { connect } from 'react-redux';
import Recipes from '../recipes/Recipes.js';


class RecipesContainer extends React.Component {

    render() {
        const filteredRecipes = this.props.recipes.filter(recipe => recipe.relationships.user.data.id === this.props.user.id)
        
        return (
            <div>
                <Recipes user={this.props.user} recipes={filteredRecipes} currentUser={this.props.currentUser} />
            </div>
        )
    }
}

export default RecipesContainer