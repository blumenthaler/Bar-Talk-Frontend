import { useHistory, useRouteMatch } from 'react-router-dom'
import { Button } from '@material-ui/core';

export const CancelEditButton = props => {
    const history = useHistory()
    const match = useRouteMatch()
    const handleClick = () => {
        props.triggerEditingForm()
        history.push(`${match.url}/`)
    }
    return (
        <Button variant="contained" id='cancel-edit-recipe-btn' onClick={() => handleClick()}>Cancel</Button>
    )
}







        
    