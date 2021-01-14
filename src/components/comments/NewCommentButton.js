import { useHistory, useRouteMatch } from 'react-router-dom'
import {Button} from '@material-ui/core'

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
        <Button variant="contained" style={{marginLeft: "10px", backgroundColor: "#45062e", color: "#ffe8d4", minWidth: "100px", fontWeight: "bold"}} onClick={() => handleClick()}>Add Comment</Button>
    )
}