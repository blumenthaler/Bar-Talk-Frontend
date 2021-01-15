import { Button } from '@material-ui/core';

export const Comment = props => {
    
    const handleDelete = () => {
        props.deleteComment(props.comment)
        props.history.push(`${props.match.url}/comments`)
    }

    return (
            <>
                <li>
                    {props.user.attributes.username}: "{props.comment.attributes.content}" 
                    {props.user.id === props.currentUser.data.id ?     
                    <Button 
                        variant="contained" 
                        id='delete-comment-btn'
                        onClick={() => handleDelete()}
                    >X</Button>
                    : null}
                </li>
                
            </>
        )

}