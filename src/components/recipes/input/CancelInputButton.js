import { useHistory, useRouteMatch } from 'react-router-dom'

export const CancelInputButton = props => {
    const history = useHistory()
    const match = useRouteMatch()
    const handleClick = () => {
        props.triggerRecipeForm()
        history.push(`${match.url}/`)
    }
    return (
        <button onClick={() => handleClick()}>Cancel</button>
    )
}