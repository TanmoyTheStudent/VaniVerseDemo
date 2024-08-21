import React from 'react';
import { Box, Typography, Avatar, Grid } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Logo from "../../../required-data/assests/image/vaniverse-logo.png"


const ContactCard = () => {
  return (
    
    <Box
      sx={{
        backgroundColor: '#10347b',
        color: '#fff',
        padding: '2rem',
        borderRadius: '10px',
        width: '90%',
        //margin: 'auto',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#6EC4E8',
          borderRadius: '50%',
          width: '200px',
          height: '200px',
          position: 'absolute',
          top: '-100px',
          left: '-100px',
        }}
      />
      <Box
        sx={{
          backgroundColor: '#1a1a1a',
          borderRadius: '50%',
          width: '100px',
          height: '100px',
          position: 'absolute',
          top: '-50px',
          left: '50px',
        }}
      />
      <Typography variant="h4" gutterBottom sx={{ marginTop: '1rem',marginBottom:"2rem" }}>
        Reach Us
      </Typography>
      <Avatar
        alt="Contact"
        src={Logo}
        sx={{
          width: '100px',
          height: '100px',
          margin: '0 auto 1rem',
        }}
      />
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <PhoneIcon />
        </Grid>
        <Grid item>
          <Typography>+91-929292929</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <EmailIcon />
        </Grid>
        <Grid item>
          <Typography>vaniandverse@gmail.com</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <LocationOnIcon />
        </Grid>
        <Grid item>
          <Typography>Kolkata-700050</Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          borderTop: '1px solid #6EC4E8',
          marginTop: '1rem',
          paddingTop: '1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography>@vaniverse.in</Typography>
      </Box>
    </Box>
    
  );
};

export default ContactCard;
