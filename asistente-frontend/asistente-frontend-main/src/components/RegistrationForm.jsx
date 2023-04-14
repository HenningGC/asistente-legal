import React, { useState } from 'react';
import { Button, TextField, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useStyles } from '../helpers/materialStyles/useStylesLanding';

function RegistrationForm() {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = formData;
    password === confirmPassword ? 
        // Handle form submission, e.g., call API to register user
        console.log(formData) :
        // Handle error
        console.log('Passwords do not match');
  };

  return (
    <div>
        <div>
            <Typography variant="h1" className={classes.welcomeText}>
                Bienvenido a tu Asistente Legal!
            </Typography>
            <Typography variant="h2" className={classes.secondaryText}>
                Di adiós a los abogados
            </Typography>
        </div>
        <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <Typography variant="h5">Registrarse</Typography>
            </Grid>
            <Grid item xs={12}>
            <TextField
                name="username"
                label="Nombre de Usuario"
                value={formData.username}
                onChange={handleChange}
                fullWidth
                required
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                name="email"
                label="Correo Electrónico"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                name="password"
                label="Contraseña"
                type="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                required
                error={formData.password !== formData.confirmPassword}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                name="confirmPassword"
                label="Confirmar Contraseña"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                fullWidth
                required
                error={formData.password !== formData.confirmPassword}
            />
            </Grid>
            <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
                Register
            </Button>
            </Grid>
        </Grid>
        </form>
    </div>
  );
}

export default RegistrationForm;
