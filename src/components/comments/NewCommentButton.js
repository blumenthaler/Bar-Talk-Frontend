import { useHistory, useRouteMatch } from 'react-router-dom'

export const NewCommentButton = props => {
    const recipeId = props.recipe.id
    const cocktailId = props.recipe.relationships.cocktail.data.id
    const history = useHistory()
    const match = useRouteMatch()
    const handleClick = () => {
        props.triggerCommentForm()
        if (match.url === '/profile/') {
            history.push(`${match.url}cocktails/${cocktailId}/recipes/${recipeId}/comments/new`)
        }
        if (match.url === '/cocktails/') {
            history.push(`${match.url}${cocktailId}/recipes/${recipeId}/comments/new`)
        }
        else {
            history.push(`${match.url}/new`)
        }
    }
    return (
        <>
        <button onClick={() => handleClick()}>Add Comment</button>
        <br /><br />
        </>
    ) 
}