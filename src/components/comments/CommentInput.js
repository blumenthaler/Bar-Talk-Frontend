import React from 'react'
import { CancelCommentButton } from './CancelCommentButton'
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';

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

    handleOnSubmit = (event) => {
        if (event) {event.preventDefault()}
        this.props.addComment(this.state, this.props.history, this.props.match)
        this.setState({
            content: "",
            recipe_id: this.props.recipe.id,
            user_id: this.props.user.data.id
        })
        this.props.triggerCommentForm()
    }

    render() {
        console.log(this.props)
        return (
            <>
            <form className={this.props.classes.root} onSubmit={event => this.handleOnSubmit(event)}>

                <Input placeholder="Comment..." name="content" value={this.state.content} onChange={event => this.handleOnChange(event)} />
                <br /><br />
                <input type="submit" className='hidden' value="Comment" />

                <Button variant="contained" style={{backgroundColor: "#e5a4cb", color: "#45062e", marginLeft: "-30%", fontWeight: 'bold'}} onClick={() => this.handleOnSubmit()}>Comment</Button>

                <CancelCommentButton triggerCommentForm={this.props.triggerCommentForm} />
            </form>
            </>
        )
    }
}
