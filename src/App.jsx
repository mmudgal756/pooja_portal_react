import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Header from './common-components/Header';
import Footer from './common-components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Samagri from './pages/Samagri';
import Login from './common-components/Login';
import Signup from './common-components/Signup';

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // TODO: Implement actual logout logic (e.g., clear token)
    setIsAuthenticated(false);
    handleClose();
  };

  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header 
          isAuthenticated={isAuthenticated}
          anchorEl={anchorEl}
          open={open}
          handleMenu={handleMenu}
          handleClose={handleClose}
          handleLogout={handleLogout}
        />
        <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/samagri" element={<Samagri />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Container>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
