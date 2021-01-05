import React from 'react';
import currentUser from '../../reducers/currentUser.js';
import { connect } from 'react-redux';
import Recipes from '../recipes/Recipes.js';
import RecipeInput from '../recipes/input/RecipeInput.js';
import { addRecipe } from '../../actions/recipes.js';
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
        this.setState({
            showingRecipeForm: !this.state.showingRecipeForm,
            isEmptyState: !this.state.isEmptyState
        })
    }

    render() {
        const filteredRecipes = this.props.recipes.filter(recipe => recipe.relationships.user.data.id === this.props.user.id)
  
        return (
            <div>
                <Recipes user={this.props.user} recipes={filteredRecipes} currentUser={this.props.currentUser} comments={this.props.comments}/>

                {this.state.showingRecipeForm ? <RecipeInput currentUser={this.props.currentUser} addRecipe={this.props.addRecipe} cocktail={this.props.cocktail} history={this.props.history} triggerRecipeForm={this.triggerRecipeForm}/> : 
                <NewRecipeButton currentUser={this.props.currentUser} addRecipe={this.props.addRecipe} cocktail={this.props.cocktail} history={this.props.history} triggerRecipeForm={this.triggerRecipeForm}/>}
            </div>
        )
    }
}


export default connect(null, {addRecipe})(RecipesContainer)