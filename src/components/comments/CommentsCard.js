import CommentsContainer from '../containers/CommentsContainer.js'
import Card from '@material-ui/core/Card';
import {cardUseStyles} from '../../material-ui/cardUseStyles.js'


export const CommentsCard = props => {
    const classes = cardUseStyles()
    return (
        <>
        <div className='card-container'>
            <Card className={classes.root} id='comments-card'>
                <CommentsContainer 
                    recipe={props.recipe} 
                    history={props.history} 
                    match={props.match} 
                    currentUser={props.currentUser}
                 />
            </Card>
        </div>
        </>
    )
}