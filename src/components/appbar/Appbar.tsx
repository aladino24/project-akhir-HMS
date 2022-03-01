import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'


const pages = ["Home", "Course", "Coaches", "Blog", "About"];

const Appbar = () => {
  
  return (
    <AppBar position='static' sx={{shadow: '0px', bgcolor: "#04756F"}} elevation={0}>
       <Container>
           <Toolbar>
             <Typography
             variant='h6'
             noWrap
             component="h6"
             sx={{mr:2, display:{xs:"flex", md: "flex"}}}
             >
              HARIVIDEO
             </Typography>

             <Box sx={{display:{xs:"none", md: "flex"}, margin:"auto"}}>
               {
                   pages.map(page => {
                       return (<>
                         <Button
                         key={page}
                         sx={{ my: 2, color: 'white', display: 'block', ml:2}}
                         >
                         {page}
                         </Button>
                       </>)
                   })
               }
             </Box>

             <Box sx={{display:{xs:"none", md:"flex"}, marginRight: 2}}>
                <Button  sx={{color: 'white'}}>Sign up</Button>
                <Button
                variant="contained"
                sx={{marginLeft:2, color:'white', bgcolor:'#FF6A28'}}
                >
                    Sign in
                </Button>
             </Box>
           </Toolbar>
       </Container>
    </AppBar>
  )
}

export default Appbar