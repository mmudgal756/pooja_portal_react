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
  ListItemIcon,
} from '@mui/material';
import {
  Storefront,
  ShoppingCart,
  AdminPanelSettings,
  Logout as LogoutIcon,
  AccountCircle,
} from '@mui/icons-material';
import Logo from '../assets/images/logo.svg';
import { AuthContext } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

function Header({ handleCartOpen }) {
  const { user, logout, loading } = useContext(AuthContext);
  const { cart } = useCart();
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

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

  const handleAdminClick = () => {
    navigate('/admin');
    handleClose();
  };

  if (loading) {
    return null; 
  }

  return (
    <AppBar position="static" elevation={1}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <img src={Logo} alt="logo" style={{ width: 40, height: 40, marginRight: '10px' }} />
            <span style={{ fontWeight: 'bold' }}>Puja Portal</span>
          </Link>
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button component={Link} to="/our-products" startIcon={<Storefront />} sx={{ color: 'white' }}>
            Products
          </Button>
          <IconButton
            size="large"
            aria-label={`show ${cartItemCount} new items in cart`}
            color="inherit"
            onClick={handleCartOpen}
            sx={{ ml: 2, color: 'white' }}
          >
            <Badge badgeContent={cartItemCount} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Box>
        {user ? (
          <Box sx={{ ml: 2 }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar alt={user.name} src={user.profileImage || 'path/to/default/avatar.png'} sx={{ width: 32, height: 32 }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
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
              <MenuItem disabled>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{user.name}</Typography>
              </MenuItem>
              <Divider />
              {user.role === 'Admin' && (
                <MenuItem onClick={handleAdminClick}>
                  <ListItemIcon>
                    <AdminPanelSettings fontSize="small" />
                  </ListItemIcon>
                  Admin
                </MenuItem>
              )}
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Box sx={{ ml: 2 }}>
            <Button component={Link} to="/login" startIcon={<AccountCircle />} sx={{ color: 'white' }}>
              Login
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
