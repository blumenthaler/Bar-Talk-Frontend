import { makeStyles } from '@material-ui/core/styles';

export const headerUseStyles = makeStyles((theme) => ({
    root: {
      ...theme.typography.button,
      backgroundColor: "#D9D2B6",
      padding: theme.spacing(1),
    },
  }));