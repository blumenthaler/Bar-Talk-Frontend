import React from 'react'
import User from './User.js'

class Users extends React.Component {

    render() {
        if (this.props.users.length === 0) {
            return (
                <h2>loading...</h2>
            )
        }
        else {
            // console.log(this.props)
            return (
                <ol>
                    {this.props.users.map(user => <User key={user.id} currentUser={this.props.currentUser} user={user} recipes={this.props.recipes.filter(recipe => recipe.relationships.user.data.id === user.id.toString() )} />)}
                </ol>
            )
        }
    }
}

export default Users