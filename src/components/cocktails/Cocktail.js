import UsersContainer from '../containers/UsersContainer.js';
import {useRouteMatch} from 'react-router-dom'

export const Cocktail = props => {
        console.log(props)
        const {cocktails, history, location, match, currentUser, profile} = props
        console.log(props.match.params.cocktailId)
        const cocktail = cocktails.cocktails.data.find(cocktail => cocktail.id === match.params.cocktailId)

        if (cocktail.relationships.recipes.data.length === 0) {
            return (
                <h2>No Recipes for this Cocktail.</h2>
            )
        }
        else {
            return (
                <li>
                    <h2>{cocktail.attributes.name} - {cocktail.attributes.spirit.charAt(0).toUpperCase() + cocktail.attributes.spirit.slice(1)}</h2>
                    
                    <UsersContainer 
                        cocktail={cocktail} 
                        currentUser={currentUser} 
                        profile={profile} 
                    />
                </li>
            )
        }
    }
