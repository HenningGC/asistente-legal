import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, MenuItem, Select, FormControl, InputLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  inputBox: {
    width: '100%',
    maxWidth: 600,
    marginBottom: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const legalTypes = [
  { value: 'type1', label: 'Type 1' },
  { value: 'type2', label: 'Type 2' },
  { value: 'type3', label: 'Type 3' },
];

function Dashboard() {
  const classes = useStyles();
  const [legalType, setLegalType] = useState('');

  const handleChange = (event) => {
    setLegalType(event.target.value);
  };

  return (
    <div className={classes.container}>
      <Typography variant="h4">Asistente Legal</Typography>
      <TextField
        label="Escriba su consulta"
        multiline
        rows={6}
        variant="outlined"
        className={classes.inputBox}
      />
      <FormControl className={classes.formControl}>
        <InputLabel id="legal-type-label">Tipo de documento</InputLabel>
        <Select
          labelId="legal-type-label"
          id="legal-type-select"
          value={legalType}
          onChange={handleChange}
        >
          {legalTypes.map((type) => (
            <MenuItem key={type.value} value={type.value}>
              {type.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Dashboard;
