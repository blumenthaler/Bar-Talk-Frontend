import { useHistory, useRouteMatch } from 'react-router-dom'

export const CancelEditButton = props => {
    const history = useHistory()
    const match = useRouteMatch()
    const handleClick = () => {
        props.triggerEditingForm()
        history.push(`${match.url}`)
        // console.log(match.url)
    }
    return (
        <button onClick={() => handleClick()}>Cancel</button>
    )
}