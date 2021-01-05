import React from 'react'
import { EditRecipeButton } from './EditRecipeButton'
import { EditRecipeForm } from './EditRecipeForm'

export default class EditRecipe extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isEditing: false
        }
    }

    triggerEditForm = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    render() {
        return (
            <div>
            {this.state.isEditing ? <EditRecipeForm recipe={this.props.recipe} triggerEditForm={this.triggerEditForm}/> : <EditRecipeButton triggerEditForm={this.triggerEditForm} /> }
            </div>
        )
    }
}