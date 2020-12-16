import React from 'react';

class Login extends React.Component {

    state = {
        username: "",
        password: ""
    }

    handleUsername = event => {
        console.log(event.target.value)
    }

    render() {
        return (
            <form>
                <input type="text" name="username" onChange={this.handleUsername}></input>
                <input type="password" name="password"></input>
            </form>
        )
    }
}

export default Login