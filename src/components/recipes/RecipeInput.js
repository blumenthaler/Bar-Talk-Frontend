import React from 'react';

class RecipeInput extends React.Component {
    
    state = {
        name: "",
        spirit: "",
        ingredients: "",
        garnish: "",
        notes: "",
    }

    handleOnSubmit = event => {
        event.preventDefault()
        console.log("booyah")        
    }

    handleOnChange = event => {
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }

    render() {
        console.log(this.state)
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
            </>
        )
    }
}

export default RecipeInput