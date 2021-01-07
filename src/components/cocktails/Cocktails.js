import React from 'react'
import Cocktail from './Cocktail.js'

class Cocktails extends React.Component {

    render() {
        if ((this.props.loading) || (!this.props.cocktails)) {
            return (
                <h2>loading...</h2>
            )
        }
        else {
            return (
                <ol>
                    {this.props.cocktails.map(cocktail => <Cocktail key={cocktail.id} cocktail={cocktail}  currentUser={this.props.currentUser} profile={this.props.profile} 
                    
                    // do I need this here?
                    history={this.props.history} 
                    
                     />)}
                </ol>
            )
        }
    }
}

export default Cocktails