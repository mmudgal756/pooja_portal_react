import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
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
  const location = useLocation();

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
    <AppBar position="fixed" color="inherit" elevation={0} sx={{ backgroundColor: '#ffffffcc', borderBottom: '1px solid #e0e0e0' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#5c5cb0', display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                marginRight: '10px',
                backgroundColor: '#5c5cb0',
                mask: `url(${Logo}) no-repeat center / contain`,
                WebkitMask: `url(${Logo}) no-repeat center / contain`,
              }}
            />
            <span style={{ fontWeight: 'bold' }}>Puja Portal</span>
          </Link>
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button component={Link} to="/our-products" startIcon={<Storefront />} sx={{ color: '#5c5cb0', textTransform: 'none' }}>
            Our Products
          </Button>
          <IconButton
            size="large"
            aria-label={`show ${cartItemCount} new items in cart`}
            color="inherit"
            onClick={handleCartOpen}
            sx={{ ml: 2, color: '#5c5cb0' }}
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
              onClose={handleClose}>
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
          location.pathname !== '/login' && (
            <Box sx={{ ml: 2 }}>
              <Button component={Link} to="/login" startIcon={<AccountCircle />} sx={{ color: '#5c5cb0', textTransform: 'none' }}>
                Login
              </Button>
            </Box>
          )
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
