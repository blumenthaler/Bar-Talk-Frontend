import { makeStyles } from '@material-ui/core/styles';

export const recipeInputProfileUseStyles = makeStyles((theme) => ({
    root: {
      ...theme.typography.button,
      color: "#7f055f",
      backgroundColor: '#45062e',
      padding: theme.spacing(1),
      maxWidth: '300px',
      minWidth: '550px', 
      fontWeight: 'bold',
      marginRight: '30px', 
      marginLeft: '15px'
    },
  }));