import React from 'react';
import {connect} from 'react-redux';
import { getAllCocktails } from '../../actions/cocktails.js';
import Cocktails from '../cocktails/Cocktails.js'

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getAllCocktails()
    }

    render() {
        if ((this.props.cocktails.loading) || (!this.props.cocktails.cocktails.data)) {
            return (<h2>Loading...</h2>)
        }
        else {
        const cocktailIds = this.props.currentUser.included.map(recipe => recipe.relationships.cocktail.data.id)

        const filteredCocktails = this.props.cocktails.cocktails.data.filter(cocktail => cocktailIds.includes(cocktail.id) )

            return (
                <>
                <h1>Your Recipes</h1>
                <Cocktails cocktails={filteredCocktails} currentUser={this.props.currentUser} profile={true}/>
                </>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        cocktails: state.cocktails
    }
}

export default connect(mapStateToProps, {getAllCocktails})(ProfileContainer)