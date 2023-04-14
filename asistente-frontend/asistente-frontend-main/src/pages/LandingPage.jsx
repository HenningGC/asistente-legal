import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from '../helpers/materialStyles/useStylesLanding';
import RegistrationForm from '../components/RegistrationForm';
import LoginForm from '../components/LoginForm';
function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Box>
        <LoginForm/>
        <Button
            component={Link}
            to="/register"
            className={classes.registerLink}
        >
            Aún no tienes cuenta? Regístrate aquí
        </Button>
      </Box>
      {/* You can include the RegistrationForm component here if needed */}
      {/* <RegistrationForm /> */}
    </div>
  );
}

export default LandingPage;
