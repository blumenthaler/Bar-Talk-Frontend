import React from 'react'
import Comment from './Comment.js'

class Comments extends React.Component {

    render() {
        console.log(this.props)
            return (
                
                <ul>
                    <Comment />
                </ul>
            )
        }
}

export default Comments