import { makeStyles } from '@material-ui/core/styles';

export const recipeInputNoCocktailUseStyles = makeStyles((theme) => ({
    root: {
      ...theme.typography.button,
      color: '#71697a',
      backgroundColor: '#45062e',
      padding: theme.spacing(1),
      maxWidth: '300px',
      minWidth: '550px',
      fontWeight: 'bold',
      marginRight: '20%',
      marginLeft: '20%',
      border: 'none',
      boxShadow: "none"
    },
  }));