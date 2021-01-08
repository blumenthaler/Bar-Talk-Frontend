import React from 'react'
import CommentsContainer from '../containers/CommentsContainer.js'
import { EditRecipeButton } from './edit/EditRecipeButton.js'
import EditRecipeForm from './edit/EditRecipeForm'

class Recipe extends React.Component {
        
        constructor(props) {
            super(props)
            this.state = {
                isEditing: false
            }
        }

        triggerEditingForm = () => {
            this.setState(prevState => {
                return {
                    isEditing: !prevState.isEditing
                }
            })
        }

        handleDelete = event => {
            event.preventDefault()
            this.props.deleteRecipe(this.props.recipe)
        }
        
        render() {
            const currentUserId = this.props.currentUser.data.id
            const recipeUserId = this.props.recipe.relationships.user.data.id
            const {attributes} = this.props.recipe
            if (this.state.isEditing) {
                return (
                    <>
                        <EditRecipeForm 
                            editingRecipe={this.props.editingRecipe} 
                            recipe={this.props.recipe} 
                            triggerEditingForm={this.triggerEditingForm} 
                            history={this.props.history}
                            match={this.props.match}
                        />
                    </>
                )
            }
            else {
                return (
                    <li>
                        {attributes.name}
                        <br />
                        {attributes.ingredients}
                        <br />
                        {attributes.garnish}
                        <br />
                        {attributes.notes}
                        <br />
                        {attributes.votes}
                        <br />
                        {currentUserId === recipeUserId ? 
                            <>
                                <EditRecipeButton 
                                    recipe={this.props.recipe} 
                                    triggerEditingForm={this.triggerEditingForm}
                                />
                                <br />
                                <button onClick={event => this.handleDelete(event)}>Delete Recipe</button>
                            </> 
                        : null}
                        
                        <CommentsContainer 
                            recipe={this.props.recipe} 
                            history={this.props.history} 
                            match={this.props.match} 
                            currentUser={this.props.currentUser}
                        />
                        <br /><br />
                    </li>
                )
            }
        }


}

export default Recipe