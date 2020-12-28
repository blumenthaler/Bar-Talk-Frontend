import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './components/users/Login.js'
import Signup from './components/users/Signup.js'
import Logout from './components/users/Logout.js'
import NavBar from './components/NavBar.js'
import ProfileContainer from './components/containers/ProfileContainer.js'
// import RecipesContainer from './containers/RecipesContainer.js'
import CocktailsContainer from './components/containers/AllCocktailsContainer.js'
import { getCurrentUser } from './actions/currentUser.js';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render () {
    if (!this.props.currentUser) {
      return (
        <>
        <h2>Welcome to Bar Talk!</h2>
        <h2>Login or Signup</h2>
        <Login />
        <Signup />
        </>
      )
    }
    else {
    return (
      <Router>
        {
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <ProfileContainer currentUser={this.props.currentUser}/>
              </Route>
              <Route exact path="/cocktails">
                <CocktailsContainer currentUser={this.props.currentUser}/>
              </Route>
              {/* <Route exact path="/popular">
                <PopularRecipesContainer />
              </Route> */}
            </Switch>
          </div>
        }
      </Router>
    );
  }
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
} 

export default connect(mapStateToProps, { getCurrentUser })(App);

// this.props.currentUser ? <><Logout /><CocktailsContainer currentUser={this.props.currentUser}/></> : <><Login /> <Signup /> </>