import Card from '@material-ui/core/Card';
import {cardUseStyles} from '../../../material-ui/cardUseStyles.js'
import {textFieldUseStyles} from '../../../material-ui/textFieldUseStyles.js'
import {newRecipeTextFieldUseStyles} from '../../../material-ui/newRecipeTextFieldUseStyles.js'
import RecipeInput from './RecipeInput.js'


export const RecipeInputCard = props => {
    const classes = cardUseStyles()
    let formClasses
    const findStyle = () => {
        if (props.cocktail) {
            formClasses = textFieldUseStyles()
            return {minWidth: '550px', backgroundColor: '#71697a', marginRight: '30px', marginLeft: 'auto'} 
        }
        else {
            formClasses = newRecipeTextFieldUseStyles()
            return {minWidth: '550px', backgroundColor: '#d0e1d4', marginRight: '20%', marginLeft: '20%', color: '#71697a'}
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
                    classes={formClasses} 
                /> 
            </Card>
        </div>
        </>
    )
}