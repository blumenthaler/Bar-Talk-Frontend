import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './components/Login.js'
import { getCurrentUser } from './actions/currentUser.js';
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render () {
  return (
   <Login />
  );
  }
}

export default connect(null, { getCurrentUser })(App);
