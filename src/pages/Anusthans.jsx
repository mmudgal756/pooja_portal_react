import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid, Card, CardMedia, Button, CircularProgress, Alert, Container } from '@mui/material';
import { getAnusthans } from '../services/AnusthanService';
import placeholder from '../assets/images/placeholder.png';

function AnusthanComponent() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getAnusthans();
        setServices(data);
      } catch (err) {
        setError('There was an error fetching the puja services. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ mt: 12, mb: 4, textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#5c5cb0' }}>
        Puja Services
      </Typography>
      <Typography variant="body1" sx={{ mb: 6, color: '#64748b' }}>
        Book our authentic and reliable puja services for a divine experience.
      </Typography>

      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}

      {!loading && !error && (
        <Grid container spacing={4} justifyContent="center">
          {services.map((service) => (
            <Grid item key={service._id} xs={12} sm={6} md={4} lg={4} sx={{ flexBasis: '30%', maxWidth: '30%' }}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                textAlign: 'left',
                borderRadius: 2,
                boxShadow: '0px 4px 12px rgba(0,0,0,0.05)',
                p: 2,
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)'
                }
              }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#5c5cb0', fontSize: '1.1rem' }}>
                  {service.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontSize: '0.8rem', minHeight: '40px' }}>
                  {service.description}
                </Typography>
                <CardMedia
                  component="img"
                  height="250"
                  image={service.imageUrl || placeholder}
                  alt={service.name}
                  sx={{ borderRadius: 1.5, mb: 2, height: '250px' }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                  <Typography variant="h6" component="p" sx={{ fontWeight: 'bold', color: '#5c5cb0', fontSize: '1rem' }}>
                    ₹{service.price}
                  </Typography>
                  <Button 
                    variant="outlined" 
                    color="primary" 
                    sx={{ textTransform: 'none', fontSize: '0.8rem', borderColor: '#e2e8f0', color: '#5c5cb0' }}
                  >
                    Book Now
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default AnusthanComponent;
