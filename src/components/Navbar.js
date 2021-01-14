import React from 'react';
import {connect} from 'react-redux';
import {NavLink, useHistory} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {logout} from '../actions/currentUser.js'
import {useStyles} from '../material-ui/navBarUseStyles.js'


const NavBar = props => {
  const history = useHistory()
  const classes = useStyles();

  const handleLogout = event => {
      event.preventDefault()
      props.logout()
      history.push('/')
  }

    return (
        <div className="navbar">
          {
          <AppBar position="static">
            <Toolbar id="navbar" style={{justifyContent: "center"}}>

              <h2 style={{marginRight: '5px'}}>&#127864;</h2>
            
              <NavLink className={classes.root} id="nav-link" to="/profile/">Home</NavLink>              
              
              
              <NavLink className={classes.root} id="nav-link" to="/recipes/new">New Recipe</NavLink>
              
              
              <NavLink className={classes.root} id="nav-link" to="/cocktails/">All Cocktails</NavLink>
              
              {/* 
                <NavLink to="/popular">Popular Recipes</NavLink>
               */}
              {props.loggedIn ? <NavLink className={classes.root} id="nav-link" to="/logout/" onClick={event => handleLogout(event)}>Log Out</NavLink> : null }<h2 style={{marginLeft: '-20px'}}>&#127864;</h2>
            </Toolbar>
          </AppBar>
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

export default connect(mapStateToProps, {logout})(NavBar)