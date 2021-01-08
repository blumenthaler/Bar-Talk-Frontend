import React from 'react'
import { Cocktail } from './Cocktail.js'

export const Cocktails = props =>  {
    if ((props.loading) || (!props.cocktails)) {
        return (
            <h2>loading...</h2>
        )
    }
    else {
        return (
            <ol>
                {props.cocktails.map(cocktail => <Cocktail 
                        key={cocktail.id} 
                        cocktail={cocktail}  
                        currentUser={props.currentUser} 
                        profile={props.profile} 
                    />)}
            </ol>
        )
    }
}