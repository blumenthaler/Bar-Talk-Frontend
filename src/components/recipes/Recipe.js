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
        
        render() {
            const currentUserId = this.props.currentUser.data.id
            const recipeUserId = this.props.recipe.relationships.user.data.id
            const {attributes} = this.props.recipe
            if (this.state.isEditing) {
                return (
                    <>
                        <EditRecipeForm editingRecipe={this.props.editingRecipe} recipe={this.props.recipe} triggerEditingForm={this.triggerEditingForm} />
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
                        {currentUserId === recipeUserId ? <><EditRecipeButton recipe={this.props.recipe} triggerEditingForm={this.triggerEditingForm}/><br /><button>Delete Recipe</button></> : null}
                        <CommentsContainer recipe={this.props.recipe} currentUser={this.props.currentUser} comments={this.props.comments}/>
                        <br /><br />
                    </li>
                )
            }
        }


}

export default Recipe