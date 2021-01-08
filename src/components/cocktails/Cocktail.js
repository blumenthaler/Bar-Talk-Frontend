import UsersContainer from '../containers/UsersContainer.js';

export const Cocktail = props => {
        const {attributes} = props.cocktail
        if (props.cocktail.relationships.recipes.data.length === 0) {return null}
        else {
            return (
                <li>
                    {attributes.name} - {attributes.spirit.charAt(0).toUpperCase() + attributes.spirit.slice(1)}
                    
                    <UsersContainer 
                        cocktail={props.cocktail} 
                        currentUser={props.currentUser} 
                        profile={props.profile} 
                    />
                </li>
            )
        }
    }
