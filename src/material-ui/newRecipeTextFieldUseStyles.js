import { makeStyles } from '@material-ui/core/styles';

export const newRecipeTextFieldUseStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
      color: '#f2f6d0',
    },
    '& .MuiInputBase-input': {
      borderBottomColor: 'white',
    },
    '& .MuiInput-input': {
      color: '#536b78',
      'font-weight': 'bold',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#71697a',
    },
    '& label.Mui-focused': {
      color: '#d9d2b6',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#536b78',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#f2f6d0',
      },
      '&:hover fieldset': {
        borderColor: '#accbe1',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#d0e1d4',
      },
    },
  },
  }));