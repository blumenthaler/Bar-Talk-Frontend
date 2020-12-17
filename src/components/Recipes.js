import React from 'react'
import Recipe from './Recipe,js'

class Recipes extends React.Component {

    render() {
        return (
            <ol>
                {this.props.recipes.map(recipe => <Recipe recipe={recipe}/>)}
            </ol>
        )
    }
}

export default Recipes