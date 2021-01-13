import React from 'react';
import {RecipeWithCocktail} from './RecipeWithCocktail.js'
import {connect} from 'react-redux';
import {addRecipe} from '../../../actions/recipes.js'
import { CancelInputButton } from './CancelInputButton.js';
import { Button } from '@material-ui/core';

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
        if (!!event) {event.preventDefault()}
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
            this.props.history.push(`/profile/`)   
        } 
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    findStyle = () => {
        if (!this.props.cocktail) {
            return {'margin-left': '25%', 'margin-right': '25%'}
        }
        else {
            return {'margin-left': '25%', 'margin-right': '25%', backgroundColor: '#d0e1d4'}
        }
    }

    render() {

        
        return (
            <>
            <form onSubmit={(event) => this.handleOnSubmit(event)}> 
                {!this.props.cocktail ? <><h1>Add a New Recipe!</h1><label className='form-label'>Name: </label><input type="text" name="name" className="form-field" onChange={this.handleOnChange} value={this.state.name}/><br />
                <label className='form-label'>Spirit: </label><input className="form-field" type="text" name="spirit" onChange={this.handleOnChange} value={this.state.spirit}/><br /></> : <RecipeWithCocktail cocktail={this.props.cocktail}/>}
                
                <label className='form-label'>Ingredients: </label><input className="form-field" type="text" name="ingredients" onChange={this.handleOnChange} value={this.state.ingredients}/><br />
                <label className='form-label'>Garnish: </label><input className="form-field" type="text" name="garnish" onChange={this.handleOnChange} value={this.state.garnish}/><br />
                <label className='form-label'>Notes: </label><input className="form-field" type="text" name="notes" onChange={this.handleOnChange} value={this.state.notes}/><br /><br />
                <input type="submit" className="hidden"/>

                <Button variant="contained" id='submit-login-button' style={this.findStyle()} onClick={() => this.handleOnSubmit()}>Add Recipe</Button><br /><br />
                {this.props.cocktail ? <CancelInputButton findStyle={this.findStyle} triggerRecipeForm={this.props.triggerRecipeForm} /> : null }
            </form>
            <br />
            </>
        )
    }
}

export default connect(null, {addRecipe})(RecipeInput)