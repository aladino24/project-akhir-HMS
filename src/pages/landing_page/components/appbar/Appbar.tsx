import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import './appbar.css'


const pages = ["Home", "Course", "Coaches", "Blog", "About"];

const Appbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
 return (
    <AppBar position='static' sx={{shadow: '0px', bgcolor: "#04756F"}} elevation={0}>
       <Container>
           <Toolbar>
             <Typography
             variant='h6'
             noWrap
             component="h6"
             sx={{mr:2, display:{xs:"flex", md: "flex"}, fontSize:{md:'30px', xs:'18px'}}}
             fontFamily='Work Sans'
             fontStyle="bold"
             fontWeight='800px'
             
             >
              HARIVIDEO
             </Typography>

             <Box sx={{display:{xs:"none", md: "flex"}, margin:"auto"}}>
               {
                   pages.map(page => {
                       return (
                       <>
                         {/* <Button
                         key={page}
                         sx={{ my: 2, color: 'white', display: 'block', ml:2, fontStyle:'normal', opacity:0.8}}
                         variant='text'
                         >
                        
                         {page}
                         
                         </Button> */
                         
                         <a className='anchors' href='#'>{page}</a>
                         
                         }


                       </>
                       
                       )
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

             <Box sx={{flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent:'flex-end'}}>
             <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
             </Box>
           </Toolbar>
       </Container>
    </AppBar>
  )
}

export default Appbar