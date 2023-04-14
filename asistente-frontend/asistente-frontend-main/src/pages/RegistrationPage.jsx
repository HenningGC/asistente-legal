import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from '../helpers/materialStyles/useStylesRegister';
import RegistrationForm from '../components/RegistrationForm';


function RegistrationPage() {
    const classes = useStyles();
  
    return (
      <div className={classes.container}>
        <Box>
          <RegistrationForm />
          <Link to="/" className={classes.loginLink}>
            Ya tienes cuenta? Inicia sesión aquí
          </Link>
        </Box>
      </div>
    );
  }
  
  export default RegistrationPage;