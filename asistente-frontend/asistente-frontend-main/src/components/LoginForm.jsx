import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Grid, Typography } from '@material-ui/core';
import { useStyles } from '../helpers/materialStyles/useStylesLogin';

function LoginForm() {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., call API to authenticate user
    console.log(formData);
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
