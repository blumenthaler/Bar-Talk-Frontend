import EditRecipeForm from "./EditRecipeForm.js"
import Card from '@material-ui/core/Card';
import {editRecipeUseStyles} from '../../../material-ui/recipe/editRecipeUseStyles.js'
import {textFieldUseStyles} from '../../../material-ui/textFieldUseStyles.js'


export const EditRecipeFormCard = props => {
    const classes = editRecipeUseStyles()
    const formClasses = textFieldUseStyles()
    return (
        <>
        <div style={{ display:'flex', justifyContent:'center' }}>
            <Card className={classes.root} style={{minWidth: '450px', marginLeft: '-10%'}}>
                <EditRecipeForm 
                    classes={formClasses}
                    editingRecipe={props.editingRecipe} 
                    recipe={props.recipe} 
                    triggerEditingForm={props.triggerEditingForm} 
                    history={props.history}
                    match={props.match}
                />
            </Card>
        </div>
        </>
    )
}