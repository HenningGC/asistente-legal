import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 60,
    },
    welcomeText: {
      marginBottom: theme.spacing(1),
    },
    secondaryText: {
      opacity: 0.7,
    },
    loginLink: {
      textDecoration: 'none',
      textTransform: 'none',
      marginTop: theme.spacing(2),
      color: theme.palette.primary.main,
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  }));