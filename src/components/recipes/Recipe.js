import React from 'react'
import { EditRecipeButton } from './edit/EditRecipeButton.js'
import {DeleteRecipeButton} from './edit/DeleteRecipeButton.js'
import {CommentsCard} from '../comments/CommentsCard.js'
import {EditRecipeFormCard} from './edit/EditRecipeFormCard.js'
import { Link } from 'react-router-dom';

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

        handleDelete = () => {
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
                        <EditRecipeFormCard 
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
                        Ingredients: {attributes.ingredients}
                        <br />
                        Garnish: {attributes.garnish}
                        <br />
                        Notes: {attributes.notes}
                        <br />
                        {/* {attributes.votes}<br /> */}
                        <br />
                        {currentUserId === recipeUserId ? 
                            <>
                                <EditRecipeButton 
                                    recipe={this.props.recipe} 
                                    triggerEditingForm={this.triggerEditingForm}
                                />
                                <DeleteRecipeButton handleDelete={this.handleDelete} />
                                <br />
                            </> 
                        : null}
                        
                        {this.state.showingComments ? 
                        <>
                            <CommentsCard 
                                recipe={this.props.recipe} 
                                history={this.props.history} 
                                match={this.props.match} 
                                currentUser={this.props.currentUser}
                            />
                            <br />
                            <Link className='comment-link' onClick={() => this.triggerComments()} to={`${matchUrl}`}>Hide Comments</Link>
                        </> :
                        <>
                            <br />
                            <Link className='comment-link' onClick={() => this.triggerComments()} to={`${matchUrl}recipes/${this.props.recipe.id}/comments`}>See Comments</Link>
                        </>
                        }
                        
                        <br /><br />
                    </li>
                )
            }
        }


}

export default Recipe