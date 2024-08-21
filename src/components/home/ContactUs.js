import React from 'react';
import { Box, Typography, Avatar, Grid } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Logo from "../../required-data/assests/image/vaniverse-logo.png"
import MessageForm from './MessageForm';
import ContactCard from './sub-components/ContactCard';

const ContactUs = () => {
  return (
    <div className=''>
       <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(to right, #4c00ff, #1b1464)', // Adjust the gradient colors
        height:"500px",
        padding: 4,
        color: 'white',
      }}
    >
      <Box sx={{ maxWidth: '100%',margin:10,padding:2,alignItems:'center' }}>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', textAlign: '' }}>
          Contact Us
        </Typography>
        <Typography variant="subtitle1" sx={{ marginTop: 2,textAlign: '' }}>
        Tell us how we can help with your next AI initiative – Our team is here to help you .
        </Typography>
      </Box>
      
    </Box>
    <div className='row'>
      <div className='col-12 col-lg-6  d-flex flex-column align-items-center justify-content-center' style={{ height: '100%',marginTop:"100px" }}>
        <ContactCard/>
    </div>
    <div className='col-12 col-lg-6 mt-5 d-flex flex-column align-items-center justify-content-center' style={{ height: '' }}>
   
    <MessageForm/>

          
        </div>
    </div>
    </div>
  );
};

export default ContactUs;
