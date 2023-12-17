import React from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';

function ProductList(props) {
    const { products, addToCart } = props;
    return (
        <Container sx={{ marginTop: 4 }}>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Paper elevation={3} sx={{ borderRadius: 4, padding: 2 }}>

                            <Typography variant="h6" gutterBottom>
                                {product.name}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {product.description}
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                ${product.price}
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => addToCart(product)}
                            >
                                Add to Cart
                            </Button>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default ProductList;