import React from 'react';
import { Drawer, Box, Typography, Button, List, ListItem, ListItemText, IconButton, TextField } from '@mui/material';
import { Close, Add, Remove } from '@mui/icons-material';

function Cart({ cart, open, onClose, onRemoveFromCart, onUpdateQuantity }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 350, p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Shopping Cart</Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
        <List>
          {cart.map((item) => (
            <ListItem key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <ListItemText primary={item.name} secondary={`₹${item.price}`} />
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton size="small" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                  <Remove />
                </IconButton>
                <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
                <IconButton size="small" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                  <Add />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => onRemoveFromCart(item.id)} sx={{ ml: 2 }}>
                  <Close />
                </IconButton>
              </Box>
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: 2, textAlign: 'right' }}>
          <Typography variant="h6">Total: ₹{total}</Typography>
          <Button variant="contained" sx={{ mt: 2 }}>Checkout</Button>
        </Box>
      </Box>
    </Drawer>
  );
}

export default Cart;
