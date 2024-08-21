import { useState } from 'react';
import CoveredLaguages from '../services/CoveredLanguages'
import { Container,Typography,Grid,Button,Card,CardActions,Divider,Dialog,DialogContent,DialogActions,DialogTitle } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import EarnImage2 from "../../required-data/assests/image/earn2.jpeg"
import MessageForm from './MessageForm';
import { earnData } from '../../required-data/object-data/earnData';
import { Link } from 'react-router-dom';

function Participate() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

        <Container style={{marginBottom:"100px"}}>
        <Grid container spacing={0}  justifyContent="center" style={{margin:"20px"}}>
        <Grid item sm={12} md={6} lg={6}  style={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ width: '100%',height:"100%", padding: '10px', margin: '10px'}} align="center" style={{padding:"10px",marginBottom:"20px"}}>
                    <CardActionArea>
                     
                      <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                          Participate and Earn
                        </Typography>
                        <Typography variant="h6" 
                            style={{fontFamily:"Georgia"}}  
                        >
                      If you are good at your native language, and have a good community connection, you can participate in our on-going activities. By providing your service, you will able to earn based on the activity. Here no age, or gender barrier is there, all sections of people can participate and earn. It is an easy and transparent program.
                        </Typography>
                      </CardContent>
                   </CardActionArea>
                   </Card>
              </Grid>
               <Grid item sm={12} md={6} lg={6}  style={{ display: 'flex', justifyContent: 'center' }}>
                   <Card sx={{ width: '100%',height:"100%", padding: '20px', margin: '10px'}} align="center" >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={EarnImage2}
                        alt="services image"
                        style={{ borderRadius: "20px", width: '100%', height: 'auto' }}
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          Source:AI-generated
                        </Typography>
                      </CardContent>
                   </CardActionArea>
                   
               </Card>
                </Grid>
                </Grid>
     </Container>



     <div  style={{
  minHeight: "500px",   // Minimum height of 500px
  height: 'auto',       // Let the height adjust based on content
  maxHeight: "2500px",  
  width: '99%',
  //background: 'linear-gradient(to right, #23d6d4, #0a3758)',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: '10px',       // Added some padding for spacing
  margin: "10px auto",   // Centered the div horizontally
  overflowY: "auto" ,     // Allow vertical scrolling if content overflows
  background:'linear-gradient(to right, #4c00ff, #1b1464)'
}}>

    <Container style={{marginBottom:"50px"}}>
      
        <Typography variant='h3' align='center' style={{margin:"20px",color:"white",fontWeight: 'bold',fontFamily:"cursive"}}>
              Activities in which you can participate
        </Typography>
        <Divider
          sx={{
            backgroundColor: 'white', 
            height: '5px',           
            margin: '10px 0px'
        }}/>

<Typography variant='h6' align='center' style={{margin:"20px",color:"white",fontWeight: '',fontFamily:"cursive"}}>
       In our data annotation program we would initiate multiple activities based on the need of the project. If you are eligible, you can participate in those activities, and can earn money accordingly. Some of the common activities currently going on are mentioned below. Once again it is mentioned that the activities would change based on the need of the project.        
  </Typography>
        
        <Grid container spacing={5}  justifyContent="center" style={{marginTop:"20px"}}>
          {
            earnData.map((ele,i)=>{
              return(
                <Grid item sm={12} md={6} lg={4} key={i} style={{ display: 'flex', justifyContent: 'center' }}>
                  <Card sx={{ maxWidth: 345 }} align="center" style={{padding:"10px",marginBottom:"20px"}}>
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {ele.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
           {ele.description}
          </Typography>
                      </CardContent>
                   </CardActionArea>
                   
               </Card>
  
            </Grid>
              )
            })
          }

<Button
            variant="contained"
            sx={{
              backgroundColor: '#07145f',
              borderRadius: '20px',    
              border: '2px solid gold', 
              '&:hover': {
                backgroundColor: '#7038b7', // Darker blue on hover
              },
            }}
            style={{marginTop:"40px"}} 
            onClick={handleClickOpen}
           
       >
            Languages We Are Working Now
    </Button>
     
     
        </Grid>
        
      </Container>
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
     
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Covered Languages</DialogTitle>
        <DialogContent>
          <CoveredLaguages />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
   
    </div>
  )
}

export default Participate