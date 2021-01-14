import CommentsContainer from '../containers/CommentsContainer.js'
import Card from '@material-ui/core/Card';
import {cardUseStyles} from '../../material-ui/cardUseStyles.js'


export const CommentsCard = props => {
    const classes = cardUseStyles()
    return (
        <>
        <div style={{ display:'flex', justifyContent:'center' }}>
            <Card className={classes.root} style={{marginTop: '20px', marginLeft: '-10%', backgroundColor: "#7f055f", color: '#ffe8d4', maxWidth: '1000px', minWidth: '500px'}}>
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