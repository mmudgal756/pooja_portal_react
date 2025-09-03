import React from 'react';
import { Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';

const services = [
  {
    id: 1,
    name: 'Satyanarayan Puja',
    description: 'A puja to honor Lord Vishnu, bringing prosperity and happiness.',
    image: 'https://images.unsplash.com/photo-1629572635338-b79e7825a195?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 5100,
  },
  {
    id: 2,
    name: 'Griha Pravesh Puja',
    description: 'A housewarming ceremony to purify the new home and invite blessings.',
    image: 'https://images.unsplash.com/photo-1599596230048-8c17f549553b?q=80&w=2070&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 7100,
  },
  {
    id: 3,
    name: 'Vastu Shanti Puja',
    description: 'A puja to remove any Vastu doshas and bring harmony to the home.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 6100,
  },
];

function Services() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Pooja Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item key={service.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="140"
                image={service.image || 'https://via.placeholder.com/150'}
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
    </Box>
  );
}

export default Services;
