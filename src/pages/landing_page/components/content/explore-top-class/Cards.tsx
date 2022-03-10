import React from 'react'
import { makeStyles, styled } from '@mui/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'




const Carded = styled(Card)({
   background: 'linear-gradient(90deg, #DFE9F3 0%, #FFFFFF 100%)',
   width:'458px',
   height:'458px', 
   borderRadius:'25px',


})



interface PropsCard { 
  icon: string;
  discon: string;
  hargaAwal: string;
  hargaSekarang: string;
  title: string;
  text: string;
  avatar: string;
  name: string;
  rate: string;
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
}[];



const Cards = (props: PropsCard) => {
 
  return (
    <Carded>
       <Box 
       sx={{
         display: 'flex',
         marginTop:'20px',
         justifyContent: 'space-between'

       }}
       >
         
         <Box
         component='img'
         src={props.icon}
         width='95px'
         marginLeft='10px'
         sx={{
           width:{lg:'95px', md:'70px', xs:'90px'},
           height:{lg:'95px', md:'70px', xs:'100px'}
         }}
         ></Box>


         <Box 
         width='150px'
         marginRight='40px'
         marginTop='30px'
         textAlign='center'
         >
           <Box
           display='flex'
          
           justifyContent='space-between'
          
           >
              <Box
              bgcolor='#EC4F4F'
              textAlign='center'
              width='66px'
              height='28px'
              borderRadius='10px'

              >
                <Typography
                fontFamily='poppins'
                color='white'
                fontWeight='bold'
                fontSize='12px'
                lineHeight='28px'
                
                >
                {props.discon} OFF
                </Typography>

              </Box>  
              <Typography
              fontFamily='poppins'
              fontStyle='normal'
              fontWeight='bold'
              fontSize='12px'
              color='#A4A4A4'
              lineHeight='28px'
              sx={{
                textDecorationLine:'line-through'

              }}

              >
                Rp.{props.hargaAwal}
              </Typography>         
           </Box>
             <Typography
             variant='h1'
             fontFamily='poppins'
             fontWeight='bold'
             color='#000000'
             marginTop='10px'
             sx={{
              fontSize:{lg:'24px', md:'18px', xs:'24px'}
             }}
             >
               Rp.{props.hargaSekarang}
             </Typography>
         </Box>

         </Box>
  

         <Typography
         variant='h1'
         color='#04756F'
         fontFamily='poppins'
         fontWeight='bold'
         fontSize='28px '
         marginTop='45px'
         marginLeft='20px'
         sx={{
           fontSize:{lg:'28px', md:'20px', xs:'28px'}
         }}

         >
         {props.title}
         </Typography>

        <Box
        sx={{
          width:'70%',
          marginLeft:'20px',
          marginTop:'20px'
        }}
        >

      
         <Typography
         fontFamily='nunito'
         color='#6C6C6C'
         fontSize='24px'
         sx={{
           fontSize:{lg:'24px', md:'18px', xs:'24px'}
         }}

         >
        {props.text}
         </Typography>


         </Box>


         


         <Box
         display='flex'
         width='100%'
         height='90px'
         justifyContent='space-around'
         marginTop='28px'
        
         >
        
          <Box
          component='img'
         
          borderRadius='10px'
          sx={{
            width:{lg:'90px', md:'70px', xs:'90px'},
            height:{lg:'90px', md:'70px', xs:'90px'},
            lineHeight:'90px', 
            marginTop:{lg:'0px', md:'12px', xs:'0px'}
          }}
          src={props.avatar}
          ></Box>

           <Typography
           fontFamily='poppins'
           fontWeight={600}
           color='#1B2534'
           fontSize='20px'
           lineHeight='90px'
          sx ={{
            fontSize:{lg:'20px', md:'17px', xs:'20px'}
          }}
           >
           {props.name}
           </Typography>
     
           <Box display='flex' marginTop='30px' width='60px' justifyContent='space-between' sx={{paddingTop:{lg:0, md:'5px', xs:0}, marginRight:'20px'}} >
             <Box
             component='img'
             src='assetCard/star.png'
             width='28.12px'
             height='26.85px'
             sx={{
               width:{lg:'28.12px', md:'20.12px', xs:'28.12px'},
               height:{lg:'28.12px', md:'20.12px', xs:'28.12px'},
               
             }}
             ></Box>
           <Typography
           fontFamily='poppins'
           fontSize='20px'
           fontWeight='bold'
           color='#6C6C6C'
           sx={{
             fontSize:{lg:'20px', md:'17px', xs:'20px'}
           }}
           >
             {props.rate}
           </Typography>

           </Box>
         </Box>

    </Carded>
  )
}

export default Cards