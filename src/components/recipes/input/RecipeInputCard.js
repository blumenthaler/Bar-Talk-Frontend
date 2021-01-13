import Card from '@material-ui/core/Card';
import {cardUseStyles} from '../../../material-ui/cardUseStyles.js'
import RecipeInput from './RecipeInput.js'


export const RecipeInputCard = props => {
    const classes = cardUseStyles()

    const findStyle = () => {
        if (props.cocktail) {
            return {'min-width': '550px', backgroundColor: '#e4be9e', 'margin-right': '30px', 'margin-left': 'auto'} 
        }
        else {
            return {'min-width': '550px', backgroundColor: '#d0e1d4', 'margin-right': '20%', 'margin-left': '20%'}
        }
    }
    return (
        <>
        <div style={{ display:'flex', justifyContent:'center' }}>
            <Card className={classes.root} style={findStyle()}>
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