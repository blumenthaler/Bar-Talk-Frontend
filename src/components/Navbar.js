import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import Logout from './users/Logout'

const NavBar = ({ currentUser, loggedIn }) => {
    return (
        <div className="navbar">
          {
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>              
              </li>
              <li>
                <NavLink to="/cocktails">All Cocktails</NavLink>
              </li>
              <li>
                <NavLink to="/popular">Popular Recipes</NavLink>
              </li>
              <li>
                <Logout />
              </li>
            </ul>
          </nav>
          }
        </div>
      );
}

const mapStateToProps = ({currentUser}) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
}

export default connect(mapStateToProps)(NavBar)