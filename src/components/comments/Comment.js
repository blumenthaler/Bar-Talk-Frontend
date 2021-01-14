export const Comment = props => {
    
    const handleDelete = event => {
        event.preventDefault()
        props.deleteComment(props.comment)
        props.history.push(`${props.match.url}/comments`)
    }

    return (
            <>
                <li>
                    {props.user.attributes.username}: "{props.comment.attributes.content}" 
                    {props.user.id === props.currentUser.data.id ? <button style={{marginLeft: "10px"}} onClick={event => handleDelete(event)}  >X</button> : null}
                </li>
                
            </>
        )

}