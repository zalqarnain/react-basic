import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Cart from './Cart';
import Home from './Home';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, { id: product.id, name: product.name, price: product.price }]);
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // Dummy product data
  const laptops = [
    { id: 1, name: 'HP Laptop', description: 'Powerful Performance, Sleek Design', price: 999.99 },
    { id: 2, name: 'Dell Laptop', description: 'Elegance in Every Click', price: 899.99 },
  ];

  
  const mobiles = [
    { id: 1, name: 'Samsung Mobile', description: 'Innovation in Hand', price: 299.99 },
    { id: 2, name: 'iPhone Mobile', description: 'Elegance in Innovation', price: 499.99 },
  ];

  const tablets = [
    { id: 1, name: 'Huawei Tablet', description: 'Power in Portability', price: 199.99 },
    { id: 2, name: 'Lenovo Tablet', description: 'Unleash Your Imagination', price: 299.99 },
  ];

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route
          path="/"
          element={<Home/>}
        />

        <Route
          path="/laptops"
          element={<ProductList products={laptops} addToCart={addToCart} />}
        />
        <Route
          path="/mobiles"
          element={<ProductList products={mobiles} addToCart={addToCart} />}
        />
        <Route
          path="/tablets"
          element={<ProductList products={tablets} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
