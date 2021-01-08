import React from 'react'
import { Cocktail } from './Cocktail.js'
import {Link, useRouteMatch} from 'react-router-dom'


export const Cocktails = props =>  {
    const match = useRouteMatch()
    if ((props.loading) || (!props.cocktails)) {
        return (
            <h2>loading...</h2>
        )
    }
    else {
        console.log(props.cocktails.cocktails.data)
        let newMatch
        console.log(match.path === '/profile/')
        if (match.path === '/profile/') {
            newMatch = match.path + 'cocktails/'
        }
        else {newMatch = match.path}
        console.log(newMatch)
        return (
            <ol>
                {props.cocktails.cocktails.data.map(cocktail => 
                    <>
                    <li>
                    <Link key={cocktail.id} to={`${newMatch}${cocktail.id}`}>
                        {`${cocktail.attributes.name} - ${cocktail.attributes.spirit}`}
                        
                    </Link>
                    </li>
                    </>
                )}
            </ol>
        )
    }
}