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
        <Button variant="contained" id='submit-login-button' style={{'margin-left': '25%', backgroundColor: '#d0e1d4'}} onClick={() => handleClick()}>Cancel</Button>
    )
}