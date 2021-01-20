import Cocktails from './Cocktails'
import Card from '@material-ui/core/Card';
import {cardUseStyles} from '../../material-ui/cardUseStyles.js'
import {useRouteMatch} from 'react-router-dom'


export const CocktailsCard = props => {
    const classes = cardUseStyles()
    const match = useRouteMatch()
    return (
        <>
        <div className="card-container">
            <Card className={classes.root} style={{width: '300px'}}>
                <h2 style={{marginLeft: '-10px'}}>Cocktails</h2>
                <Cocktails cocktails={props.cocktails} match={match}/>
            </Card>
        </div>
        </>
    )
}