import React from 'react'

class Recipe extends React.Component {
    

    render() {
        
        const {attributes} = this.props.recipe
        // console.log(this.props)
        
        return (
            <li>
                {attributes.name}
                <br />
                {attributes.ingredients}
                <br />
                {attributes.garnish}
                <br />
                {attributes.notes}
                <br />
                {attributes.votes}
            </li>
        )
    }
}

export default Recipe