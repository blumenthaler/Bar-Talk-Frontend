import { useHistory, useRouteMatch } from 'react-router-dom'

export const NewRecipeButton = props => {
    const history = useHistory()
    const match = useRouteMatch()
    let matchUrl
    match.url.charAt(match.url.length-1) === '/' ? matchUrl = match.url : matchUrl = `${match.url}/`

    const handleClick = () => {
        props.triggerRecipeForm()
        if (matchUrl.includes('profile')) {
            history.push(`${matchUrl}recipes/new`)
        }
        else if (matchUrl.includes('cocktails')) {
                history.push(`${matchUrl}recipes/new`)
        }
    }
    return (
        <>
        <button onClick={() => handleClick()}>Add a New Recipe to this Cocktail</button>
        <br /><br />
        </>
    ) 
}