import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import women from './../../../../../assets/subscribe/women.png';
// import makeStyles from '@material-ui/core/styles'

// const useStyle = makeStyles({
//   button:{
//     '&hover':{
//       bgcolor:'#FF6A28'
//     }
//   }
// })
const JoinUs = () => {
  // const classes = useStyle()
  return (
    <Box
    sx={{
        display: {lg:'flex', md:'block', sm:'block', xs:'block'},
        justifyContent: 'space-between',
        width: '97%',
        height: {lg:'420px', md:'40%'},
        bgcolor:'#04756F',
        borderRadius: '25px', 
        marginTop: '300px', 
        marginBottom: '50px',
        paddingLeft:"40px",
        boxShadow:'border-box'
    }}
    >
       
      <Box 
    //   textAlign='center'
      paddingTop= '50px'
      width='50%'
      paddingBottom= '50px'

      >
         <Typography
         variant='h1'
         color='white'
         fontWeight='bold'
         fontFamily='poppins'
         fontSize='34px'
         >
         Are You Ready To Learn, Join Us
         </Typography>
         
         <Typography
         fontFamily='poppins'
         color='white'
         fontWeight='medium'
         fontSize='18px'
         marginTop='30px'
         >
         In case you interested with our services, we will let you to stay up to date
         by sending latest update from us.
         </Typography>
        
          <Box
          sx={{ display: {sm:'block',lg:'flex', xs:'flex', md:'flex'} }}
          justifyContent='space-between'
          marginTop='50px'
          
        
          >
          <TextField variant='outlined' 
        sx={{
            bgcolor:'white',
            borderRadius:'5px',
            width:'60%', 
            // marginTop:'30px',
        
        }} 
        
        />
        
        <Button
      //  className={classes.button}
        sx={{
            bgcolor:'#FF6A28',
            marginRight:{sm:'70px', lg:'190px', md: '70px'},
           color:'white',
           fontSize:{sm:'15px',lg:'18px',md:'16px'}, 
           fontFamily:'poppins'
          
        }}>SUBSCRIBE</Button>

          </Box>        
        
      </Box>

      <Box
         component='img'
         width='460px'
         height='740px'
         position='relative'
         top={-157}
         sx={{
             top:{lg:-180, md:5, sm:5, xs:5,},
             width:{lg:'480px', md:'460px', xs:'320px'},
             height:{lg:'600px', md:'535.7px', xs:'373.84px'},             
         }}
         src={women}
         ></Box>

    </Box>
  )
}

export default JoinUs