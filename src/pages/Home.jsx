import React from 'react';
import { Typography, Box, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Puja Portal
      </Typography>
      <Typography variant="h5" component="p" color="text.secondary" sx={{ mb: 4 }}>
        Your one-stop solution for all your pooja needs.
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button
            component={Link}
            to="/services"
            variant="contained"
            size="large"
          >
            Browse Services
          </Button>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to="/samagri"
            variant="outlined"
            size="large"
          >
            Shop for Samagri
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
