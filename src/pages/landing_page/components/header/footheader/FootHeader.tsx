import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'



const values = [
  { rating:'3.6',
    text: 'Online Courses' 
  },
  { rating:'800+',
    text: 'Experienced Mentor' 
  },
  { rating:'4.2 M',
    text: ' Rating 	& Reviews' 
  },
  { rating:' 21 K',
    text: ' Active Students' 
  }

]




const FootHeader = () => {
  return (
    <Box
     sx={{
         width: '100%',
         height: {md:'23vh', xs:'50vh'},
         bgcolor: '#FF6A28',
         display: 'flex',
         justifyContent:'space-around',
         flexWrap:'wrap',
         gap:{sm:'50px', xs:'80px'}
         
     }}>


     {values.map(v => {
       return (
       <>
       
     <Box textAlign="center" sx={{height: '18vh', paddingTop:'1vh', boxSizing:'border-box'}}>
       <Typography 
       variant='h3'
       fontFamily='nunito'
       fontWeight='bold'
       color="white"
       sx={{
         fontSize:{md:'60px', xs:'28px'}
       }}
      
       >
           {v.rating}

       </Typography>
       <Typography
        fontFamily='nunito'
        color="white"
        
        fontWeight='700px'
        sx={{
          fontSize:{md:'30px', sm:'18px'}
        }}
        
       >
           {v.text}
       </Typography>
     </Box>

       
       
       </>
       
       )
     })}



    </Box>
  )
}

export default FootHeader