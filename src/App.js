import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import Logout from './components/Logout.js'
import RecipesContainer from './containers/RecipesContainer.js'
import { getCurrentUser } from './actions/currentUser.js';
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render () {
  return (
    this.props.currentUser ? <><Logout /><RecipesContainer currentUser={this.props.currentUser}/></> : <><Login /> <Signup /> </>
  );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
} 

export default connect(mapStateToProps, { getCurrentUser })(App);
