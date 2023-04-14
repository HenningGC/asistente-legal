import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    welcomeText: {
      marginBottom: theme.spacing(1),
    },
    secondaryText: {
      opacity: 0.7,
    },
    loginButton: {
      marginTop: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    registerLink: {
      textDecoration: 'none',
      textTransform: 'none',
      marginTop: theme.spacing(2),
      color: theme.palette.primary.main,
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  }));