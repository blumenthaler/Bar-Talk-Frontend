import React from 'react';
import { connect } from 'react-redux';
import Cocktails from '../components/cocktails/Cocktails.js';
import { getAllRecipes } from '../actions/recipes.js';
import { getAllCocktails } from '../actions/cocktails.js';

class CocktailsContainer extends React.Component {

    componentDidMount() {
        this.props.getAllRecipes()
        this.props.getAllCocktails()
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <Cocktails cocktails={this.props.cocktails} recipes={this.props.recipes} currentUser={this.props.currentUser}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes.data,
        cocktails: state.cocktails.data
    }
}

export default connect(mapStateToProps, {getAllRecipes, getAllCocktails})(CocktailsContainer)