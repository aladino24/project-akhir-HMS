import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import text from '../../../../../assets/images_jumbotron/text.png'
import Button from '@mui/material/Button'
import arrow from '../../../../../assets/images_jumbotron/arrowButton.png'
import people from '../../../../../assets/images_jumbotron/people.png'
import fire from '../../../../../assets/pernik_jumbotron/fire.png'
import bell from '../../../../../assets/pernik_jumbotron/bell.png'
import calender from '../../../../../assets/pernik_jumbotron/calender.png'
import target from '../../../../../assets/pernik_jumbotron/target.png'
import tropi from '../../../../../assets/pernik_jumbotron/tropi.png'
import girl from '../../../../../assets/pernik_jumbotron/girl.png'
import boy from '../../../../../assets/pernik_jumbotron/boy.png'


const jumbotron = () => {
  return (
    <Box height='100%' width='100%' bgcolor='#04756F' pt={5} textAlign='center' mt={-1} >
        <Box
        component="img"
        sx={{
            height: 120,
            width: 670,
            display: 'flex',
            margin:'auto',
            maxWidth: {xs:430, md:670},
            maxHeight: {xs:70, md:120}
          }}

         alt="text" 
         src={text}
        >
        </Box>

       <Typography
       color="white"
       fontSize='20px'
       fontFamily='poppins'
       textAlign="center"
       width="600px"
       display="flex"
       margin="auto"
       mt={5}
       sx={{ 
           maxWidth:{xs:330, md: 600},
           fontSize:{xs:'13px', md:'20px'}
       }}
       >
        A solution for easy and flexible online learning, you can study
        anywhere through this platform
       </Typography>

      <Button
      variant="contained"
      sx={{
        bgcolor:'white',
        color: '#04756F',
        textTransform: 'none',
        width:260,
        height:67,
        fontSize:22,
        mt:5,
        borderRadius:'40px',
        fontFamily:'poppins',
        fontWeight:800,
        fontStyle: 'bold',
        hover:{
            bgcolor:'white'
        }

      }}
      endIcon={<Box
      component="img"
      src={arrow}
      ></Box>}
      >Join Us Today</Button>
       
       <Box sx={{paddingBottom:0}}>
        

        <Box bgcolor='rgba(255,255,255,0.3)' 
         sx={{
             width:'90px',
             borderRadius:'15px',
             position:'relative',
             top:{md:'260px', xs:'210px', sm:'280px'},
             right:{md:-780, xs:-310, sm:-430},

             
             
         }}
        >
            <Box
            component="img"
            sx={{
              width:{md:'90px', xs:'70px'}
            }}
            src={target}
            ></Box>

        </Box>

       <Box bgcolor='rgba(255,255,255,0.3)' width="80px"  borderRadius='13px' 
       sx={{
        position:'absolute',
        top:{md:'550px', xs:'400px'},
        right:{md:'300px', xs:'50px'}
        
       }}
       >
                 <Box 
                 component="img"
                 src={calender}
                 sx={{ 
                     width:'50px',
                  
                     
                 }}  
                 ></Box>
             </Box>

          <Box bgcolor='rgba(255,255,255,0.3)' width="60px" 
          sx={{
              borderRadius:'15px',
              position:'relative',
              top:{md:'10px', xs:'10px'},
              left:{md:'400px', xs:'40px'}
            }}
          >
            <img src={bell} width="40px" />
          </Box>




           <Box display="flex"  bgcolor='rgba(255,255,255,0.3)' 
            sx={{
               borderRadius:{md:'25px', xs:'15px'},
               position:'relative',
                top:{md:'200px', xs:'90px', sm:'200px'},
                left:{md:'360px', xs:'10px', sm:"80px"},
                width:{md:'240px', xs:'200px'}
               
              
               
               }}>
              <Box>
                  <Box
                  component='img'
                  src={fire}
                  sx={{
                      width:{md:'90px', xs:'70px'}
                  }}
                  ></Box>
             
              </Box>
              <Box display="flex">
              <Typography
              sx={{
                  textAlign:"center",
                  color:"white",
                  margin:'auto',
                  marginLeft:-2,
                 
              }}
              >
              Get 50% off in
              every course
              </Typography>
              </Box>
           </Box>
           <Box  
             bgcolor='rgba(255,255,255,0.3)'
             sx={{
               width:{md:'80px', xs:'80px'},
               borderRadius:'15px',
               position:'relative',
               top:{md:'300px', xs:'300px'},
               left:{md:'250px', xs:'80px', sm:'100px'}
             }}
             >
               <Box
               component='img'
               src={tropi}
               sx={{ 
                 width:'80px'
               }}
               ></Box>
             </Box>





            <Box
             display="flex" 
             bgcolor="rgba(255,255,255,0.3)"
             sx={{
               borderRadius:'15px',
               width:'220px',
               position:'relative',
               top:{md:'270px', xs:'200px'},
               left:{md:'850px', xs:'240px', sm:'430px'},

             }}
             >
              <Box 
              sx={{
                display:'flex',
                textAlign:'center'
              }}
              >
               
               <Box
               component='img'
               src={girl}
               width='60px'
               ></Box>
               
               <Box
               component='img'
               src={boy}
               width='60px'
               marginLeft='-15px'
               ></Box>

               </Box>

               <Box textAlign="center">
                  <Typography
                  sx={{
                    color: 'white', 
                    fontFamily:'nunito',
                    lineHeight:'180%',
                    marginLeft:'-10px'
                  }}
                  >
                  50K Students 
                  Learn Daily
                  </Typography>
               </Box>
            </Box>
          

           <Box component='div'>
           <img  src={people} style={{ display:'block', margin:'auto', width:400, marginTop:-200}}/>
           </Box>

       </Box>
    </Box>
  )
}

export default jumbotron