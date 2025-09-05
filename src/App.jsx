import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './common-components/Header';
import Footer from './common-components/Footer';
import PujaServices from './pages/PujaServices';
import OurProducts from './pages/OurProducts';
import Login from './common-components/Login';
import Signup from './common-components/Signup';
import Cart from './common-components/Cart';
import Admin from './pages/admin/Admin';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5c5cb0',
    },
    secondary: {
      main: '#f44336',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AuthProvider>
          <CartProvider>
            <AppContent />
          </CartProvider>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

function AppContent() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartOpen = () => setIsCartOpen(true);
  const handleCartClose = () => setIsCartOpen(false);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header handleCartOpen={handleCartOpen} />
      <Cart open={isCartOpen} onClose={handleCartClose} />
      <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/" element={<PujaServices />} />
          <Route path="/our-products" element={<OurProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
