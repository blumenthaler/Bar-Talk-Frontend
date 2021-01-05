

export const EditRecipeForm = props => {
    return (
        <form>
            <input type="text"></input>
            <input type="submit" value="Edit"></input>
            <button onClick={() => props.triggerEditingForm()}>Cancel</button>
        </form>
    )
}