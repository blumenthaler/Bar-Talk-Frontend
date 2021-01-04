export const RecipeWithCocktail = props => {
    return (
        <>
        <div id={props.cocktail.id + '_name'} >{props.cocktail.attributes.name}</div>
        <div id={props.cocktail.id + '_spirit'}>{props.cocktail.attributes.spirit.charAt(0).toUpperCase() + props.cocktail.attributes.spirit.slice(1)}</div>
        </>
    )
}