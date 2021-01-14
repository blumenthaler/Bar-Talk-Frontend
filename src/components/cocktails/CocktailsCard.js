import {Cocktails} from './Cocktails'
import Card from '@material-ui/core/Card';
import {cardUseStyles} from '../../material-ui/cardUseStyles.js'


export const CocktailsCard = props => {
    const classes = cardUseStyles()
    
    return (
        <>
        <div style={{ display:'flex', justifyContent:'center' }}>
            <Card className={classes.root} style={{'min-width': '300px'}}>
                Cocktails:
                <Cocktails cocktails={props.cocktails}/>
            </Card>
        </div>
        </>
    )
}