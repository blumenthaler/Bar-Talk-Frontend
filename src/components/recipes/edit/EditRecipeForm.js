import React from 'react'
import {CancelEditButton} from './CancelEditButton.js'
import { Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';

export default class EditRecipeForm extends React.Component {
    
    constructor(props) {
        super(props)
        const {name, spirit, ingredients, garnish, notes, votes} = props.recipe.attributes
        this.state = {
            name,
            spirit,
            ingredients,
            garnish,
            notes,
            votes
        }
    }

    handleOnSubmit = (event) => {
        if (event) {event.preventDefault()}
        this.props.editingRecipe(this.props.recipe.id, this.state)
        this.props.triggerEditingForm()
        this.props.history.push(`${this.props.match.url}/`)
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const { spirit } = this.props.recipe.attributes
        return (
            <form className={this.props.classes.root} onSubmit={event => this.handleOnSubmit(event)}>
                <div id={this.props.recipe.id + '_name_edit'}>Name: {this.props.recipe.attributes.name}</div>
                <div id={this.props.recipe.id + '_spirit_edit'}>Spirit: {spirit.charAt(0).toUpperCase() + spirit.slice(1)}</div><br />


                <Input placeholder={`Ingredients: ${this.state.ingredients}`} value={this.state.ingredients} name="ingredients" onChange={this.handleOnChange} /><br />

                <Input placeholder={`Garnish: ${this.state.garnish}`} value={this.state.garnish} name="garnish" onChange={this.handleOnChange} /><br />

                <Input placeholder={`Notes: ${this.state.notes}`} value={this.state.notes} name="notes" onChange={this.handleOnChange} /><br />

                <Button variant="contained" id='edit-recipe-button' onClick={this.handleOnSubmit}>Edit</Button>
                <CancelEditButton triggerEditingForm={this.props.triggerEditingForm}/>
                <input style={{marginBottom: "-100px"}} type="submit" className="hidden" value="Edit" />
            </form>
        )
    }
}