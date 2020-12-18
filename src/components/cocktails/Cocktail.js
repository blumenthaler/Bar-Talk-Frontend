import React from 'react'
import RecipesContainer from '../containers/RecipesContainer.js';

class Cocktail extends React.Component {

    render() {
        const {attributes} = this.props.cocktail
        
        return (
            <li>
                {attributes.name} - {attributes.spirit}
                <RecipesContainer cocktail={this.props.cocktail} recipes={this.props.recipes} currentUser={this.props.currentUser}/>
            </li>
        )
    }
}

export default Cocktail