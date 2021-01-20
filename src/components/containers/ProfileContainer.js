import React from 'react';
import {connect} from 'react-redux';
import { getAllCocktails } from '../../actions/cocktails.js';
import {CocktailsCard} from '../cocktails/CocktailsCard.js'
import {Cocktail} from '../cocktails/Cocktail.js'
import { Route, Link } from 'react-router-dom';

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

        const recipes = this.props.cocktails.included.filter(data => data.type === 'recipe').filter(recipe => recipe.relationships.user.data.id === userId)

        const cocktailIds = recipes.map(recipe => recipe.relationships.cocktail.data.id)
        const filteredCocktails = this.props.cocktails.data.filter(cocktail => cocktailIds.includes(cocktail.id) )

        return filteredCocktails
    }

    render() {
        
        if ((this.props.loading) || (!this.props.cocktails.data)) {
            return (<h2>Loading...</h2>)
        }
        
        else {
            const filteredCocktails = this.getFilteredCocktails()

            if (filteredCocktails.length === 0) {
                return (
                    <>
                     <h1>Welcome {this.props.currentUser.data.attributes.username}!</h1>
                     <h2><Link id="welcome-link" to="/recipes/new">Add a Recipe!</Link></h2>
                    </>
                )
            }
            else {
                return (
                    <>
                        <h1>{this.props.currentUser.data.attributes.username} - Your Recipes</h1>
                        <CocktailsCard cocktails={filteredCocktails} />

                        <Route path={`${this.props.match.url}/cocktails/:cocktailId`} render={routerProps => <Cocktail {...routerProps} cocktails={this.props.cocktails} currentUser={this.props.currentUser} profile={this.state.profile}/>} />
                    </>
                )
            }
        }
    }
}

const mapStateToProps = state => {
    return {
        cocktails: state.cocktails.cocktails,
        loading: state.cocktails.loading
    }
}

export default connect(mapStateToProps, {getAllCocktails})(ProfileContainer)