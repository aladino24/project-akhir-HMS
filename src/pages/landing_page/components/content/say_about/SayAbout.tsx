
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Cards from './Cards'


const data = [
  { id:1,
    text:'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis molestie quisque dictumst proin magna a penatibus. Sit aliquam luctus ornare netus quis nunc”',
    img: 'assetSayAbout/boy1.png'
  },
  { id:2,
    text:'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis molestie quisque dictumst proin magna a penatibus. Sit aliquam luctus ornare netus quis nunc”',
    img: 'assetSayAbout/boy2.png'
  },
  {  id:3,
    text:'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis molestie quisque dictumst proin magna a penatibus. Sit aliquam luctus ornare netus quis nunc”',
    img: 'assetSayAbout/girl.png'
  },
]

const SayAbout = () => {
  return (
    <Box
    textAlign="center"
    marginTop="80px"
    
    >
        <Typography
        color='#04756F'
        fontFamily='poppins'
        fontSize='48px'
        fontWeight='bold'
        >
        What our happy Students <br/>
        say about us
        </Typography>
         <Box
         sx={{
           display: {md:'flex', sm:'none'},
           justifyContent: 'space-between',
         }}
         >

         {
           data.map(e => {
             return(
               <Cards text={e.text} img={e.img}/>
             )
           })
         }
         </Box>

         <Box
         sx={{
           display: {md:'none', sm:'flex', justifyContent:'center'},
         }}
         >

         {
           
            data.map(e => {

              if(e.id === 1){

                return(
                  <Cards text={e.text} img={e.img}/>
                )
              }
            })
           
           
         }
         </Box>
        
    </Box>
  )
}

export default SayAbout