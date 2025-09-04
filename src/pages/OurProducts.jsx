import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid, Card, CardContent, CardMedia, Button, CircularProgress, Alert, Snackbar } from '@mui/material';
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
    <Box sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Our Products
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Discover a wide range of authentic and high-quality products for your spiritual needs.
      </Typography>

      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}

      {!loading && !error && (
        <Grid container spacing={4} justifyContent="center">
          {products.map((product) => (
            <Grid item key={product._id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.name !== "Havan Samagri Kits" ? havanSamagriKit : (product.imageUrl || 'https://via.placeholder.com/150')}
                  alt={product.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography variant="h6" component="p" sx={{ mt: 2, fontWeight: 'bold', color: 'primary.main' }}>
                    ₹{product.price}
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2 }}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    onClick={() => handleAddToCart(product)}
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
      />
    </Box>
  );
}

export default OurProducts;
