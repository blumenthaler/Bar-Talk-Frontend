import { makeStyles } from '@material-ui/core/styles';

export const editRecipeUseStyles = makeStyles((theme) => ({
    root: {
      ...theme.typography.button,
      color: "#ffe8d4",
      backgroundColor: '#7f055f',
      padding: theme.spacing(1),
      maxWidth: '300px',
      fontWeight: 'bold',
    },
  }));