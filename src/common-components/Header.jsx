import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Badge,
  Avatar,
  Divider,
} from '@mui/material';
import { Storefront, ShoppingCart, AdminPanelSettings } from '@mui/icons-material';
import Logo from '../assets/images/logo.svg';
import { AuthContext } from '../context/AuthContext';

function Header({ cartItemCount, handleCartOpen }) {
  const { user, logout, loading } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleClose();
    navigate('/');
  };

  if (loading) {
    return null; // Or a loading spinner
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <img src={Logo} alt="logo" style={{ width: 40, height: 40, marginRight: '10px' }} />
            <span>Puja Portal</span>
          </Link>
        </Typography>
        <Button color="inherit" component={Link} to="/our-products" startIcon={<Storefront />}>
          Our Products
        </Button>
        {user && user.role === 'Admin' && (
          <Button color="inherit" component={Link} to="/admin" startIcon={<AdminPanelSettings />}>
            Admin
          </Button>
        )}
        <IconButton
          size="large"
          aria-label={`show ${cartItemCount} new items in cart`}
          color="inherit"
          onClick={handleCartOpen}
        >
          <Badge badgeContent={cartItemCount} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>
        {user ? (
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar alt={user.name} src={user.profileImage || 'path/to/default/avatar.png'} />
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
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem disabled sx={{ fontWeight: 'bold' }}>{user.name}</MenuItem>
              <MenuItem disabled>{user.email}</MenuItem>
              <Divider />
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
  );
}

export default Header;
