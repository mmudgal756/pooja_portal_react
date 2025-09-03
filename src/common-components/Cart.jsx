import React from 'react';
import { Drawer, Box, Typography, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

function Cart({ cart, open, onClose, onRemoveFromCart }) {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 300, p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Shopping Cart</Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
        <List>
          {cart.map((item) => (
            <ListItem key={item.id} secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => onRemoveFromCart(item.id)}>
                <Close />
              </IconButton>
            }>
              <ListItemText primary={item.name} secondary={`₹${item.price}`} />
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
