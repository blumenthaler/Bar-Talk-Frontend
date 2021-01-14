import Card from '@material-ui/core/Card';
import {cardUseStyles} from '../../../material-ui/cardUseStyles.js'
import {textFieldUseStyles} from '../../../material-ui/textFieldUseStyles.js'
import {newRecipeTextFieldUseStyles} from '../../../material-ui/newRecipeTextFieldUseStyles.js'
import RecipeInput from './RecipeInput.js'


export const RecipeInputCard = props => {
    const classes = cardUseStyles()
    let formClasses = textFieldUseStyles()
    const findStyle = () => {
        if (props.cocktail) {
            return {minWidth: '550px', backgroundColor: '#45062e', marginRight: '30px', marginLeft: '-20px'} 
        }
        else {
            return {minWidth: '550px', backgroundColor: '#45062e', marginRight: '20%', marginLeft: '20%', color: '#71697a', border: 'none', boxShadow: "none"}
        }
    }
    return (
        <>
        <br />
        <div>
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