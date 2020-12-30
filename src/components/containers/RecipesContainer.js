import React from 'react';
import currentUser from '../../reducers/currentUser.js';
import { connect } from 'react-redux';
import Recipes from '../recipes/Recipes.js';
import RecipeInput from '../recipes/RecipeInput.js';
import { addRecipe } from '../../actions/recipes.js';


class RecipesContainer extends React.Component {

    render() {
        const filteredRecipes = this.props.recipes.filter(recipe => recipe.relationships.user.data.id === this.props.user.id)
        
        return (
            <div>
                <Recipes user={this.props.user} recipes={filteredRecipes} currentUser={this.props.currentUser} />
                <RecipeInput currentUser={this.props.currentUser} addRecipe={this.props.addRecipe} cocktail={this.props.cocktail} history={this.props.history}/>
            </div>
        )
    }
}


export default connect(null, {addRecipe})(RecipesContainer)