import React from 'react'

class Cocktail extends React.Component {

    render() {
        
        // const {attributes} = this.props.cocktail
        const {cocktail} = this.props
        console.log(cocktail)
        
        return (
            <li>
                this is a cocktail
                {/* {attributes.name}
                <br />
                {attributes.ingredients}
                <br />
                {attributes.garnish}
                <br />
                {attributes.notes}
                <br />
                {attributes.votes} */}
            </li>
        )
    }
}

export default Cocktail