import React from 'react'
import UsersContainer from '../containers/UsersContainer.js';

class Cocktail extends React.Component {

    render() {
        const {attributes} = this.props.cocktail
        
        return (
            <li>
                {attributes.name} - {attributes.spirit}
                <UsersContainer cocktail={this.props.cocktail} recipes={this.props.recipes} currentUser={this.props.currentUser}/>
            </li>
        )
    }
}

export default Cocktail