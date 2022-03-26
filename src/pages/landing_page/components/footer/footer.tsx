import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import top from './../../../../assets/top_back/topBack.png';


export default function Footer(){
    return (<footer>
        <Box sx={{ 
            backgroundColor:'#050D1A',  
            color:'#EEF1F5', 
            paddingTop: '10vh',
            }}>
            <Container maxWidth='lg'>          
                <Grid container spacing={5}>

                    <Grid item xs={12} sm={3}>
                        <Box >
                            <Typography variant='h5' sx={{ fontWeight: 'bold ' }} color='white' >
                            HARIVIDEO
                            </Typography>
                            <Typography
                            mt={3} 
                            color='#EEF1F5' 
                            fontFamily='Roboto'
                            fontWeight='300'
                            fontSize='16px'>harivideo@hv.co</Typography>
                             <Typography
                            mt={3} 
                            color='#EEF1F5' 
                            fontFamily='Roboto'
                            fontWeight='300'
                            fontSize='16px'>+62 123 456 789 10</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={2}>
                      <Box sx={{ fontWeight: 'bold', fontFamily: 'Poppins', fontSize: '18px' }} >About</Box>
                      <Box sx={{  paddingTop: '10px' }}>
                        <Link sx={{ textDecoration: 'none', fontFamily: 'Poppins', fontSize: '18px', fontWeight: '300px' }} href="/" color="inherit">About Us</Link>
                      </Box>
                      <Box sx={{  paddingTop: '10px' }}>
                        <Link sx={{ textDecoration: 'none', fontFamily: 'Poppins', fontSize: '18px'  }} href="/" color="inherit">Features</Link>
                      </Box>
                      <Box sx={{  paddingTop: '10px' }}>
                        <Link sx={{ textDecoration: 'none', fontFamily: 'Poppins', fontSize: '18px'  }} href="/" color="inherit">News</Link>
                      </Box>
                    </Grid>

             
                    <Grid item xs={12} sm={2}>
                      <Box sx={{ fontWeight: 'bold', fontFamily: 'Poppins', fontSize: '18px' }} >Company</Box>
                      <Box sx={{  paddingTop: '10px' }}>
                        <Link sx={{ textDecoration: 'none', fontFamily: 'Poppins', fontSize: '18px', fontWeight: '300px' }} href="/" color="inherit">Why HARIVIDEO?</Link>
                      </Box>
                      <Box sx={{  paddingTop: '10px' }}>
                        <Link sx={{ textDecoration: 'none', fontFamily: 'Poppins', fontSize: '18px', fontWeight: '300px' }} href="/" color="inherit">Partner With Us</Link>
                      </Box >
                      <Box sx={{  paddingTop: '10px' }}>
                        <Link sx={{ textDecoration: 'none', fontFamily: 'Poppins', fontSize: '18px', fontWeight: '300px' }} href="/" color="inherit">FAQ</Link>
                      </Box>
                    </Grid>
              

                    <Grid item xs={12} sm={2}>
                      <Box sx={{ fontWeight: 'bold', fontFamily: 'Poppins', fontSize: '18px' }} >Support</Box>
                      <Box sx={{  paddingTop: '10px' }}>
                        <Link sx={{ textDecoration: 'none', fontFamily: 'Poppins', fontSize: '18px', fontWeight: '300px' }} href="/" color="inherit">Account</Link>
                      </Box>
                      <Box sx={{  paddingTop: '10px' }}>
                        <Link sx={{ textDecoration: 'none', fontFamily: 'Poppins', fontSize: '18px', fontWeight: '300px' }} href="/" color="inherit">Support Center</Link>
                      </Box>
                      <Box sx={{  paddingTop: '10px' }}>
                        <Link sx={{ textDecoration: 'none', fontFamily: 'Poppins', fontSize: '18px', fontWeight: '300px' }} href="/" color="inherit">Contact US</Link>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                      <Box mb={5} ml={7}>
                          <IconButton size='small' arial-label="top" >
                            <img src={top} alt="top" />
                          </IconButton>
                      </Box>
                      <Box ml={5}>
                      <IconButton sx={{ color:'white' }} arial-label="twiter-icon">
                            <TwitterIcon />
                        </IconButton>
                        <IconButton sx={{ color:'white' }} arial-label="facebook-icon">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton sx={{ color:'white' }} arial-label="instagram-icon">
                            <InstagramIcon />
                        </IconButton>
                        <IconButton sx={{ color:'white' }} arial-label="youtube-icon">
                            <YouTubeIcon />
                        </IconButton>
                        </Box>  
                    </Grid>

                </Grid>
                <Grid item xs={12} sm={3}>
                <Box sx={{ paddingTop: '10vh', }}>
                       <Typography
                            fontSize='14px'
                            fontWeight='bold' 
                            mt={9}>
                                &copy; 2022 HARIVIDEO. All rights reserved.
                        </Typography>
                      </Box>
                </Grid>
            </Container>
        </Box>
      
    </footer>);
}