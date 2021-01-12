import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './components/users/Login.js'
import Signup from './components/users/Signup.js'
import NavBar from './components/NavBar.js'
import ProfileContainer from './components/containers/ProfileContainer.js'
import AllCocktailsContainer from './components/containers/AllCocktailsContainer.js'
import { getCurrentUser } from './actions/currentUser.js';
import RecipesContainer from './components/containers/RecipesContainer.js';
import { connect } from 'react-redux';
import {
  Switch,
  Route,
  withRouter
} from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render () {
    const {match} = this.props

    if (!this.props.currentUser) {
      return (
        <>
        <h2>Welcome to Bar Talk!</h2>
        <h2>Login or Signup</h2>
        <Login history={this.props.history}/>
        <Signup history={this.props.history}/>
        </>
      )
    }
    else {
    return (
          <div>
            <NavBar location={this.props.location} id='navbar'/>
            <Switch>
              <Route path="/profile/"  render={routerProps => <ProfileContainer {...routerProps} currentUser={this.props.currentUser} />}/>

              <Route exact path='/recipes/new' >
                <RecipesContainer currentUser={this.props.currentUser} cocktail={null} history={this.props.history} match={match} />
              </Route>

              <Route path="/cocktails/" render={routerProps => <AllCocktailsContainer {...routerProps} currentUser={this.props.currentUser} />}/>
              
              {/* <Route exact path="/popular">
                <PopularRecipesContainer currentUser={this.props.currentUser} history={this.props.history}/>
              </Route> */}
            </Switch>
          </div>
        
    );
  }
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
} 

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));