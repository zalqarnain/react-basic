import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

function Home(props) {
    return (
        <Container sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          E-Commerce Electronic Store
        </Typography>
      </Container>
    );
}

export default Home;