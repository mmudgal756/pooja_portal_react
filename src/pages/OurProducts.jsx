import React from 'react';
import { Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';

const samagri = [
  {
    id: 1,
    name: 'Puja Thali Set',
    description: 'A complete set with a thali, diya, incense sticks, and other essentials.',
    image: 'https://images.unsplash.com/photo-1589694368393-68e1a1b5936d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 5100,
  },
  {
    id: 2,
    name: 'Havan Samagri',
    description: 'A mixture of herbs, wood, and other items for performing a havan.',
    image: 'https://images.unsplash.com/photo-1604719312566-2a2c1a1a1b59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 5100,
  },
  {
    id: 3,
    name: 'Idols of Deities',
    description: 'Beautifully crafted idols of various Hindu gods and goddesses.',
    image: 'https://images.unsplash.com/photo-1594114972138-bd904ce5c1a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 5100,
  },
];

function OurProducts() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Our Products
      </Typography>
      <Grid container spacing={4}>
        {samagri.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="140"
                image={item.image || 'https://via.placeholder.com/150'}
                alt={item.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="h6" component="p" sx={{ mt: 2, fontWeight: 'bold', color: 'primary.main' }}>
                  ₹{item.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default OurProducts;
