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

        <Button variant="contained" id='cancel-comment-btn' onClick={() => handleClick()}>Cancel</Button>
    )
}