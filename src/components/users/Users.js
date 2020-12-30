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
                    {props.users.map(user => <User key={user.id} currentUser={props.currentUser} user={user} recipes={props.recipes} history={props.history} />)}
                </ol>
            )
        }
}

export default Users