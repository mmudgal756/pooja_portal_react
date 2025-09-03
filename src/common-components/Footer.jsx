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
        backgroundColor: 'primary.main',
        color: 'white',
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
