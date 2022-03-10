import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import video from '../../../../../assets/video/video.png'
const Video = () => {
  return (
   <Box
   width='100%'
   textAlign='center'
   marginTop='100px'
   >
       <Typography
       variant='h1'
       color="#04756F"
       fontFamily='poppins'
       fontSize="48px"
       fontWeight='bold'
       sx={{
           fontSize:{lg:'48px',md:'38px',sm:'30px', xs:'24px'}
       }}
       >
       High Quality Video, Audio &amp; <br/>
       Live Classes
       </Typography>

        <Box
        width='100%'
        component='img'
        src={video}
        marginTop='50px'
        ></Box>       
   </Box>
  )
}

export default Video