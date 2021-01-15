import { useHistory, useRouteMatch } from 'react-router-dom'
import {Button} from '@material-ui/core'

export const DeleteRecipeButton = props => {
    return (
        <Button variant="contained" id="delete-recipe-btn" onClick={() => props.handleDelete()}>Delete Recipe</Button>
    )
}