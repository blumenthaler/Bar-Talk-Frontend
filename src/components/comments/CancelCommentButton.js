import { useHistory, useRouteMatch } from 'react-router-dom'
import { Button } from '@material-ui/core';

export const CancelCommentButton = props => {
    const history = useHistory()
    const match = useRouteMatch()
    const handleClick = () => {
        props.triggerCommentForm()
        history.push(`${match.url}`)
    }
    return (

        <Button variant="contained" style={{backgroundColor: "#e5a4cb", color: "#45062e", marginLeft: "0", fontWeight: 'bold'}} onClick={() => handleClick()}>Cancel</Button>
    )
}