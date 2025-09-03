import React from 'react';
import { Typography, Box, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const featuredServices = [
  {
    id: 1,
    name: 'Satyanarayan Puja',
    description: 'Bringing prosperity and happiness to your home.',
    image: 'https://images.unsplash.com/photo-1629572635338-b79e7825a195?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Griha Pravesh Puja',
    description: 'Purify your new home and invite blessings.',
    image: 'https://images.unsplash.com/photo-1599596230048-8c17f549553b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Vastu Shanti Puja',
    description: 'Remove Vastu doshas and bring harmony.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          mb: 6,
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1589363512338-561c20a83344?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.6)',
            zIndex: -1,
          }}
        />
        <Box>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Welcome to Puja Portal
          </Typography>
          <Typography variant="h5" component="p" sx={{ mb: 4 }}>
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
                sx={{ color: 'white', borderColor: 'white' }}
              >
                Shop for Samagri
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Featured Services */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
          Featured Services
        </Typography>
        <Grid container spacing={4}>
          {featuredServices.map((service) => (
            <Grid item key={service.id} xs={12} sm={6} md={4}>
              <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardMedia
                  component="img"
                  height="160"
                  image={service.image}
                  alt={service.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {service.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;
