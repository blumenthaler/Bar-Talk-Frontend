import React from 'react';
import {connect} from 'react-redux';
import {NavLink, useHistory} from 'react-router-dom';
import Logout from './users/Logout'


const NavBar = ({ loggedIn }) => {
  const history = useHistory()
    return (
        <div className="navbar">
          {
          <nav>
            <ul>
              <li>
                <NavLink to="/profile/">Home</NavLink>              
              </li>
              <li>
                <NavLink to="/recipes/new">Add a New Recipe</NavLink>
              </li>
              <li>
                <NavLink to="/cocktails/">All Cocktails</NavLink>
              </li>

              {/* <li>
                <NavLink to="/popular">Popular Recipes</NavLink>
              </li> */}
              {loggedIn ? <li><Logout history={history} /></li> : null }
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