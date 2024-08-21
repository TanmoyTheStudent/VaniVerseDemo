import { useState } from 'react';
import { Container,Grid,Box, Typography ,Card,CardActionArea,Tab} from '@mui/material';
import CoveredLaguages from "./CoveredLanguages"
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import STT1 from './sub-components/STT1';
import STT2 from './sub-components/STT2';
import STT3 from './sub-components/STT3';
import MessageForm from '../home/MessageForm';
import ContactUs from '../home/ContactUs';

const tabDesign={
  fontWeight: 'bold', 
  fontSize: {
    xs: '1.25rem',  
    sm: '1.5rem', 
    md: '1.5rem'
  },
  mx: {
    xs: 1,       
    sm: 2,       
    md: 3,       
    lg: 4
  }
}

const tabDesign2 = {
  color: "white", // Default color
  fontWeight: 'bold',
  marginTop:"20px",
  fontSize: {
    xs: '1rem',
    sm: '1rem',
    md: '1.25rem'
  },
  mx: {
    xs: 0.5,
    sm: 1,
    md: 2,
    lg: 4
  },
  '&.Mui-selected': {
    color: 'yellow', // Text color when selected (active)
  
  }
};


function ProvidingPlatform() {
  const [value, setValue] = useState('1');
  const [value2, setValue2] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  return (
    <div>
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
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          High-quality Audio / Speech / Voice Datasets to Train Your Conversational AI Model
        </Typography>
        <Typography variant="subtitle1" sx={{ marginTop: 2,textAlign: 'center' }}>
          Voice / Speech / Audio Datasets in multiple Indian languages to start your automatic speech recognition (ASR) models
        </Typography>
      </Box>
      
    </Box>

<div style={{margin:"10px",marginTop:"50px"}}>

<Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab label="STT Solution" value="1"  sx={tabDesign} />
            <Tab label="Use-Cases" value="2"  sx={tabDesign}  />
          </TabList>
        </Box>
        <TabPanel value="1"><STT1/></TabPanel>
        <TabPanel value="2"><STT2/></TabPanel>
      </TabContext>
    </Box>

</div>
<div style={{background:"blue"}}>
<Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value2}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange2} aria-label="lab API tabs example" centered>

            <Tab label={
            <>
                Our Approach to
                <br />
                Collect Data   
            </>} 
            value="1" 
             sx={tabDesign2} />

            <Tab 
            label={
            <>
                Our Successful
                <br />
                Journey    
            </>}
            value="2"  
            sx={tabDesign2} 
             />
          </TabList>
        </Box>
        <TabPanel value="1"><STT3/></TabPanel>
        <TabPanel value="2"><CoveredLaguages/></TabPanel>
      </TabContext>
    </Box>
  
</div>

<div style={{marginTop:"40px"}}>

    <Container>
        <Grid container spacing={0}  justifyContent="center" style={{margin:"20px"}}>
        
               <Grid item sm={12} md={10} lg={10}  style={{ display: 'flex', justifyContent: 'center' }}>
               <Card sx={{ width: '100%',height:"100%", padding: '10px', margin: '10px',
                border: 'none',
                boxShadow: 'none'
               }} align="center" >
                   <MessageForm/>
               </Card>

            </Grid>
            </Grid>
            </Container>
    </div>

    </div>
  )
}

export default ProvidingPlatform