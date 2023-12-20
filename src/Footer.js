// Footer.js

import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        marginTop: 4,
        padding: 2,
        backgroundColor: "#f0f0f0", 
        textAlign: "center",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Link to="/">
            <Button variant="text" color="primary">
              Home
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/laptops">
            <Button variant="text" color="primary">
              Laptops
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/mobiles">
            <Button variant="text" color="primary">
              Mobiles
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/tablets">
            <Button variant="text" color="primary">
              Tablets
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/cart">
            <Button variant="text" color="primary">
              Cart
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Company Name. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
