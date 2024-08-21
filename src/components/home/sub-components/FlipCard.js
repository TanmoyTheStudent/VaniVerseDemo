import React from 'react';
import { Card, CardMedia, Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import "./flipCard.css";

const FlipCard = ({ title, image, link }) => {
  return (
    <Box
      className="card-container"
      sx={{
        width: { xs: '80%', sm: '300px', md: '250px' }, // Adjust the width based on screen size
        height: { xs: '60vw', sm: '300px', md: '350px' }, // Adjust the height based on screen size
        maxWidth: '100%', // Ensure the card doesn't exceed its container's width
        margin: '10px auto', // Center the card with auto margin
        perspective: '1000px', // Optional: Adds 3D perspective for the flip effect
      }}
    >
      <div className="card-flip" style={{ position: 'relative', height: '100%' }}>
        {/* Front of the Card */}
        <Card
          className="card-front"
          sx={{
            position: 'relative',
            height: '100%',
            borderRadius: '10px',
            overflow: 'hidden', // Ensure the image and text don't overflow the card
            backgroundColor:"#0f0e6b"
          }}
        >
          {/* <CardMedia
            component="img"
            alt={title}
            image={image}
            title={title}
            sx={{
              height: '100%',
              objectFit: 'cover', // Ensures the image covers the entire area
            }}
          /> */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.0)', // Optional: Add a semi-transparent background for better readability
              padding: '10px 20px',
              borderRadius: '5px',
              textAlign: 'center',
              width: '80%', // Adjust text container width to be responsive
            }}
          >
            <Typography variant="h6" component="div" sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },fontFamily:"Georgia" }}>
              {title}
            </Typography>
          </Box>
        </Card>

        {/* Back of the Card */}
        <div className="card-back" style={{ position: 'absolute', top: '0', left: '0', height: '100%', width: '100%', backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#07145f', // Blue background color
              borderRadius: '20px',       // Rounded corners
              padding: { xs: '8px 16px', sm: '10px 20px', md: '12px 24px' }, // Responsive padding
              fontSize: { xs: '0.75rem', sm: '1rem', md: '1.25rem' }, // Responsive font size
              '&:hover': {
                backgroundColor: '#7038b7', // Darker blue on hover
              },
            }}
            component={Link}
            to={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View More
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default FlipCard;
