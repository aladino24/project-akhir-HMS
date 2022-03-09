/* eslint-disable array-callback-return */
import React, {useState} from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Cards from './Cards'





const listButton = [
    { id:1, text:'Design'},
    { id:2, text:'Bussines'},
    { id:3,text:'Writing'},
    { id:4,text:'Health'},
    { id:5, text:'Animation'},
    { id:6, text:'Programing'},
    { id:7,text:'Marketing'},
    { id:8,text:'See all'},

]




const card = [
    {
        id:1,
        icon: 'assetCard/icons/figma.png',
        discon: '50%', 
        hargaAwal: '6000.000',
        hargaSekarang: '3000.000',
        title: 'UI/UX DESIGN',
        text: 'Prototype and UX Design for E-Commerce Apps',
        avatar: 'assetCard/avatar/boy1.png',
        name: 'Terry Carder',
        rate: '4.8'

    },
    {
        id:2,
        icon: 'assetCard/icons/gem.png',
        discon: '50%', 
        hargaAwal: '6000.000',
        hargaSekarang: '3000.000',
        title: 'UI/UX DESIGN',
        text: 'Prototype and UX Design for E-Commerce Apps',
        avatar: 'assetCard/avatar/girl.png',
        name: 'Marilyn Septimus',
        rate: '4.8'

    },
    {
        id:3,
        icon: 'assetCard/icons/ai.png',
        discon: '50%', 
        hargaAwal: '6000.000',
        hargaSekarang: '3000.000',
        title: 'Graphic Design',
        text: 'Prototype and UX Design for E-Commerce Apps',
        avatar: 'assetCard/avatar/boy2.png',
        name: 'Jaylon Baptista',
        rate: '4.8'

    }
]

const Explore = () => {
  const [page, setPage] = useState<number>(1)


  const plus: () => void = () => {
    
    if(page === card.length){
          setPage(page)
    }else if(page <= card.length){
        setPage(page + 1)
    }

   
  }

  
  const minus: () => void = () => {
    
   if(page > 1){
       setPage(page - 1)
   }else if(page === 1){
       setPage(1)
   }
   
  }

  return (
   <React.Fragment>
       <Box
       sx={{
           display:{xs:'flex', md:'block'},
           justifyContent:'space-between'
       }}
       >

      
       <Box
       sx={{
           textAlign:{lg:'left', md:'left', sm:'left', xs:'left' },
       }}
       >
     <Typography
     variant='h1'
     color='#04756F'
     fontFamily='poppins'
     fontWeight='bold'
     marginTop='50px'
     sx={{
         fontSize:{md:'48px', xs:'33px'}
     }}
     >
      Explore Top Courses
     </Typography>

       </Box>



     <Box
     display='flex'
     justifyContent='space-between'
     marginBottom='50px'

     >
       
         {listButton.map((e, index) => {

             if(e.id !== 8){
                return (
                    <Button
                    key={index}
                    variant='contained'
                    sx={{
                       bgcolor:'#EEF1F5',
                       color:'#6C6C6C',
                       width:'167, 14px',
                       heigth:'53px',
                       margin:'0px 6px 0px 6px',
                       textTransform:'none',
                       fontFamily:'poppins',
                       fontSize:{md:'18px', lg:'22px', sm:'16px'},
                       marginTop:'50px',
                       borderRadius:'10px',
                       display:{md:'flex', xs:'none'}
                    }}
                    >
                        {e.text}
                    </Button>
                     ) 
             }else if(e.id === 8){
                 return(
                    <Button
                    key={index}
                    variant='contained'
                    sx={{
                       bgcolor:'white',
                       color:'#04756F',
                       width:{md:'167, 14px'},
                       heigth:'53px',
                       margin:'0px 6px 0px 6px',
                       textTransform:'none',
                       fontFamily:'poppins',
                       fontSize:{md:'12px', lg:'22px', sm:'16px'},
                       marginTop:{md:'50px', lg:'50px', xs:'40px'},
                       borderRadius:'10px', 
                       borderColor:'#04756F',
                       border: '3px solid',
                       fontWeigth: 500,
                       fontStyle:'normal'
   
                    }}
                    >
                        {e.text}
                    </Button>
                 )
             }
             
            
         })}
        
       </Box>
     </Box>


     <Box
     sx={{
         display:{md:'flex', xs:'none'},
         justifyContent:'space-between'
        }}
        >
 {card.map(e => {
     return (

         <Cards 
         icon={e.icon}
         discon={e.discon}
         hargaAwal={e.hargaAwal}
         hargaSekarang={e.hargaSekarang}
         title={e.title}
         text={e.text}
         avatar={e.avatar}
         name={e.name}
         rate={e.rate}
         />
     )
 })}
     </Box>


  <Box
  sx={{
      display:{md:'none', xs:'flex'},
      justifyContent: 'center'
  }}
  >
   {card.map(e => { 
       if(e.id === page){
       return(
        <Cards 
        icon={e.icon}
        discon={e.discon}
        hargaAwal={e.hargaAwal}
        hargaSekarang={e.hargaSekarang}
        title={e.title}
        text={e.text}
        avatar={e.avatar}
        name={e.name}
        rate={e.rate}
        />
       )}
       })}   
       
      
  </Box>
       <Box
         width='100%'
         sx={{
             display:{md:'none', xs:'flex'},
             justifyContent: 'center'
         }}

       >
           <Button
           sx={{ 
               width:'20px',
               fontSize:'28px'
           }}
           onClick={minus}
           >&#60;</Button>
           <Button
           type='button'
             sx={{ 
                width:'20px',
                fontSize:'28px'
            }}
            onClick={plus}
           >&#62;</Button>
       </Box>


   </React.Fragment>
  )
}

export default Explore