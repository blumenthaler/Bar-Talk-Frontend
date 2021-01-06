import React from 'react';
import {connect} from 'react-redux';
import { getAllCocktails } from '../../actions/cocktails.js';
import Cocktails from '../cocktails/Cocktails.js'

class ProfileContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            profile: true
        }
    }

    componentDidMount() {
        this.props.getAllCocktails()
    }

    getFilteredCocktails() {
        const userId = this.props.currentUser.data.id

        const recipes = this.props.cocktails.cocktails.included.filter(data => data.type === 'recipe').filter(recipe => recipe.relationships.user.data.id === userId)

        const cocktailIds = recipes.map(recipe => recipe.relationships.cocktail.data.id)
        const filteredCocktails = this.props.cocktails.cocktails.data.filter(cocktail => cocktailIds.includes(cocktail.id) )

        return filteredCocktails
    }

    // get rid of this
    getComments() {
        return this.props.cocktails.cocktails.included.filter(data => data.type === "comment")
    }

    render() {
        if ((this.props.loading) || (!this.props.cocktails.cocktails.data)) {
            return (<h2>Loading...</h2>)
        }
        
        else {
            const filteredCocktails = this.getFilteredCocktails()

            // get rid of this
            const comments = this.getComments()

            if (filteredCocktails.length === 0) {
                return (
                    <>
                     <h1>Welcome {this.props.currentUser.data.attributes.username}!</h1>
                    <h2><a href="/recipes/new">Add a Recipe!</a></h2>
                    </>
                )
            }
            else {
                return (
                    <>
                    <h1>{this.props.currentUser.data.attributes.username} - Your Recipes</h1>
                    <Cocktails cocktails={filteredCocktails} currentUser={this.props.currentUser} profile={this.state.profile} 
                    
                    // probably do not need
                    history={this.props.history} 
                    
                    // delete, render comments in CommentsContainer
                    comments={comments}/>
                    </>
                )
            }
        }
    }
}

const mapStateToProps = state => {
    return {
        cocktails: state.cocktails
    }
}

export default connect(mapStateToProps, {getAllCocktails})(ProfileContainer)