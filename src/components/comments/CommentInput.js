import React from 'react'

export default class CommentInput extends React.Component {

    state = {
        content: "",
        recipe_id: this.props.recipe.id,
        user_id: this.props.user.data.id
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    handleOnSubmit = event => {
        event.preventDefault()
    }

    render() {
        return (
            <>
            <form onSubmit={event => this.handleOnSubmit(event)}>
                <input type='text' name='content' onChange={event => this.handleOnChange(event)}></input><br />
                <input type="submit" value="Comment"></input><br />
                <button onClick={() => this.props.triggerCommentForm()}>Cancel</button>
            </form>
            </>
        )
    }
}