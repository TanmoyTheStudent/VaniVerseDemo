import React, { useState } from 'react';
import { TextField, Button, Box, Grid, Typography, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const MessageForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission logic, such as sending the data to a server.
    console.log('Form Data:', formData);
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '2rem',
        border: 'none',
        //boxShadow: 'none',
        boxShadow: 1,
        borderRadius: 2,
        backgroundColor: '#fff'
      }}
    >
      <Typography variant="h4" gutterBottom>
        Get in touch
      </Typography>
      <Link href="mailto:vanianverse@gmail.com" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <EmailIcon sx={{ mr: 1 }} />
        vanianverse@gmail.com
      </Link>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              fullWidth
              required
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: '1rem', padding: '0.75rem 2rem' }}
          fullWidth
        >
          SEND MESSAGE
        </Button>
      </form>
    </Box>
  );
};

export default MessageForm;
