import React from 'react';
import {RecipeWithCocktail} from './RecipeWithCocktail.js'
import {connect} from 'react-redux';
import {addRecipe} from '../../../actions/recipes.js'
import { CancelInputButton } from './CancelInputButton.js';

class RecipeInput extends React.Component {
    
    state = {
        name: "",
        spirit: "",
        ingredients: "",
        garnish: "",
        notes: "",
        votes: 0
    }

    handleOnSubmit = event => {
        event.preventDefault()
        if (!!this.props.cocktail) {
            let name = document.getElementById(`${this.props.cocktail.id}_name`).innerText.split('Name: ')[1]
            let spirit = document.getElementById(`${this.props.cocktail.id}_spirit`).innerText.split('Spirit: ')[1]
            let sendable = {
                ...this.state,
                name,
                spirit
            }
            this.props.addRecipe(sendable, this.props.currentUser.data, this.props.history)
            this.setState({
                name,
                spirit,
                ingredients: "",
                garnish: "",
                notes: "",
                votes: 0
            })
            this.props.triggerRecipeForm()
            this.props.history.push(`${this.props.match.url}/`)   
        }
        else {
            this.props.addRecipe(this.state, this.props.currentUser.data, this.props.history)  
            this.setState({
                name: "",
                spirit: "",
                ingredients: "",
                garnish: "",
                notes: "",
                votes: 0
            })
            this.props.triggerRecipeForm()
            this.props.history.push(`${this.props.match.url}/`)   
        } 
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <>
            <form onSubmit={(event) => this.handleOnSubmit(event)}> 
                {!this.props.cocktail ? <><h1>Add a New Recipe!</h1><label>Name: </label><input type="text" name="name" onChange={this.handleOnChange} value={this.state.name}/><br />
                <label>Spirit: </label><input type="text" name="spirit" onChange={this.handleOnChange} value={this.state.spirit}/><br /></> : <RecipeWithCocktail cocktail={this.props.cocktail}/>}
                
                <label>Ingredients: </label><input type="text" name="ingredients" onChange={this.handleOnChange} value={this.state.ingredients}/><br />
                <label>Garnish: </label><input type="text" name="garnish" onChange={this.handleOnChange} value={this.state.garnish}/><br />
                <label>Notes: </label><input type="text" name="notes" onChange={this.handleOnChange} value={this.state.notes}/><br /><br />
                <input type="submit"/><br />
                {this.props.cocktail ? <CancelInputButton triggerRecipeForm={this.props.triggerRecipeForm} /> : null }
            </form>
            <br />
            </>
        )
    }
}

export default connect(null, {addRecipe})(RecipeInput)