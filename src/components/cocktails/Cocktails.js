import React, { Component } from 'react'
import Cocktail from './Cocktail.js'
import {Link, useRouteMatch} from 'react-router-dom'
import CocktailLink from './CocktailLink'


export default class Cocktails extends React.Component  {

    render() {
    
    if ((this.props.loading) || (!this.props.cocktails)) {
        return (
            <h2>loading...</h2>
        )
    }
    else {
        let newMatch
        if (this.props.match.path === '/profile/') {
            newMatch = this.props.match.path + 'cocktails/'
        }
        else {newMatch = this.props.match.path}
        
        return (
            <ol>
                {this.props.cocktails.map(cocktail => 
                    <>
                    <CocktailLink cocktail={cocktail} newMatch={newMatch}/>
                    </>
                )}
            </ol>
        )
    }
    }
}