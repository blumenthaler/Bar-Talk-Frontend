import CommentsContainer from '../containers/CommentsContainer.js'
import Card from '@material-ui/core/Card';
import {cardUseStyles} from '../../material-ui/cardUseStyles.js'


export const CommentsCard = props => {
    const classes = cardUseStyles()
    return (
        <>
        <div style={{ display:'flex', justifyContent:'center' }}>
            <Card className={classes.root} style={{minWidth: '600px'}}>
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