import { useHistory, useRouteMatch } from 'react-router-dom'

export const EditRecipeButton = props => {
    const history = useHistory()
    const match = useRouteMatch()
    const handleClick = () => {
        props.triggerEditingForm()
        history.push(`${match.url}recipes/${props.recipe.id}/edit`)
    }
    return (
        <button onClick={() => handleClick()}>Edit Recipe</button>
    )
}