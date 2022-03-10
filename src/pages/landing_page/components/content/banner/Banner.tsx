import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import men from '../../../../../assets/assetBanner/men.png'
import trophy from '../../../../../assets/assetBanner/trophy.png'
const Banner = () => {
  return (
    <React.Fragment>
        <Box
        sx={{
            display: 'flex',
            width: {lg:'100%', md:'100%', sm:'460px', xs:'460px'},
            height:{lg:'378px', md:'378px', sm:'900px', xs:'900px'},
            flexDirection:{lg:'row', md:'row', sm:'column-reverse', xs:'column-reverse'},
            justifyContent:{lg:'center', md:'center', sm:'center', xs:'center'},
            borderRadius:'25px', 
            bgcolor:'#04756F',
            marginTop:'230px', 
            marginBottom:'400px',

        }}
        >
     
         <Box
         component='img'
         width='460px'
         height='535.7px'
         position='relative'
         top={-157}
         sx={{
             top:{lg:-157, md:-157, sm:152, xs:152,},
             width:{lg:'460px', md:'460px', xs:'320px'},
             height:{lg:'535.7px', md:'535.7px', xs:'373.84px'},
             
             
             
         }}
         src={men}
         ></Box>

          <Box
          sx={{
              display: 'flex',
              height: {lg:'100%', md:'40%'},
              paddingTop:'150px',
              boxSizing: 'border-box',
              textAlign:'center',
              justifyContent: 'center'
          }}
          >
            <Typography
            fontFamily='poppins'
           
            color='white'
            fontWeight='bold'
            sx={{
                fontSize:{lg:'36px', md:'18px',sm:'24px', xs:'24px'},
                zIndex:{lg:0, md:1, sm:1, xs:1},
            }}
         
            >
                OUR <b style={{color:'#FDD835'}}>BEST TEACHER</b>  Who Are Angaged Their Fields
            </Typography>
           
          </Box>
          <Box
            component='img'
            src={trophy}
            width='240px'
            height='240px'
            position='relative'
            bottom='-137px'
            right="10px"
            sx={{
                display:{lg:'flex', md:'none', xs:'none'}
            }}
            ></Box>
        </Box>
    </React.Fragment>
  )
}

export default Banner