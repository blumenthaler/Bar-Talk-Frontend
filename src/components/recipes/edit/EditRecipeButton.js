import { useHistory, useRouteMatch } from 'react-router-dom'
import {Button} from '@material-ui/core'

export const EditRecipeButton = props => {
    const history = useHistory()
    const match = useRouteMatch()
    const handleClick = () => {
        props.triggerEditingForm()
        history.push(`${match.url}recipes/${props.recipe.id}/edit`)
    }
    return (
        <Button variant="contained" style={{marginLeft: "10px", backgroundColor: "#7f055f", color: "#ffe8d4", minWidth: "100px", fontWeight: "bold"}} onClick={() => handleClick()}>Edit Recipe</Button>
    )
}