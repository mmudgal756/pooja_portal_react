import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid, Card, CardContent, CardMedia, CircularProgress, Alert } from '@mui/material';
import axios from 'axios';

function PujaServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/api/products/category/Anusthans');
        setServices(response.data);
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
    <Box sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Pooja Services
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Book our expert Pandits for your sacred ceremonies. We provide experienced and knowledgeable priests for all your ritual needs.
      </Typography>

      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}

      {!loading && !error && (
        <Grid container spacing={4} justifyContent="center">
          {services.map((service) => (
            <Grid key={services._id} xs={12} sm={6} md={4} lg={4} sx={{ flexBasis: '30%', maxWidth: '30%' }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={service.imageUrl || 'https://via.placeholder.com/150'}
                  alt={service.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {service.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                  <Typography variant="h6" component="p" sx={{ mt: 2, fontWeight: 'bold', color: 'primary.main' }}>
                    ₹{service.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default PujaServices;
