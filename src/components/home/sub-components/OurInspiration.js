import { useState } from 'react';
import { Container,Typography,Grid,Button,Card,CardActions,Paper,Dialog, DialogContent } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Map from "../../../required-data/assests/image/Map.jpg"

const design={
    padding: 2,
    textAlign: 'center',
    position: 'relative',
    margin: 2,
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

function OurInspiration() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <div style={{marginBottom:"50px"}}>
        <Paper 
      elevation={5} 
      sx={design}
    >
      <Typography variant="h4" style={{fontFamily:"Georgia",wordSpacing: '0.2em'}}>
        OUR INSPIRATION 
      </Typography>
    </Paper>

    <Container >
        <Grid container spacing={0}  justifyContent="center" style={{marginBottom:"4%"}}>
        <Grid item sm={12} md={6} lg={6}  style={{ display: 'flex', justifyContent: 'center' }}>
                  <Card sx={{ width: '100%',height:"100%", padding: '20px', margin: '10px'}} align="center" >
                    <CardActionArea onClick={handleClickOpen}>
                      <CardMedia
                        component="img"
                        height="500"
                        image={Map}
                        alt="map"
                        style={{borderRadius:"50px"}}
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                         Source: GOI (https://language.census.gov.in)
                        </Typography>
                      </CardContent>
                   </CardActionArea>
                   
               </Card>
              </Grid>
               <Grid item sm={12} md={6} lg={6}  style={{ display: 'flex', justifyContent: 'center' }}>
               <Card sx={{ width: '100%',height:"100%", padding: '10px', margin: '10px'}} align="center" style={{padding:"10px",marginBottom:"20px"}}>
                    <CardActionArea>
                     
                      <CardContent>
                        
                        <Typography variant="body" color="black" style={{fontFamily:"Georgia"}}>
                         India(Bharat) is a land of diversity. Langauage is a key elememt of this diversity. We have 22 scheduled languages, 121+ languages, and many dialects in India. <br/><br/>
                        As Indian we are proud for this diversity, but at the same time these many languages sometimes cause communication gap.For this reason, native people lag behind from development.We need to overcome  this issue. Not only that,in this globalised world some languages are losing its charm,can disappear soon. It is high time to preserve these languages.<br/><br/>
                        AI can help to solve these issues.With the implementation of NLP(Natural Language Processing), we can overcome the gap of communication among native speakers, as well as, we will able to preserve the native languages. For that we need a vast amount of various data of every Indian language, and this inspires us to start such work.
                        <br/><br/>
                        We have already collected large amount of required data of many Indian languages needed for NLP implementation.It is our vision to collect necessary data of all Indian languages and dialects required to implement NLP properly.

                      

                        </Typography>
                      </CardContent>
                   </CardActionArea>
                   
               </Card>

            </Grid>
            </Grid>
            </Container>

            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent>
          <CardMedia
            component="img"
            image={Map}
            alt="map"
            style={{ width: '100%' }}
          />
        </DialogContent>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </Dialog>
    </div>
    </div>
  )
}

export default OurInspiration