import { useHistory, useRouteMatch } from 'react-router-dom'
import {Button} from '@material-ui/core'

export const EditRecipeButton = props => {
    const history = useHistory()
    const match = useRouteMatch()
    const handleClick = () => {
        props.triggerEditingForm()
        if (match.url.charAt(match.url.length - 1) === "/") {
            history.push(`${match.url}recipes/${props.recipe.id}/edit`)
        }
        else {
            history.push(`${match.url}/recipes/${props.recipe.id}/edit`)
        }
    }
    return (
        <Button variant="contained" id='edit-recipe-btn' onClick={() => handleClick()}>Edit Recipe</Button>
    )
}