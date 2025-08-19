import React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "../../styles/containerForm.css";
import TabProgress from "../tabForm/tabProgress";


export default function containerForm() {
  return (
    <React.Fragment>
        <CssBaseline/>
        <Container maxWidth="sm" className='container'>
            <h2>ENREGISTREMENT DES EQUIPEMENTS</h2>
            <TabProgress/>
            {/* <Box sx={{ bgcolor: '#cac8c8ff', height: '50px' }}>bonjour</Box> */}
        </Container>
    </React.Fragment>
  )
}
