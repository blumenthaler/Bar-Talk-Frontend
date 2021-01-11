import React from 'react';
import {connect} from 'react-redux';
import {NavLink, useHistory} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import {logout} from '../actions/currentUser.js'

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

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
            <Toolbar>
            
              <NavLink className={classes.root} to="/profile/">Home</NavLink>              
              
              
              <NavLink className={classes.root} to="/recipes/new">Add a New Recipe</NavLink>
              
              
              <NavLink className={classes.root} to="/cocktails/">All Cocktails</NavLink>
              
              {/* 
                <NavLink to="/popular">Popular Recipes</NavLink>
               */}
              {props.loggedIn ? <NavLink className={classes.root} to="/logout/" onClick={event => handleLogout(event)}>Log Out</NavLink> : null }
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