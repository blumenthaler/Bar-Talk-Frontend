import { useHistory, useRouteMatch } from 'react-router-dom'
import { Button } from '@material-ui/core';

export const CancelInputButton = props => {
    const history = useHistory()
    const match = useRouteMatch()
    const handleClick = () => {
        props.triggerRecipeForm()
        history.push(`${match.url}/`)
    }
    return (
        <Button variant="contained" id='cancel-recipe-input-btn' onClick={() => handleClick()}>Cancel</Button>
    )
}