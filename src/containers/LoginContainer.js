// import React from 'react';
// import { connect } from 'react-redux';
// import Login from '../components/Login.js';
// import { loginUser } from '../actions/loginUser.js';

// class LoginContainer extends React.Component {

//     render() {
//         // console.log(this.props.state)
//         console.log(this.props.loginUser)
//         return (
//             <Login loginUser={this.props.loginUser}/>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         state
//     }
// }

// // map state/dispatch to props here
// const mapDispatchToProps = dispatch => {
//     return {
//         loginUser: user => dispatch(loginUser(user))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)