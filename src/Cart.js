import React from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';

function Cart(props) {
    const {cart, removeFromCart}=props
    return (
        <Container sx={{ marginTop: 4 }}>
    <Typography variant="h4" gutterBottom>
      Shopping Cart
    </Typography>
    {cart.length > 0 ? (
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <Button
              variant="contained"
              color="secondary"
              onClick={() => removeFromCart(item.id)}
              style={{ marginLeft: '8px' }}
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
    ) : (
      <Typography variant="body1">Your cart is empty</Typography>
    )}
  </Container>
    );
}

export default Cart;