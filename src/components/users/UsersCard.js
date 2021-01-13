import UsersContainer from '../containers/UsersContainer.js'
import Card from '@material-ui/core/Card';
import {cardUseStyles} from '../../material-ui/cardUseStyles.js'


export const UsersCard = props => {
    const {cocktail, currentUser, profile} = props
    const classes = cardUseStyles()
    
    return (
        <>
        <div style={{ display:'flex', justifyContent:'center' }}>
            <Card className={classes.root} style={{'min-width': '600px'}}>
                <UsersContainer 
                    cocktail={cocktail} 
                    currentUser={currentUser} 
                    profile={profile} />
            </Card>
        </div>
        </>
    )
}