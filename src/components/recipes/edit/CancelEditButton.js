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
        <Button variant="contained" style={{backgroundColor: "#45062e", color: "#ffe8d4", maxWidth: "80px", fontWeight: 'bold'}} onClick={() => handleClick()}>Cancel</Button>
        // <button onClick={() => handleClick()}>Cancel</button>
    )
}







        
    