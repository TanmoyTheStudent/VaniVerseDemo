import { sttProcess } from "../../../required-data/object-data/stt-process";
import { Link } from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import { Container,Typography,Grid,Button,Card,CardActions,Paper } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';




function STT3() {
  return (
    <div style={{marginBottom:"50px"}}>
       
<div style={{
      height: "80vh",
      minHeight: "500px",   // Minimum height of 500px
      maxHeight: "1000px",  
      width: '97%',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: '0px',
      margin:"10px",
     overflow: "hidden" 
    }}>
      <Carousel controls={false} interval={2000} style={{ width: "98%",background:'linear-gradient(to right, #4c00ff, #1b1464)',borderRadius:"20px" }}>
      
       
        {sttProcess.map((slide, index) => (
          <Carousel.Item key={index} style={{ width: '100%', maxHeight: '100%',padding: '0px' }} >
            
           <Grid container spacing={0}  justifyContent="center" style={{marginBottom:"0px"}}>
           <Grid item xs={12} sm={9} md={10} lg={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', padding:"2%",marginBottom: "0px" }}>
  <Typography
    gutterBottom
    variant="h2"
    component="div"
    sx={{
      margin: "2%",
      color: 'white',
      fontSize: {
        xs: '2rem',  // 0px - 600px
        sm: '2.5rem',  // 600px - 960px
        md: '3rem',    // 960px - 1280px
        lg: '3.5rem',    // 1280px - 1920px
        xl: '4rem',    // 1920px and above
      },
      display: 'block',  // Ensure Typography is displayed as a block element
       textAlign: 'center'
    }}
  >
    {slide.title}
  </Typography>

  <Typography
    variant="body"
    sx={{
      //margin:"2%",
      color: 'white',
      fontSize: {
        xs: '1rem',   // 0px - 600px
        sm: '1rem',     // 600px - 960px
        md: '1.25rem',   // 960px - 1280px
        lg: '1.25rem',   // 1280px - 1920px
        xl: '1.5rem',   // 1920px and above
      },
      display: 'block',  // Ensure Typography is displayed as a block element
      margin: '10px',  // Optional: Add some space between the title and description
      textAlign: 'center',  
    }}
  >
    {slide.description}
  </Typography>
 
</Grid>


            


            
              <Grid item xs={12} sm={9} md={8} lg={6} style={{ display: 'flex', justifyContent: 'center',padding:"2%" }}>
               
                <Card sx={{ width: '80%',height:"80%", padding: '10px', margin: '0px',border: 'none',boxShadow: 'none'}} align="center" >
                  <CardMedia
                    component="img"
                    height="100%"
                    image={slide.image}
                    alt={slide.title}
                    style={{ borderRadius:"10px" }}
                  />
                </Card>
              </Grid>
              </Grid>
            
          </Carousel.Item>
        ))}
        
     
      </Carousel>
      </div>

      

    </div>
  )
}

export default STT3