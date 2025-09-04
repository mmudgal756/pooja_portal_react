import React from 'react';
import { Drawer, Box, Typography, Button, List, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton, Divider, Paper } from '@mui/material';
import { Close, Add, Remove, DeleteOutline } from '@mui/icons-material';
import { useCart } from '../context/CartContext';

function Cart({ open, onClose }) {
  const { cart, onRemoveFromCart, onUpdateQuantity } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Paper sx={{ width: 380, p: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Shopping Cart</Typography>
          <IconButton onClick={onClose} aria-label="close cart">
            <Close />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 2 }} />
        {cart.length === 0 ? (
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="body1" color="text.secondary">Your cart is empty</Typography>
          </Box>
        ) : (
          <List sx={{ flexGrow: 1, overflowY: 'auto' }}>
            {cart.map((item) => (
              <ListItem key={item.id} disablePadding sx={{ mb: 2 }}>
                <ListItemAvatar>
                  <Avatar src={item.imageUrl} alt={item.name} variant="rounded" sx={{ width: 64, height: 64, mr: 2 }} />
                </ListItemAvatar>
                <Box sx={{ flexGrow: 1 }}>
                  <ListItemText 
                    primary={item.name} 
                    primaryTypographyProps={{ fontWeight: 'bold', mb: 0.5 }}
                    secondary={`₹${item.price}`}
                  />
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <IconButton size="small" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                      <Remove fontSize="small" />
                    </IconButton>
                    <Typography sx={{ mx: 2, fontWeight: 'bold' }}>{item.quantity}</Typography>
                    <IconButton size="small" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                      <Add fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
                <IconButton edge="end" aria-label="delete" onClick={() => onRemoveFromCart(item.id)}>
                  <DeleteOutline />
                </IconButton>
              </ListItem>
            ))}
          </List>
        )}
        <Box sx={{ mt: 'auto', pt: 2, borderTop: '1px solid #e0e0e0' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Subtotal:</Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>₹{total.toFixed(2)}</Typography>
          </Box>
          <Button variant="contained" fullWidth sx={{ py: 1.5, textTransform: 'none', fontSize: '1rem' }}>
            Proceed to Checkout
          </Button>
        </Box>
      </Paper>
    </Drawer>
  );
}

export default Cart;
