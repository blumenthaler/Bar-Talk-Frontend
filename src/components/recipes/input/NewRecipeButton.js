import RecipeInput from './RecipeInput.js'

export const NewRecipeButton = props => {
    return (
        <>
        <button onClick={() => props.triggerRecipeForm()}>Add a New Recipe to this Cocktail</button>
        <br /><br />
        </>
    ) 
}

// change this to mirror EditRecipeButton...
// push history when clicked, update the URL