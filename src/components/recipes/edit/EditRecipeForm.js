import React from 'react'
import {CancelEditButton} from './CancelEditButton.js'

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

    // pushHistory = () => {
    //     const history = useHistory()
    //     const match = useRouteMatch()
    //     console.log(match)
    //     console.log(history)
    // }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.editingRecipe(this.props.recipe.id, this.state)
        this.props.triggerEditingForm()
        
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        // this.pushHistory()
        const { spirit } = this.props.recipe.attributes
        return (
            <form onSubmit={this.handleOnSubmit}>
                <div id={this.props.recipe.id + '_name_edit'}>Name: {this.props.recipe.attributes.name}</div>
                <div id={this.props.recipe.id + '_spirit_edit'}>Spirit: {spirit.charAt(0).toUpperCase() + spirit.slice(1)}</div><br />

                <label>Ingredients: </label><textarea type="text" onChange={this.handleOnChange} name="ingredients" value={this.state.ingredients} /><br />

                <label>Garnish: </label><input type="text" onChange={this.handleOnChange} name="garnish" value={this.state.garnish}></input><br />

                <label>Notes: </label><textarea onChange={this.handleOnChange} name="notes" value={this.state.notes} /><br />
                <input type="submit" value="Edit"></input><br />
                <CancelEditButton triggerEditingForm={this.props.triggerEditingForm}/><br /><br />
            </form>
        )
    }
}

{/* <button onClick={() => this.props.triggerEditingForm()}>Cancel</button> */}