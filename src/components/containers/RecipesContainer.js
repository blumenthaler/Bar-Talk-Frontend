import React from 'react';
import { connect } from 'react-redux';
import Recipes from '../recipes/Recipes.js';
import RecipeInput from '../recipes/input/RecipeInput.js';
import { addRecipe, editingRecipe, deleteRecipe } from '../../actions/recipes.js';
import { NewRecipeButton } from '../recipes/input/NewRecipeButton.js';


class RecipesContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isEmptyState: true,
            showingRecipeForm: false
        }
    }

    triggerRecipeForm = () => {
        this.setState(prevState => {
            return {
                showingRecipeForm: !prevState.showingRecipeForm,
                isEmptyState: !prevState.isEmptyState
            }
        })
    }

    render() {
        if (!this.props.cocktail) {
            return (
                  <RecipeInput currentUser={this.props.currentUser} addRecipe={this.props.addRecipe} cocktail={this.props.cocktail} history={this.props.history} match={this.props.match} triggerRecipeForm={this.triggerRecipeForm} /> 
            )
        }
        else {
        const filteredRecipes = this.props.recipes.filter(recipe => recipe.relationships.user.data.id === this.props.user.id)
        return (
            <div>
                <Recipes user={this.props.user} recipes={filteredRecipes} currentUser={this.props.currentUser} comments={this.props.comments} editingRecipe={this.props.editingRecipe} deleteRecipe={this.props.deleteRecipe} />

                {this.state.showingRecipeForm ? <RecipeInput currentUser={this.props.currentUser} addRecipe={this.props.addRecipe} cocktail={this.props.cocktail} history={this.props.history} match={this.props.match} triggerRecipeForm={this.triggerRecipeForm} /> : 
                <NewRecipeButton currentUser={this.props.currentUser} addRecipe={this.props.addRecipe} cocktail={this.props.cocktail} history={this.props.history} triggerRecipeForm={this.triggerRecipeForm}/>}
            </div>
        )
        }
    }
}


export default connect(null, {addRecipe, editingRecipe, deleteRecipe})(RecipesContainer)