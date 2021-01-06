import React from 'react'
import { CancelCommentButton } from './CancelCommentButton'

export default class CommentInput extends React.Component {

    state = {
        content: "",
        recipe_id: this.props.recipe.id,
        user_id: this.props.user.data.id,
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.addComment(this.state)
        this.setState({
            content: "",
            recipe_id: this.props.recipe.id,
            user_id: this.props.user.data.id
        })
        this.props.triggerCommentForm()
        this.props.history.push(`${this.props.match.url}/`)
    }

    render() {
        console.log(this.props.match)
        return (
            <>
            <form onSubmit={event => this.handleOnSubmit(event)}>
                <input type='text' name='content' onChange={event => this.handleOnChange(event)}></input><br />
                <input type="submit" value="Comment"></input><br />
                <CancelCommentButton triggerCommentForm={this.props.triggerCommentForm} />
            </form>
            </>
        )
    }
}