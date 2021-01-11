import { makeStyles } from '@material-ui/core/styles';

export const textFieldUseStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));