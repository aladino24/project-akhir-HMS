import React from 'react'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


interface PropsCard {
  icon: string;
  title: string;
  text: string;
}


const Cards = (props: PropsCard) => {
  return (
    <Card
    sx={{
      background:'linear-gradient(90deg, #E6E9F0 0%, #EEF1F5 100%)',
      width:'280px',
      height:'230px', 
      borderRadius:'25px',
      margin:'auto',
      marginTop:'10px'
    }}
    >
     
      <Box
      display='flex'
      marginTop='30px'
      
      >
        <Box
        component='img'
        src={props.icon}
        width='60px'
        marginLeft='20px'
        ></Box>


      <Typography
      color='#04756F'
      fontFamily='poppins'
      fontSize='18px'
      fontWeight='bold'
      lineHeight='60px'
      marginLeft='20px'
      >
      {props.title}
      </Typography>

      </Box>
     
     <Box
     width='80%'
     marginLeft='20px'
     marginTop='20px'
     >
      <Typography
      fontFamily='nunito'
      fontSize='16px'
      fontWeight='bold'
      color='#4C4C4C'
      >
     {props.text}
      </Typography>
      </Box>

    </Card>
  )
}

export default Cards