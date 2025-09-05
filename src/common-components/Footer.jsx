import React from 'react';
import { Typography, Box, Container } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        marginTop: 'auto',
        backgroundColor: '#ffffffcc',
        color: '#5c5cb0',
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} Puja Portal. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
