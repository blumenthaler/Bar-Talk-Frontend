import React from 'react';
import { connect } from 'react-redux';
import Cocktails from '../cocktails/Cocktails.js';
import { getAllCocktails } from '../../actions/cocktails.js';

class AllCocktailsContainer extends React.Component {

    constructor() {
        super()
        this.state ={
            profile: false
        }
    }

    componentDidMount() {
        this.props.getAllCocktails()
    }

    // get rid of this
    getComments() {
        return this.props.cocktails.cocktails.included.filter(data => data.type === 'comment')
    }

    render() {
        if ((this.props.cocktails.loading) || (!this.props.cocktails.cocktails.included) ) {
            return (<h2>Loading...</h2>)
        }
        else {

            // get rid of this
            const comments = this.getComments()
            return (
                <>
                <h1>All Cocktails</h1>
                <div>
                    <Cocktails cocktails={this.props.cocktails.cocktails.data} loading={this.props.cocktails.loading} currentUser={this.props.currentUser} profile={this.state.profile} 
                    
                    // get rid of this
                    comments={comments}/>
                </div>
                </>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        cocktails: state.cocktails,
    }
}

export default connect(mapStateToProps, {getAllCocktails})(AllCocktailsContainer)