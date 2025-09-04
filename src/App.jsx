import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Header from './common-components/Header';
import Footer from './common-components/Footer';
import PujaServices from './pages/PujaServices';
import OurProducts from './pages/OurProducts';
import Login from './common-components/Login';
import Signup from './common-components/Signup';
import Cart from './common-components/Cart';
import Admin from './pages/admin/Admin';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(0, quantity) } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header 
          cartItemCount={cartItemCount}
          handleCartOpen={handleCartOpen}
        />
        <Cart 
          cart={cart}
          open={isCartOpen}
          onClose={handleCartClose}
          onRemoveFromCart={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
        />
        <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
          <Container>
            <Routes>
              <Route path="/" element={<PujaServices />} />
              <Route 
                path="/our-products" 
                element={<OurProducts onAddToCart={handleAddToCart} />} 
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </Container>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
