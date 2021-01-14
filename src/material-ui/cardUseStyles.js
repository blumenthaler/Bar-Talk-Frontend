import { makeStyles } from '@material-ui/core/styles';

export const cardUseStyles = makeStyles((theme) => ({
    root: {
      ...theme.typography.button,
      color: "#71697A",
      backgroundColor: '#ebd2be',
      padding: theme.spacing(1),
      'max-width': '300px',
      'font-weight': 'bold',
    },
  }));