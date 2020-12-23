import React from 'react';
import { connect } from 'react-redux';
import Cocktails from '../cocktails/Cocktails.js';
import { getAllCocktails } from '../../actions/cocktails.js';

class CocktailsContainer extends React.Component {

    componentDidMount() {
        this.props.getAllCocktails()
    }

    render() {
        if ((this.props.cocktails.loading) || (!this.props.cocktails.cocktails.included) ) {
            return (<h2>Loading...</h2>)
        }
        else {
            return (
                <div>
                    <Cocktails cocktails={this.props.cocktails.cocktails.data} loading={this.props.cocktails.loading} currentUser={this.props.currentUser}/>
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