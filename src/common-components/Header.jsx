import React from 'react';
import { Link } from 'react-router-dom';
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
} from '@mui/material';
import { AccountCircle, Storefront, ShoppingCart } from '@mui/icons-material';
import Logo from '../assets/images/logo.svg';

function Header({ isAuthenticated, anchorEl, open, handleMenu, handleClose, handleLogout, cartItemCount, handleCartOpen }) {
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
  );
}

export default Header;
