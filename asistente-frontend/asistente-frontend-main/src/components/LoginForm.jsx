import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Grid, Typography } from '@material-ui/core';
import { useStyles } from '../helpers/materialStyles/useStylesLoginForm';
import { useAuth } from '../contexts/authContext';

function LoginForm() {
  const classes = useStyles();
  const navigate = useNavigate();

  const { isAuthenticated, login } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData.username, formData.password);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.formContainer}>
      <Typography variant="h4" className={classes.formItem}>
        Iniciar Sesión
      </Typography>
      <Grid item xs={12} className={classes.formItem}>
        <TextField
          name="username"
          label="Username"
          type="text"
          value={formData.username}
          onChange={handleChange}
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={12} className={classes.formItem}>
        <TextField
          name="password"
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={12} className={classes.formItem}>
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </Grid>
    </form>
  );
}

export default LoginForm;
