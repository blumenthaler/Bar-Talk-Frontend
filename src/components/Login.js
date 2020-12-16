import React from 'react';

class Login extends React.Component {

    state = {
        username: "",
        password: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.loginUser(this.state)
        this.setState({
            username: "",
            password: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="username" onChange={this.handleChange} value={this.state.username}></input>
                <input type="password" name="password" onChange={this.handleChange} value={this.state.password}></input>
                <input type="submit" value="Login"></input>
            </form>
        )
    }
}

export default Login