import { makeStyles } from '@material-ui/core/styles';

export const cardUseStyles = makeStyles((theme) => ({
    root: {
      ...theme.typography.button,
      color: "#7f055f",
      backgroundColor: '#ebd2be',
      padding: theme.spacing(1),
      maxWidth: '300px',
      fontWeight: 'bold',
    },
  }));