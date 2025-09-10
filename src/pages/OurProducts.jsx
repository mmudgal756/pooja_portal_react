import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid, Card, CardMedia, Button, CircularProgress, Alert, Snackbar, Container } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { useCart } from '../context/CartContext';
import havanSamagriKit from '../assets/images/havanKit.png';

const dummyProducts = [
    {
        "_id": "68b9a4f1c0e076be83c9ba3e",
        "name": "Havan Samagri Kit",
        "description": "A complete kit with all essential items for performing a sacred Havan at home.",
        "price": 20,
        "category": "68b98705518c3ecbb1e94b34",
        "stock": 0,
        "createdAt": "2025-09-04T14:40:49.988Z",
        "updatedAt": "2025-09-04T14:40:49.988Z",
        "__v": 0
    },
    {
        "_id": "68b9a522c0e076be83c9ba43",
        "name": "Premium Agarbatti",
        "description": "Aromatic incense sticks to create a divine and peaceful atmosphere during your puja.",
        "price": 299,
        "category": "68b98705518c3ecbb1e94b34",
        "stock": 0,
        "createdAt": "2025-09-04T14:41:38.353Z",
        "updatedAt": "2025-09-04T14:41:38.353Z",
        "__v": 0
    },
    {
        "_id": "68b9a53cc0e076be83c9ba48",
        "name": "Natural Dhoop Batti",
        "description": "Pure and natural incense cones for a long-lasting and soothing fragrance.",
        "price": 199,
        "category": "68b98705518c3ecbb1e94b34",
        "stock": 0,
        "createdAt": "2025-09-04T14:42:04.599Z",
        "updatedAt": "2025-09-04T14:42:04.599Z",
        "__v": 0
    },
    {
        "_id": "68b9a55cc0e076be83c9ba4d",
        "name": "Pure Ganga Jal",
        "description": "Sacred water from the Ganges, essential for purification rituals and offerings.",
        "price": 99,
        "category": "68b98705518c3ecbb1e94b34",
        "stock": 0,
        "createdAt": "2025-09-04T14:42:36.036Z",
        "updatedAt": "2025-09-04T14:42:36.036Z",
        "__v": 0
    },
    {
        "_id": "68b9a57ac0e076be83c9ba52",
        "name": "Brass Diya Set",
        "description": "Set of two beautifully crafted brass diyas to illuminate your sacred space.",
        "price": 399,
        "category": "68b98705518c3ecbb1e94b34",
        "stock": 0,
        "createdAt": "2025-09-04T14:43:06.111Z",
        "updatedAt": "2025-09-04T14:43:06.111Z",
        "__v": 0
    },
    {
        "_id": "68b9a59ec0e076be83c9ba57",
        "name": "Puja Thali Set",
        "description": "A complete puja thali set in decorative steel, including all necessary items.",
        "price": 599,
        "category": "68b98705518c3ecbb1e94b34",
        "stock": 0,
        "createdAt": "2025-09-04T14:43:42.700Z",
        "updatedAt": "2025-09-04T14:43:42.700Z",
        "__v": 0
    }
]

function OurProducts() {
  const [products, setProducts] = useState(dummyProducts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const { onAddToCart } = useCart();

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
