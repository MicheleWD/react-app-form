import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function declarationField() {
  return (
    <Box
      component="form"
      //sx={{ '& .MuiTextField-root': { m: 2, width: '25ch' } }}
      noValidate
      autoComplete="on"
    >
      <div>
        <TextField
          required
          fullWidth 
          id="filled-name-input"
          label="Name"
          type="name"
          autoComplete="current-name"
          sx={{marginBottom:'18px'}}
        /> 
        <TextField
          required
          fullWidth 
          id="filled-categorie-input"
          label="Categorie"
          type="categorie"
          autoComplete="current-categorie"
          sx={{marginBottom:'18px'}}
        /> 
        <TextField
          required
          fullWidth 
          id="filled-lieu-input"
          label="Lieu"
          type="lieu"
          autoComplete="current-lieu"
          sx={{marginBottom:'18px'}}
        /> 
        {/* <InputText
          buttonLabel=""
          className=""
          helper="Informations complémentaires"
          id="nameid"
          label="Label"
          name="name"
          onChange={() => {}}
          placeholder="Type your name"
          type="text"
          value=""
        /> */}
      </div>
    </Box>
  );
}