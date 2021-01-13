import Card from '@material-ui/core/Card';
import {cardUseStyles} from '../../../material-ui/cardUseStyles.js'
import RecipeInput from './RecipeInput.js'


export const RecipeInputCard = props => {
    // const {cocktail, currentUser, profile} = props
    const classes = cardUseStyles()
    
    return (
        <>
        <div style={{ display:'flex', justifyContent:'center' }}>
            <Card className={classes.root} style={{'min-width': '600px', backgroundColor: '#d0e1d4'}}>
            <RecipeInput 
                    currentUser={props.currentUser} 
                    addRecipe={props.addRecipe} 
                    cocktail={props.cocktail} 
                    history={props.history} 
                    match={props.match} 
                    triggerRecipeForm={props.triggerRecipeForm} 
                /> 
            </Card>
        </div>
        </>
    )
}