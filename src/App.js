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
        <div className='welcome'>
          <h1 className='welcome-child'>Welcome to Bar Talk!</h1>
          <br className='welcome-child'/>
          <h2 className='welcome-child'>Login</h2>
          <Login className='welcome-child' history={this.props.history}/>
          <br className='welcome-child'/>
          <h2>Signup</h2>
          <Signup className='welcome-child' history={this.props.history}/>
        </div>
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