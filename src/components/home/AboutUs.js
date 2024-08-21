import { Divider } from '@mui/material'
import { Container,Typography,Grid,Button,Card,CardActions } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Image from "../../required-data/assests/image/profilePic.jpeg"
import ContactCard from './sub-components/ContactCard';

function AboutUs() {
  return (
    <div className='m-5'>
        <Divider
          sx={{
            backgroundColor: 'blue', // Sets the color of the divider
            height: '5px',           // Adjust the thickness of the divider
            margin: '10px 0px',        // Optional: adds margin around the divider
          }}/>
        <h1 className='d-flex flex-column align-items-center justify-content-center' style={{color:"#643cca"}}>Founder</h1>
        <Divider
          sx={{
            backgroundColor: 'blue', 
            height: '5px',           
            margin: '10px 0px'
        }}/>
        
       <Container style={{marginBottom:"100px"}}>
        <Grid container spacing={0}  justifyContent="center" style={{margin:"20px"}}>
        <Grid item sm={12} md={6} lg={6}  style={{ display: 'flex', justifyContent: 'center' }}>
                  <Card sx={{ width: '100%',height:"100%", padding: '20px', margin: '10px',border: 'none',
                  boxShadow: 'none'}} align="center" >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="auto"
                        image={Image}
                        alt="services image"
                        style={{borderRadius:"50%"}}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                         
                        </Typography>
                      </CardContent>
                   </CardActionArea>
                   
               </Card>
              </Grid>
               <Grid item sm={12} md={6} lg={6}  style={{ display: 'flex', justifyContent: 'center' }}>
               <Card sx={{ width: '100%',height:"100%", padding: '10px', margin: '10px',
                border: 'none',
                boxShadow: 'none'
               }} 
               align="center" style={{padding:"10px",marginBottom:"20px"}}>
                    <CardActionArea>
                     
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Mr. Agarwal
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                         IIT Bombay
                        </Typography>
                      </CardContent>
                   </CardActionArea>
                   
               </Card>

            </Grid>
            </Grid>
            </Container>

    <div style={{marginBottom:"300px"}}>
        <Divider
          sx={{
            backgroundColor: 'blue', // Sets the color of the divider
            height: '5px',           // Adjust the thickness of the divider
            margin: '10px 0px',        // Optional: adds margin around the divider
          }}/>
        <h1 className='d-flex flex-column align-items-center justify-content-center' style={{color:"#643cca"}}>Our Mission</h1>
        <Divider
          sx={{
            backgroundColor: 'blue', 
            height: '5px',           
            margin: '10px 0px'
        }}/>


        
          <p style={{margin:"30px",fontFamily:"Georgia",marginTop:"80px"}}>Almost 90% of Indian Population are missing out on Social, Educational and Financial Opportunities because of the Language barrier. Only 0.1% content on the Internet is in Indian native languages. According to NASSCOM Report 2021, one of the main challenges Indian Enterprises face in order to serve majority of Indian consumers is the Language Barrier across non-English speaking regions (90% population). <br/><br/>

What is needed is an AI Powered interface where individuals can communicate effectively using their own native language in Real-Time. With this interface one can interact in their own native language with natives of any other language seamlessly. To Learn and Enhance their knowledge, people will be able to access any content in any language on the Internet directly in their native language.</p>
        

        </div>

        <div style={{marginBottom:"300px"}}>
        <Divider
          sx={{
            backgroundColor: 'blue', // Sets the color of the divider
            height: '5px',           // Adjust the thickness of the divider
            margin: '10px 0px',        // Optional: adds margin around the divider
          }}/>
        <h1 className='d-flex flex-column align-items-center justify-content-center' style={{color:"#643cca"}}>Our Vision</h1>
        <Divider
          sx={{
            backgroundColor: 'blue', 
            height: '5px',           
            margin: '10px 0px'
        }}/>

        <div>
          <p>
          India is a diverse country where in every 5km one can see changes in the dialect and language used for communication. Most of these languages are linked with the regional culture and have a rich literature. Technology is progressing at a very rapid pace, but to use these technologies, one has to understand English as most of the technical content are available only in English. 90% of the Indian population are missing out these opportunities. Our vision is to build a communication layer which makes language a medium of communication instead of playing a role of a barrier.

Nowadays, anyone can learn and teach themselves any skills using online content available on the Internet, given that they know English. What if everyone were able to watch and read any content on the Internet directly in their Native Language in real-time. Rural India will have access to excellent quality educational lectures and courses for their intellectual growth.

If people are able to communicate directly in their native language, where each person can talk in their native language and the other person hears a translated version in their Native Language in real-time, lots of communication issues will be resolved. It will have a tremendous impact on social life and employability of people.
          </p>
        </div>
 </div>

 <div style={{marginBottom:"300px"}}>
        <Divider
          sx={{
            backgroundColor: 'blue', // Sets the color of the divider
            height: '5px',           // Adjust the thickness of the divider
            margin: '10px 0px',        // Optional: adds margin around the divider
          }}/>
        <h1 className='d-flex flex-column align-items-center justify-content-center' style={{color:"#643cca"}}>Our Collaborations/Testimony</h1>
        <Divider
          sx={{
            backgroundColor: 'blue', 
            height: '5px',           
            margin: '10px 0px'
        }}/>
        <div></div>

        </div>

        
        <Divider
          sx={{
            backgroundColor: 'blue', // Sets the color of the divider
            height: '5px',           // Adjust the thickness of the divider
            margin: '10px 0px',        // Optional: adds margin around the divider
          }}/>
        <h1 className='d-flex flex-column align-items-center justify-content-center' style={{color:"#643cca"}}>Our Contact</h1>
        <Divider
          sx={{
            backgroundColor: 'blue', 
            height: '5px',           
            margin: '10px 0px'
        }}/>
        <div className='col-12 mt-5 d-flex flex-column align-items-center justify-content-center' style={{ marginTop:"60px" }}>
        <ContactCard/>
        </div>
    </div>
  )
}

export default AboutUs