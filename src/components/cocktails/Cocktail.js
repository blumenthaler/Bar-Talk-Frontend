import UsersContainer from '../containers/UsersContainer.js';
import {UsersCard} from '../users/UsersCard.js'

export const Cocktail = props => {
        const {cocktails, history, location, match, currentUser, profile} = props
        const cocktail = cocktails.data.find(cocktail => cocktail.id === match.params.cocktailId)

        const handleClick = () => {
            history.push('/recipes/new')
        }

        if (!cocktail) {
            return (
            <>
            <h2>This cocktail no longer exists.</h2>
            <button onClick={() => handleClick()}>Click here to add a new recipe</button>
            </>
            )
        }
        if (cocktail.relationships.recipes.data.length === 0) {
            return (
                <h2>No Recipes for this Cocktail.</h2>
            )
        }
        else {
            return (
                <>
                    <h2>{cocktail.attributes.name} - {cocktail.attributes.spirit.charAt(0).toUpperCase() + cocktail.attributes.spirit.slice(1)}</h2>
                    
                    <UsersCard 
                        cocktail={cocktail} 
                        currentUser={currentUser} 
                        profile={profile} 
                    />
                </>
            )
        }
    }
