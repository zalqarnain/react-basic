import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Button variant="contained" color="success">
              Home
            </Button>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Link to="/laptops">
              <Button variant="contained" color="warning">
                Laptops
              </Button>
            </Link>
            <Link to="/mobiles">
              <Button variant="contained" color="primary">
                Mobiles
              </Button>
            </Link>
            <Link to="/tablets">
              <Button variant="contained" color="error">
                Tablets
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="contained" color="info">
                Cart
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
