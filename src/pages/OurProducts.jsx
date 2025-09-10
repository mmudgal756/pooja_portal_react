import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid, Card, CardMedia, Button, CircularProgress, Alert, Snackbar, Container } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import havanSamagriKit from '../assets/images/havanKit.png';

function OurProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const { onAddToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products/category/Products');
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

  const handleAddToCart = (product) => {
    onAddToCart(product);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 12, mb: 4, textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#5c5cb0' }}>
        Our Products
      </Typography>
      <Typography variant="body1" sx={{ mb: 6, color: '#64748b' }}>
        Discover a wide range of authentic and high-quality products for your spiritual needs.
      </Typography>

      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}

      {!loading && !error && (
        <Grid container spacing={4} justifyContent="center">
          {products.map((product) => (
            <Grid item key={product._id} xs={12} sm={6} md={4} lg={4} sx={{ flexBasis: '30%', maxWidth: '30%' }}>
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
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontSize: '0.8rem', minHeight: '40px' }}>
                  {product.description}
                </Typography>
                <CardMedia
                  component="img"
                  height="250"
                  image={product.name === "Havan Samagri Kit" ? havanSamagriKit : (product.imageUrl || 'https://via.placeholder.com/600x400')}
                  alt={product.name}
                  sx={{ borderRadius: 1.5, mb: 2, height: '250px' }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                  <Typography variant="h6" component="p" sx={{ fontWeight: 'bold', color: '#5c5cb0', fontSize: '1rem' }}>
                    ₹{product.price}
                  </Typography>
                  <Button 
                    variant="outlined" 
                    color="primary" 
                    startIcon={<AddShoppingCart />}
                    onClick={() => handleAddToCart(product)}
                    sx={{ textTransform: 'none', fontSize: '0.8rem', borderColor: '#e2e8f0', color: '#5c5cb0' }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Item added to cart"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Container>
  );
}

export default OurProducts;
