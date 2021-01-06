import React from 'react'
import UsersContainer from '../containers/UsersContainer.js';

class Cocktail extends React.Component {

    render() {
        const {attributes} = this.props.cocktail
        
        if (this.props.cocktail.relationships.recipes.data.length === 0) {return null}

        else {
            return (
                <li>
                    {attributes.name} - {attributes.spirit.charAt(0).toUpperCase() + attributes.spirit.slice(1)}
                    
                    <UsersContainer cocktail={this.props.cocktail} currentUser={this.props.currentUser} profile={this.props.profile} 
                    
                    // do I need this here?
                    history={this.props.history} 
                    
                    // get rid of this
                    comments={this.props.comments}/>
                </li>
            )
        }
    }
}

export default Cocktail