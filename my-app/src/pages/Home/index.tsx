import React from 'react'
import "./index.css"
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Navbar from '../../components/Navbar';
import Blog from '../../components/Blog';

const index = () => {
  return (
    <>
          <Container maxWidth="xl">
            <Navbar/>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >  <Blog/> </Box>
     
      </Container>
    </>
  )
}

export default index