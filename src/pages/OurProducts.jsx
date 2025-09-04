import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid, Card, CardContent, CardMedia, Button, CircularProgress, Alert } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import axios from 'axios';

function OurProducts({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (err) {
        setError('There was an error fetching the products. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Box sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Poojan Samagri
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        All you need for your rituals, delivered to your doorstep. High-quality items for an authentic experience.
      </Typography>

      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}

      {!loading && !error && (
        <Grid container spacing={4} justifyContent="center">
          {products.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
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
                  <Button
                    variant="contained"
                    startIcon={<AddShoppingCart />}
                    sx={{ mt: 2 }}
                    onClick={() => onAddToCart(item)}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default OurProducts;
