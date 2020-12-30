import React from 'react';
import {connect} from 'react-redux';
import {addRecipe} from '../../actions/recipes.js'

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
            let name = document.getElementById(`${this.props.cocktail.id}_name`).innerText
            let spirit = document.getElementById(`${this.props.cocktail.id}_spirit`).innerText
            let sendable = {
                ...this.state,
                name,
                spirit
            }
            this.props.addRecipe(sendable, this.props.currentUser.data)
            this.setState({
                name,
                spirit,
                ingredients: "",
                garnish: "",
                notes: "",
                votes: 0
            })
            
        }
        else {
            this.props.addRecipe(this.state, this.props.currentUser.data)  
            this.setState({
                name: "",
                spirit: "",
                ingredients: "",
                garnish: "",
                notes: "",
                votes: 0
            })   
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
                {!this.props.cocktail ? <><input type="text" name="name" onChange={this.handleOnChange} value={this.state.name}/><br />
                <input type="text" name="spirit" onChange={this.handleOnChange} value={this.state.spirit}/><br /></> : <><div id={this.props.cocktail.id + '_name'} >{this.props.cocktail.attributes.name}</div><div id={this.props.cocktail.id + '_spirit'}>{this.props.cocktail.attributes.spirit.charAt(0).toUpperCase() + this.props.cocktail.attributes.spirit.slice(1)}</div></>}
                
                <input type="text" name="ingredients" onChange={this.handleOnChange} value={this.state.ingredients}/><br />
                <input type="text" name="garnish" onChange={this.handleOnChange} value={this.state.garnish}/><br />
                <input type="text" name="notes" onChange={this.handleOnChange} value={this.state.notes}/><br />
                <input type="submit"/>
            </form>
            <br />
            </>
        )
    }
}

export default connect(null, {addRecipe})(RecipeInput)