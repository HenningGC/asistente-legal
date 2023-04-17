import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, MenuItem, Select, FormControl, InputLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
    }));
function DropDownLegal({onReceiveData}) {
    
    const legalTypes = [
        { value: 'cualquier', label: 'Cualquier' },
        { value: 'Fiscal', label: 'Fiscal' },
        { value: 'Constitucional', label: 'Constitucional' },
      ];

    const classes = useStyles();
    const [legalType, setLegalType] = useState('');

    const sendDataToParent = (data) => {
        onReceiveData(data);
    }


    const handleChange = (event) => {
      setLegalType(event.target.value);
      sendDataToParent(event.target.value);
    };


    return (
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
      );
    }
export default DropDownLegal;