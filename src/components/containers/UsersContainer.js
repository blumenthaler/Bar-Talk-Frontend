import React from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../../actions/users.js';


class UsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.getAllUsers()
    }

    render() {
        console.log(this.props)
        return (
            <div>users container</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, {getAllUsers})(UsersContainer)
