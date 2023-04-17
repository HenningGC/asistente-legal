import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useStyles } from '../helpers/materialStyles/useStylesLanding';
import { register } from '../services/authService';

function RegistrationForm() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      return;
    } else {
      try {
        await register(username, password, email);
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <Typography variant="h4">Registrarse</Typography>
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
