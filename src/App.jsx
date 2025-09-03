import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { Landmark } from 'lucide-react'; // Changed from Temple to Landmark
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
        <AppBar position="fixed">
          <Toolbar>
            <Landmark size={32} style={{ marginRight: '12px' }} /> {/* Changed from Temple to Landmark */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                Puja Portal
              </Link>
            </Typography>
            <Button color="inherit" component={Link} to="/services">
              Services
            </Button>
            <Button color="inherit" component={Link} to="/samagri">
              Samagri
            </Button>
            {isAuthenticated ? (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            ) : (
              <Box>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
              </Box>
            )}
          </Toolbar>
        </AppBar>
        <Container component="main" sx={{ mt: 10, mb: 2, flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/samagri" element={<Samagri />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Container>
        <Box
          component="footer"
          sx={{
            p: 2,
            backgroundColor: 'primary.main',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Puja Portal. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
