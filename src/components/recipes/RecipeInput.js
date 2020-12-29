import React from 'react';

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
        this.props.addRecipe(this.state, this.props.currentUser.data, this.props.cocktail)  
        this.setState({
            name: "",
            spirit: "",
            ingredients: "",
            garnish: "",
            notes: "",
            votes: 0
        })    
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
                <input type="text" name="name" onChange={this.handleOnChange} value={this.state.name}/><br />
                <input type="text" name="spirit" onChange={this.handleOnChange} value={this.state.spirit}/><br />
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

export default RecipeInput