import CommentInput from './CommentInput.js';
import Card from '@material-ui/core/Card';
import {cardUseStyles} from '../../material-ui/cardUseStyles.js'
import {newCommentTextFieldUseStyles} from '../../material-ui/newCommentTextFieldUseStyles.js'

export const CommentInputCard = props => {
    const classes = cardUseStyles()
    const formClasses = newCommentTextFieldUseStyles()
    
    return (
        <>
        <div className='card-container'>
            <Card className={classes.root} style={{maxWidth: '1000px', minWidth: '300px', backgroundColor: '#45062e'}}>
                <CommentInput
                    classes={formClasses}
                    user={props.user} 
                    recipe={props.recipe} 
                    triggerCommentForm={props.triggerCommentForm} 
                    addComment={props.addComment} 
                    history={props.history} 
                    match={props.match}  />
            </Card>
        </div>
        </>
    )
}