import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './components/users/Login.js'
import Signup from './components/users/Signup.js'
import Logout from './components/users/Logout.js'
import NavBar from './components/NavBar.js'
// import RecipesContainer from './containers/RecipesContainer.js'
import CocktailsContainer from './components/containers/CocktailsContainer.js'
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
    return (
      <Router>
        {
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              {/* <Route exact path="/cocktails">
                <CocktailsContainer />
              </Route>
              <Route exact path="/popular">
                <PopularRecipesContainer />
              </Route> */}
            </Switch>
          </div>
        }
      </Router>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
} 

export default connect(mapStateToProps, { getCurrentUser })(App);

// this.props.currentUser ? <><Logout /><CocktailsContainer currentUser={this.props.currentUser}/></> : <><Login /> <Signup /> </>