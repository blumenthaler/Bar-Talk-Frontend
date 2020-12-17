import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './components/users/Login.js'
import Signup from './components/users/Signup.js'
import Logout from './components/users/Logout.js'
import RecipesContainer from './containers/RecipesContainer.js'
import CocktailsContainer from './containers/CocktailsContainer.js'
import { getCurrentUser } from './actions/currentUser.js';
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render () {
  return (
    this.props.currentUser ? <><Logout /><CocktailsContainer currentUser={this.props.currentUser}/></> : <><Login /> <Signup /> </>
  );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
} 

export default connect(mapStateToProps, { getCurrentUser })(App);
