import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
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
        width: '100%',
        height:'378px', 
        bgcolor:'#04756F',
        borderRadius: '25px', 
        marginTop: '250px', 
        marginBottom: '50px',
        paddingLeft:"40px",
        boxShadow:'border-box'
    }}
    >
       
      <Box 
    //   textAlign='center'
      paddingTop= '50px'
      width='50%'

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
          display='flex'
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
            marginRight:'100px',
           color:'white',
           fontSize:'18px', 
           fontFamily:'poppins'
          
        }}>SUBSCRIBE</Button>

          </Box>
        
         
        
      </Box>



    </Box>
  )
}

export default JoinUs