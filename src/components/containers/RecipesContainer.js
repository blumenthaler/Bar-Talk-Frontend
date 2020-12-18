import React from 'react';
import currentUser from '../../reducers/currentUser.js';
// import { connect } from 'react-redux';
import Recipes from '../recipes/Recipes.js';


class RecipesContainer extends React.Component {

    render() {
        return (
            <div>
                <Recipes recipes={this.props.recipes} currentUser={this.props.currentUser}/>
                {/* <Recipes /> */}
            </div>
        )
    }
}

export default RecipesContainer