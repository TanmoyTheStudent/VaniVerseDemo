import { Container,Typography,Grid,Button,Card,CardActions,Paper } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Background from "../../required-data/assests/image/background.jpeg"

import OurInspiration from "./sub-components/OurInspiration";
import HomeServiceSlider from "./sub-components/HomeServiceSlider";
import ParticipateAndEarn from "./sub-components/ParticipateAndEarn";

function Home() {
  
  return (
    <div className="">

<div style={{
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '500px',
   alignItems: 'center', // Centers vertically
  justifyContent: 'center',
  marginBottom:"50px",
  marginTop:"1%"
}}>

<Container style={{height:"100%"}}>
<Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{  textAlign: 'center',height:"100%" }}
    >
      <Grid item>
        <Card
         style={{height:"100%", 
            padding: '20px', 
            borderRadius: '15px', 
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)'}}>
     <Typography
        variant="h3"
        sx={{
          fontSize: {
            xs: '2.5rem',  // 0px - 600px
            sm: '3rem',  // 600px - 960px
            md: '4rem',  // 960px - 1280px
            lg: '4.5rem',  // 1280px - 1920px
            xl: '5rem',  // 1920px and above
          },
          margin: 2,
        }}
      >
        Data that speaks, Text that resonates
      </Typography>
      <Typography
       
        sx={{
          fontSize: {
            xs: '1.3rem',  // 0px - 600px
            sm: '2rem',  // 600px - 960px
            md: '2rem',  // 960px - 1280px
            lg: '2rem',  // 1280px - 1920px
            xl: '3rem',  // 1920px and above
          },
          marginBottom: 3,
        }}
      >
        Empower your AI model with meticulously curated speech and<br/> text data for Indian Languages
      </Typography>
      </Card>
      </Grid>
      
      </Grid>

      </Container>         

</div>

<OurInspiration/>
<HomeServiceSlider/>
<ParticipateAndEarn/>

</div>
  )
}

export default Home

