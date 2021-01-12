import {Cocktails} from './Cocktails'
import Card from '@material-ui/core/Card';
import {cardUseStyles} from '../../material-ui/cardUseStyles.js'

export const CocktailsCard = props => {
    const classes = cardUseStyles()
    return (
        <Card className={classes.root}>
            Cocktails:
            <Cocktails cocktails={props.cocktails}/>
        </Card>
    )
}