import { servicesInHomePage } from "../../../required-data/object-data/servicesInHome";
import { Link } from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import { Container,Typography,Grid,Button,Card,CardActions,Paper } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const design={
    padding: 2,
    textAlign: 'center',
    position: 'relative',
    margin: 2,
    //marginLeft:5,
    //marginRigt:5,
    backgroundColor: '#f3f1ee',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    '&::after': {
      content: '""',
      display: 'block',
      width: '100%',
      height: '3px',
      backgroundColor: '#008080',
      position: 'absolute',
      bottom: 0,
      left: 0,
    },
  }


function HomeServiceSlider() {
  return (
    <div style={{marginBottom:"50px"}}>
        <Paper 
      elevation={5} 
      sx={design}
    >
      <Typography variant="h4" style={{fontFamily:"Georgia",wordSpacing: '0.2em'}}>
        OUR SERVICES 
      </Typography>
    </Paper>
    



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
      <Carousel controls={false} interval={2000} style={{ width: "98%",background:'linear-gradient(to right, #23d6d4, #0a3758)',borderRadius:"20px" }}>
      
       
        {servicesInHomePage.map((slide, index) => (
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
      <Button
            variant="contained"
            sx={{
              backgroundColor: '#07145f', // Blue background color
              borderRadius: '20px',       // Rounded corners
              '&:hover': {
                backgroundColor: '#7038b7', // Darker blue on hover
              },
            }}
            component={Link}
            to={slide.link}
            target="_blank" 
            rel="noopener noreferrer"
          >
            View More
    </Button>
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

      <div>
      {/* Your existing content */}
      <Grid container spacing={3} justifyContent="center" style={{ marginTop: '20px',marginBottom:"30px" }}>
        <Grid item xs={12} sm={6} md={6} lg={3} >
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: '#07145f', // Blue background color
              borderRadius: '20px',       // Rounded corners
              '&:hover': {
                backgroundColor: '#0056b3', // Darker blue on hover
              },
            }}
            component={Link}
            to="/our-services"
          >
            Explore More
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: '#07145f',
              borderRadius: '20px',
              '&:hover': {
                backgroundColor: '#0056b3',
              },
            }}
            component={Link}
            to="/contact-us"
          >
            Contact Us
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: '#07145f',
              borderRadius: '20px',
              '&:hover': {
                backgroundColor: '#0056b3',
              },
            }}
            component={Link}
            to="/message-us"
          >
            Message Us
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: '#07145f',
              borderRadius: '20px',
              '&:hover': {
                backgroundColor: '#0056b3',
              },
            }}
            component={Link}
            to="/register-yourself"
          >
            Register with Us
          </Button>
        </Grid>
      </Grid>
    </div>

    </div>
  )
}

export default HomeServiceSlider