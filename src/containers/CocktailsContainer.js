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
                <Cocktails cocktails={this.props.cocktails.cocktails.data} loading={this.props.cocktails.loading} recipes={this.props.recipes} currentUser={this.props.currentUser}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    // console.log(state.cocktails.loading)
    return {
        recipes: state.recipes.data,
        cocktails: state.cocktails,
        // loading: state.cocktails.loading
    }
}

export default connect(mapStateToProps, {getAllRecipes, getAllCocktails})(CocktailsContainer)