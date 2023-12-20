// Home.js

import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderItem({ title, imageUrl }) {
  return (
    <Paper>
      <img src={imageUrl} alt={title}  style={{ width: '100%', height: 'auto', maxHeight: '700px' }} />
      <Typography variant="h6" align="center">
        {title}
      </Typography>
    </Paper>
  );
}

function Home(props) {
  const slideshowItems = [
    { id: 1, title: 'Mobile', imageUrl: 'https://www.hotjoomlatemplates.com/images/blog/aspect_ratio/image_phone1.jpg' },
    { id: 2, title: 'Laptop', imageUrl: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 3, title: 'iPad', imageUrl: 'https://www.popsci.com/uploads/2022/10/24/377A4824.jpg?auto=webp&width=800&crop=16:10,offset-x50' },
    { id: 4, title: 'Laptop', imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D' },
    { id: 5, title: 'Tablet', imageUrl: 'https://mynexttablet.com/wp-content/uploads/2022/06/lenovo-tab-p12-pro-1024x576.jpg' },

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000,
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        E-Commerce Electronic Store
      </Typography>

      <Slider {...settings}>
        {slideshowItems.map((item) => (
          <SliderItem key={item.id} title={item.title} imageUrl={item.imageUrl} />
        ))}
      </Slider>
    </Container>
  );
}

export default Home;
