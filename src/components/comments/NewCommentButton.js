export const NewCommentButton = props => {
    return (
        <>
        <button onClick={() => props.triggerCommentForm()}>Add Comment</button>
        <br /><br />
        </>
    ) 
}