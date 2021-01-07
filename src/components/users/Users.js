import React from 'react'
import User from './User.js'

const Users = props => {
        if (props.users.length === 0) {
            return (
                <h2>loading...</h2>
            )
        }
        else {
            return (
                <ol>
                    {props.users.map(user => <User 
                    
                    // all of this makes sense, keep it
                    key={user.id} 
                    currentUser={props.currentUser} 
                    user={user}
                    cocktail={props.cocktail} 

                    // get rid of this, don't use it
                    history={props.history} 
                    
                    // get rid of these, render in respective containers
                    recipes={props.recipes} 
                     />)}
                </ol>
            )
        }
}

export default Users