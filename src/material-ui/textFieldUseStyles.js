import { makeStyles } from '@material-ui/core/styles';

export const textFieldUseStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '20ch',
      color: '#e4be9e',
    },
    '& .MuiInputBase-input': {
      borderBottomColor: 'white',
    },
    '& .MuiInput-input': {
      color: '#e4be9e',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#e4be9e',
    },
    '& label.Mui-focused': {
      color: '#f2f6d0',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#f2f6d0',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#f2f6d0',
      },
      '&:hover fieldset': {
        borderColor: '#f2f6d0',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#f2f6d0',
      },
    },
  },
  }));