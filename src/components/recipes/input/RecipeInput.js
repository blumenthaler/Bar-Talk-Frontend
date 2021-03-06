import React from 'react';
import {RecipeWithCocktail} from './RecipeWithCocktail.js'
import {connect} from 'react-redux';
import {addRecipe} from '../../../actions/recipes.js'
import { CancelInputButton } from './CancelInputButton.js';
import { Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';

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
        let name
        if (!!this.props.cocktail) {
            let getName = document.getElementById(`${this.props.cocktail.id}_name`).innerText.split('NAME: ')[1]

            name = getName.toLowerCase()

            let spirit = document.getElementById(`${this.props.cocktail.id}_spirit`).innerText.split('SPIRIT: ')[1].toLowerCase()
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
            let sendable = {
                ...this.state,
                name: this.state.name.toLowerCase(),
                spirit: this.state.spirit.toLowerCase()
            }
            this.props.addRecipe(sendable, this.props.currentUser.data, this.props.history)  
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

    findTextFieldStyle = () => {
        if (!this.props.cocktail) {
            return {marginLeft: '22%'}
        }
        else {
            return {marginLeft: '2%'}
        }
    }

    setButtonId = () => {
        if (!this.props.cocktail) {
            return "add-recipe-no-cocktail-btn"
        }
        else {
            return "add-recipe-with-cocktail-btn"
        }
    }

    render() {
        return (
            <>
            <form className={this.props.classes.root} noValidate autoComplete="off" style={{display: "inline-block", color: "black"}} onSubmit={(event) => this.handleOnSubmit(event)}> 
                {!this.props.cocktail ? 
                    <>
                    <h1 style={{color: '#ffe8d4'}}>Add a New Recipe!</h1>
                    <Input style={this.findTextFieldStyle()} placeholder="Name:" name="name" value={this.state.name} onChange={this.handleOnChange} /><br />
                    <Input style={this.findTextFieldStyle()} placeholder="Spirit:" name="spirit" value={this.state.spirit} onChange={this.handleOnChange} /><br />
                    </> 
                    : <RecipeWithCocktail cocktail={this.props.cocktail} />       
                }
                <Input style={this.findTextFieldStyle()} placeholder="Ingredients:" name="ingredients" value={this.state.ingredients} onChange={this.handleOnChange} /><br />

                <Input style={this.findTextFieldStyle()} placeholder="Garnish:" name="garnish" value={this.state.garnish} onChange={this.handleOnChange} /><br />

                <Input style={this.findTextFieldStyle()} placeholder="Notes:" name="notes" value={this.state.notes} onChange={this.handleOnChange} /><br /><br />

                <Button id={this.setButtonId()} variant="contained" onClick={() => this.handleOnSubmit()}>Add Recipe</Button>
                <input type='submit' className="hidden"></input>
                {this.props.cocktail ? <CancelInputButton triggerRecipeForm={this.props.triggerRecipeForm} /> : null }
            </form>
            <br />
            </>
        )
    }
}

export default connect(null, {addRecipe})(RecipeInput)