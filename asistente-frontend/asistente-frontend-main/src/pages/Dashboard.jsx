import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Paper,
  Box,
  ListItem,
  ListItemText,
  List,
} from '@material-ui/core';
import DropDownLegal from '../components/DropDownLegal';


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
  inputWrapper: {
    position: 'relative',
  },
  sendButton: {
    position: 'absolute',
    right: 8,
    bottom: 8,
    backgroundColor: 'transparent',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  responseOutput: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textAlign: 'left',
    maxWidth: 600,
  },
}));


function Dashboard() {
  const classes = useStyles();
  
  const [selectedLegalType, setSelectedLegalType] = useState('');
  const [responseOutput, setResponseOutput] = useState('');

  const handleChildData = (data) => {
    setSelectedLegalType(data);
  }

  const [inputText, setInputText] = useState('');
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/legal_document', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: inputText }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log('Response data:', responseData);
      setResponseOutput(responseData);
      setInputText('');
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
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
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <button
                  type="button"
                  onClick={handleSubmit}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    paddingRight: 8,
                  }}
                >
                  <i className="material-icons" style={{ fontSize: 24, color: 'rgba(0, 0, 0, 0.54)' }}>
                     ⏎
                  </i>
                </button>
              </InputAdornment>
            ),
          }}
        />
        {responseOutput && <Typography className='classes.responseOutput'>{responseOutput}</Typography>}
      {!responseOutput && <DropDownLegal onReceiveData={handleChildData} />}
    </div>
  );
}

export default Dashboard;
