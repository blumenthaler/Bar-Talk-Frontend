import React from 'react'
import {Link} from 'react-router-dom'

export default class CocktailLink extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userHasLiked: false
        }
    }

    handleLike = () => {
        this.setState(prevState => {
            return {
                userHasLiked: !prevState.userHasLiked
            }
        })
    }

    render() {
        return (
            <>
            <li>
            <Link className="content-link" key={this.props.cocktail.id} to={`${this.props.newMatch}${this.props.cocktail.id}/`}>
                {`${this.props.cocktail.attributes.name} - ${this.props.cocktail.attributes.spirit.charAt(0).toUpperCase() + this.props.cocktail.attributes.spirit.slice(1)}`}
            </Link>
            {this.state.userHasLiked ? 
                <div onClick={() => this.handleLike()}>Dislike - 1</div>
                :
                <div onClick={() => this.handleLike()}>Like - 0</div> 
            }
            </li>
            </>
        )
    }

}








// handleLike = () => {
//     this.setState(prevState => {
//         return {
//             userHasLiked: !prevState.userHasLiked
//         }
//     })
// }


