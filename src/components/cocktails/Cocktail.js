import React from 'react'
import UsersContainer from '../containers/UsersContainer.js';

class Cocktail extends React.Component {

    render() {
        const {attributes} = this.props.cocktail
        return (
            <li>
                {attributes.name} - {attributes.spirit.charAt(0).toUpperCase() + attributes.spirit.slice(1)}
                <UsersContainer cocktail={this.props.cocktail} currentUser={this.props.currentUser} profile={this.props.profile}/>
            </li>
        )
    }
}

export default Cocktail