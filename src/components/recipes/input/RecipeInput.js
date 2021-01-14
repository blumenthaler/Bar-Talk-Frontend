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
        if (!!this.props.cocktail) {
            let getName = document.getElementById(`${this.props.cocktail.id}_name`).innerText.split('NAME: ')[1].toLowerCase()

            let name
            if (getName.includes(" ")) {
                let splitted = getName.split(" ")
                let upperCased = splitted.map(word => word.charAt(0).toUpperCase() + word.slice(1))
                name = upperCased.join(" ")
            }
            else {
                name = getName.charAt(0).toUpperCase() + getName.slice(1);
            }
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

    findButtonStyle = () => {
        if (!this.props.cocktail) {
            return {'margin-left': '25%', 'margin-right': '25%'}
        }
        else {
            return {'margin-left': '25%', 'margin-right': '25%', backgroundColor: '#d0e1d4'}
        }
    }

    render() {
        const style = {color: '#71697a'}
        return (
            <>
            <form className={this.props.classes.root} noValidate autoComplete="off" style={{display: "inline-block", color: "black"}} onSubmit={(event) => this.handleOnSubmit(event)}> 
                {!this.props.cocktail ? 
                    <>
                    <h1 style={style}>Add a New Recipe!</h1>
                    <Input placeholder="Name:" name="name" value={this.state.name} onChange={this.handleOnChange} /><br />
                    <Input placeholder="Spirit:" name="spirit" value={this.state.spirit} onChange={this.handleOnChange} /><br />
                    </> 
                    : <RecipeWithCocktail cocktail={this.props.cocktail} />       
                }
                <Input placeholder="Ingredients:" name="ingredients" value={this.state.ingredients} onChange={this.handleOnChange} /><br />

                <Input placeholder="Garnish:" name="garnish" value={this.state.garnish} onChange={this.handleOnChange} /><br />

                <Input placeholder="Notes:" name="notes" value={this.state.notes} onChange={this.handleOnChange} /><br /><br />

                <Button id="add-recipe-button" variant="contained" style={this.findButtonStyle()} onClick={() => this.handleOnSubmit()}>Add Recipe</Button><br />
                <input type='submit' className="hidden"></input>
                {this.props.cocktail ? <CancelInputButton triggerRecipeForm={this.props.triggerRecipeForm} /> : null }
            </form>
            <br />
            </>
        )
    }
}

export default connect(null, {addRecipe})(RecipeInput)