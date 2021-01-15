import Card from '@material-ui/core/Card';
import {textFieldUseStyles} from '../../../material-ui/textFieldUseStyles.js'
import {recipeInputNoCocktailUseStyles} from '../../../material-ui/recipe/recipeInputNoCocktailUseStyles.js'
import {recipeInputWithCocktailUseStyles} from '../../../material-ui/recipe/recipeInputWithCocktail.js'
import {recipeInputProfileUseStyles} from '../../../material-ui/recipe/recipeInputProfileUseStyles.js'

import RecipeInput from './RecipeInput.js'


export const RecipeInputCard = props => {
    let classes
    if ((props.cocktail) && (props.match.url.includes("profile"))){
        classes = recipeInputProfileUseStyles()
    }
    else if (props.cocktail) {
        classes = recipeInputWithCocktailUseStyles()
    }
    else {
        classes = recipeInputNoCocktailUseStyles()
    }

    const formClasses = textFieldUseStyles()
    
    return (
        <>
        <br />
        <div>
            <Card className={classes.root}>
            <RecipeInput 
                    currentUser={props.currentUser} 
                    addRecipe={props.addRecipe} 
                    cocktail={props.cocktail} 
                    history={props.history} 
                    match={props.match} 
                    triggerRecipeForm={props.triggerRecipeForm}
                    classes={formClasses} 
                /> 
            </Card>
        </div>
        </>
    )
}