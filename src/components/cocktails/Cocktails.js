import React from 'react'
import currentUser from '../../reducers/currentUser.js'
import Cocktail from './Cocktail.js'

class Cocktails extends React.Component {

    render() {
        if ((!this.props.cocktails) || (!this.props.recipes)) {
            return (
                <h2>loading...</h2>
            )
        }
        else {
            // gathers all cocktails by the current user
            // console.log(this.props)
            const {cocktails} = this.props

            const currentUserRecipes = this.props.recipes.filter(recipe => this.props.currentUser.id.toString() === recipe.relationships.user.data.id)

            const currentUserCocktails = []
            currentUserRecipes.forEach(recipe => {
                currentUserCocktails.push(cocktails.find(cocktail => cocktail.id === recipe.relationships.cocktail.data.id))
            })
        
            // console.log(currentUserCocktails)
  
            return (
                <ol>
                    {currentUserCocktails.map(cocktail => <Cocktail key={cocktail.id} cocktail={cocktail} />)}
                    {/* <Cocktail /> */}
                </ol>
            )
        }
    }
}

export default Cocktails