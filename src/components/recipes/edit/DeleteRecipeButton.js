import { useHistory, useRouteMatch } from 'react-router-dom'
import {Button} from '@material-ui/core'

export const DeleteRecipeButton = props => {
    return (
        <Button variant="contained" style={{marginLeft: "10px", backgroundColor: "#7f055f", color: "#ffe8d4", minWidth: "100px", fontWeight: "bold"}} onClick={() => props.handleDelete()}>Delete Recipe</Button>
    )
}