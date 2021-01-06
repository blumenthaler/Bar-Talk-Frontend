import { useHistory, useRouteMatch } from 'react-router-dom'

export const NewRecipeButton = props => {
    const history = useHistory()
    const match = useRouteMatch()
    const handleClick = () => {
        props.triggerRecipeForm()
        if (props.cocktail) {
            if (match.url === '/cocktails/') {
                history.push(`${match.url}${props.cocktail.id}/recipes/new`)
            }
            else {
                history.push(`${match.url}cocktails/${props.cocktail.id}/recipes/new`)
            }
        }
        else {
            history.push(`${match.url}recipes/new`)
        }
    }
    
    return (
        <>
        <button onClick={() => handleClick()}>Add a New Recipe to this Cocktail</button>
        <br /><br />
        </>
    ) 
}