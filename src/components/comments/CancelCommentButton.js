import { useHistory, useRouteMatch } from 'react-router-dom'

export const CancelCommentButton = props => {
    const history = useHistory()
    const match = useRouteMatch()
    const handleClick = () => {
        props.triggerCommentForm()
        history.push(`${match.url}`)
    }
    return (
        <button onClick={() => handleClick()}>Cancel</button>
    )
}