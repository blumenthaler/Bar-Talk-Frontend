import React from 'react';
import { connect } from 'react-redux';
import {Cocktails} from '../cocktails/Cocktails.js';
import {Cocktail} from '../cocktails/Cocktail.js'
import { getAllCocktails } from '../../actions/cocktails.js';
import { Route } from 'react-router-dom';

class AllCocktailsContainer extends React.Component {

    constructor() {
        super()
        this.state ={
            profile: false
        }
    }

    componentDidMount() {
        this.props.getAllCocktails()
    }

    render() {
        if ((this.props.loading) || (!this.props.cocktails.included) ) {
            return (<h2>Loading...</h2>)
        }
        else {
            return (
                <>
                <h1>All Cocktails</h1>
                    <Cocktails cocktails={this.props.cocktails.data} />

                    <Route path={`${this.props.match.url}/:cocktailId`} render={routerProps => <Cocktail {...routerProps} cocktails={this.props.cocktails} currentUser={this.props.currentUser} profile={this.state.profile}/>} />
                </>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        cocktails: state.cocktails.cocktails,
        loading: state.cocktails.loading
    }
}

export default connect(mapStateToProps, {getAllCocktails})(AllCocktailsContainer)