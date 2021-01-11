import React from 'react'
import CommentsContainer from '../containers/CommentsContainer.js'
import { EditRecipeButton } from './edit/EditRecipeButton.js'
import EditRecipeForm from './edit/EditRecipeForm'
import { Route, Link } from 'react-router-dom';

class Recipe extends React.Component {
        
        constructor(props) {
            super(props)
            this.state = {
                isEditing: false,
                showingComments: false
            }
        }

        triggerEditingForm = () => {
            this.setState(prevState => {
                return {
                    ...prevState,
                    isEditing: !prevState.isEditing
                }
            })
        }

        triggerComments = () => {
            this.setState(prevState => {
                return {
                    ...prevState,
                    showingComments: !prevState.showingComments
                }
            })
        }

        handleDelete = event => {
            event.preventDefault()
            this.props.deleteRecipe(this.props.recipe)
        }
        
        render() {
            let matchUrl
            this.props.match.url.charAt(this.props.match.url.length-1) === '/' ? matchUrl = this.props.match.url : matchUrl = `${this.props.match.url}/`

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
                        
                        {this.state.showingComments ? 
                        <>
                        <CommentsContainer 
                            recipe={this.props.recipe} 
                            history={this.props.history} 
                            match={this.props.match} 
                            currentUser={this.props.currentUser}
                        />
                        
                        <Link onClick={() => this.triggerComments()} to={`${matchUrl}`}>Hide Comments   </Link>
                        </> :
                        <>
                        <br /><br />
                        <Link onClick={() => this.triggerComments()} to={`${matchUrl}comments`}>See Comments   </Link></>
                        }
                        
                        <br /><br />
                    </li>
                )
            }
        }


}

export default Recipe