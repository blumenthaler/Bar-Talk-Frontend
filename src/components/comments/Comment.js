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
                        style={{
                            marginLeft: "10px",
                            backgroundColor: "#45062e",
                            color: "#ffe8d4", 
                            fontWeight: "bold", 
                            maxHeight: "20px", 
                            minWidth: '3px',
                            maxWidth: '5px'
                        }}
                        onClick={() => handleDelete()}
                    >X</Button>
                    : null}
                </li>
                
            </>
        )

}