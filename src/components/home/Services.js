import { Container,Typography,Grid,Button,Card,CardActions } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

import { servicesData } from '../../required-data/object-data/serviceData'

import FlipCard from './sub-components/FlipCard';
import "./sub-components/services.css"

function Services() {
  return (
    <>
   
    {/* <div>
      <Container maxWidth="lg" style={{backgroundColor:"red"}}>
        <Typography variant='h4' align='center' style={{marginTop:"30px",color:"blue"}}>
              Our Offered Services are as follows-
        </Typography>
        <Grid container spacing={5}  justifyContent="center" style={{marginTop:"20px"}}>
          {
            servicesData.map((ele,i)=>{
              return(
                <Grid item sm={12} md={6} lg={3} key={i} style={{ display: 'flex', justifyContent: 'center' }}>
                  <Card sx={{ maxWidth: 345 }} align="center" style={{padding:"10px",marginBottom:"20px"}}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="100%"
                        image={ele.image}
                        alt="services image"
                        style={{borderRadius:"5px"}}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {ele.title}
                        </Typography>
                       
                      </CardContent>
                   </CardActionArea>
                   <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                      <Button variant="contained" size="medium"  >
                        <Link className='text-light' to={ele.link}>
                            Explore More..
                         </Link>
                       </Button>
                   </CardActions>
               </Card>
  
            </Grid>
              )
            })
          }
        </Grid>
      </Container>
      </div> */}

      <div className="animated-div" style={{
  minHeight: "500px",   // Minimum height of 500px
  height: 'auto',       // Let the height adjust based on content
  maxHeight: "1500px",  
  width: '99%',
  //background: 'linear-gradient(to right, #23d6d4, #0a3758)',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: '10px',       // Added some padding for spacing
  margin: "10px auto",   // Centered the div horizontally
  overflowY: "auto"      // Allow vertical scrolling if content overflows
}}>
  <Grid container spacing={2} justifyContent="center" style={{ width: '100%', maxHeight: 'inherit' }}>
    {servicesData.map((service, index) => (
      <Grid item key={index} xs={12} sm={6} md={6} lg={3} 
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: "2%", marginBottom: "0px" }}>
        <FlipCard title={service.title} image={service.image} link={service.link} />
      </Grid>
    ))}
  </Grid>
</div>


  <div style={{margin:"30px",marginTop:"75px",marginBottom:"75px"}}>
      <h3 style={{color:"blue"}}>Our Services Include-</h3>
      <br/>
     <h5> A.	We offer a comprehensive suite of data curation in Indian languages tailored for various AI applications, including:</h5><br/>
<b>•	Audio Recording:</b> Extempore audio recording based on the requirements of language, dialect, gender, age of the speaker and the recording environment of the audio.<br/>
<b>•	Text to Speech: </b>Audio recording of the written text based on the requirements of language, dialect, gender, age of the speaker and the recording environment of the audio.<br/>
<b>•	Speech to Text:</b> Transcription of audio into accurate, readable text.<br/>
<b>•	Text to Text:</b> Comprehensive text curation and enhancing and translating text for various applications.<br/>
<b>•	Audio Verification:</b> Ensuring integrity and authenticity of audio data.<br/>
<b>•	Audio Segmentation:</b> Dividing audio into meaningful segments for analysis.<br/>
<b>•	Image Annotations: </b>Detailed image data annotations.<br/>
<b>•	Data Creation: </b>We meticulously curate custom datasets in both audio and text to ensure accuracy and relevance for your AI models <br/>
<b>•	NLP Services:</b> implementing Natural Language Processing solutions to meet specific project requirements. <br/><br/><br/>
<h5>B.	We also offer a robust platform where you can host and manage your own data curation projects, streamlining your workflow and enhancing productivity.</h5>
</div>

    </>
  )
}

export default Services