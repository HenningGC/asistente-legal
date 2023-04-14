import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Grid, Typography } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '30vh',
  },
  formItem: {
    marginBottom: theme.spacing(2),
    width: 400, // Set a fixed width for the TextField components
  },
}));