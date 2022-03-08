import React from 'react'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import arrow from '../../../../../assets/img_arrow_button_content/arrow.png'
import gps from '../../../../../assets/informasiIcons/gps.png'
// import book from '../../../../../assets/informasiIcons/book.png'
// import clock from '../../../../../assets/informasiIcons/clock.png'
// import medal from '../../../../../assets/informasiIcons/medal.png'


const data = [
    {
        img: 'informasiIcons/gps.png' ,
        title: 'Access Anywhere',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et neque, erat pulvinar platea. Sapien nunc nec mauris nullam nisi. Tellus, tincidunt a eget at integer in. '
    },
    {   img: 'informasiIcons/clock.png',
        title: 'Flexible Time',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et neque, erat pulvinar platea. Sapien nunc nec mauris nullam nisi. Tellus, tincidunt a eget at integer in. '
    },
    {
        img: 'informasiIcons/medal.png',
        title: 'Certificate',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et neque, erat pulvinar platea. Sapien nunc nec mauris nullam nisi. Tellus, tincidunt a eget at integer in. '
    },
    {   img: 'informasiIcons/book.png',
        title: 'Class Program Options',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et neque, erat pulvinar platea. Sapien nunc nec mauris nullam nisi. Tellus, tincidunt a eget at integer in. '
    }

]



const Informasi = () => {
  return (
    <Box
    sx={{
        display: 'flex',
        flexDirection: {md:'row', sm:'column', xs:'column'},
        marginTop:'50px'
    }}
    >
      
      
    
     
       <CardContent
        sx={{
           width:{md:'100%', sm:'100%'},
           textAlign:{xs:'center', md:'left'}

       }} >
            <Typography
            variant='h4'
            color='#04756F'
            fontFamily='poppins'
            fontSize='36px'
            fontWeight='bold'
            mb={2}
            >
            Why online <br />
            learning method?
            </Typography>

            <Typography
            fontFamily='nunito'
            fontWeight='bold'
            fontSize='22px'
            color='#4C4C4C'
            >
            Studying online teaches important time management skils, which make easier for you to find a good work
            study balance
            </Typography>

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
        }

      }}
      endIcon={<Box
      component="img"
      src={arrow}
      ></Box>}
      >Join Us Today</Button>
       </CardContent>





     <Box 
     sx={{
         display: 'flex',
         flexWrap: 'wrap',
        marginTop:{md:'0px', sm:'50px', xs:'60px'},
        width:{md:'180%', sm:'100%'},
        paddingLeft:{md:'150px', sm:0},
      
         
     }}
     >
      
     {data.map(e => {
         return (
             <>
             <CardContent
             sx={{
                 maxWidth:{md:'80%', sm:'100%', xs:'100%', lg:'37%'},
                 marginRight:{md:6, sm:0},
         
               
               
             }}
             >
                 <Typography
                 fontFamily='poppins'
                 fontSize='22px'
                 fontWeight={700}
                 marginBottom={2}
                 >
                 <Box
                 component='img'
                 src={e.img}
                 width='40px'
                 marginRight="6px"
                 marginBottom={-2}
                 >

                 </Box>
                  {e.title}
                 </Typography>
                 <Typography
                 fontFamily='nunito'
                 fontWeight={600}
                 fontSize='20px'
                 color='#4C4C4C'
                 >
                  {e.text}
                 </Typography>
             </CardContent>
             </>
         )
     })}


     </Box>

    </Box>
  )
}

export default Informasi