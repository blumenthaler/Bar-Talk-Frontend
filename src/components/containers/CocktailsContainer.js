import React from 'react';
import { connect } from 'react-redux';
import Cocktails from '../cocktails/Cocktails.js';
import { getAllCocktails } from '../../actions/cocktails.js';

class CocktailsContainer extends React.Component {

    componentDidMount() {
        this.props.getAllCocktails()
    }

    render() {
        if (this.props.cocktails.loading) {
            return (<h2>Loading...</h2>)
        }
        else {
            return (
                <div>
                    <Cocktails cocktails={this.props.cocktails.cocktails.data} loading={this.props.cocktails.loading} recipes={this.props.cocktails.cocktails.included} currentUser={this.props.currentUser}/>
                {/* <Cocktails /> */}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        cocktails: state.cocktails,
    }
}

export default connect(mapStateToProps, {getAllCocktails})(CocktailsContainer)