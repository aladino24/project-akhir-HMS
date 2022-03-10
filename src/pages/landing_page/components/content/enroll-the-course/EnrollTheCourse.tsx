import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Cards from './Cards'
import Button from '@mui/material/Button'
import arrow from '../../../../../assets/img_arrow_button_content/arrow.png'

const data = [
    {
     icon:'assetEnroll/people.png',
     title:'Sign Up', 
     text:'Start registering to our account, to create your student profile'
    },
    {
        icon:'assetEnroll/zoom.png',
        title:'Find a Course', 
        text:'find the best courses and teachers for you to study'
    },
    {
        icon:'assetEnroll/tebeng.png',
        title:'Pay Securely', 
        text:'Pay safely and easily using existing banks'
    },
    {
        icon:'assetEnroll/rocket.png',
        title:'Enjoy Your Class', 
        text:'Enjoy your class and start learning a new thing'
     },


    
]


const EnrollTheCourse = () => {
  return (
      <React.Fragment>
    <Box
    width="100%"
    paddingTop="100px"
    sx={{
        textAlign:{md:"left", xs:"center"}
    }}
    
    >
        <Typography
        variant='h1'
        color='#04756F'
        fontFamily='poppins'
        fontSize='48px'
        fontWeight='bold'
        sx={{
            fontSize:{md:'48px', xs:'28px'}
        }}
        >
          It’s Easy To Enroll The Course
        </Typography>
    </Box>

       <Box
       sx={{
           display:'flex',
           paddingTop:'90px',
           justifyContent: {md:'space-between', xs: 'center'},
           flexDirection:{md:'row', xs:'column'}
       }}
       >
    
      {data.map(e => {
          return(
            <Cards 
            icon={e.icon}
            title={e.title}
            text={e.text}
            />
          )
      })}
        

       </Box>
       
<Box
sx={{
    display: 'flex',
    justifyContent: {md:'flex-start', xs: 'center'},
    paddingTop:'80px'
}}
>
       <Button
      variant="contained"
      sx={{
        bgcolor:'#04756F',
        color: 'white',
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
        },
        
        

      }}
      endIcon={<Box
      component="img"
      src={arrow}
      ></Box>}
      >Join Us Today</Button>
</Box>
    </React.Fragment>
  )
}

export default EnrollTheCourse