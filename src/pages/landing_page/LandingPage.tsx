import React from 'react'
import Container from '@mui/material/Container'
import Appbar from './components/header/appbar/Appbar'
import Jumbotron from './components/header/jumbotron/jumbotron'
import FootHeader from './components/header/footheader/FootHeader'
import InformasiClass from './components/content/informasi/Informasi'
import Box from '@mui/material/Box'
const LandingPage = () => {
  return (
    <React.Fragment>
        <Appbar />
        <Jumbotron />
        <FootHeader />
        
        <Box
        sx={{
          width:'90%',
          margin:'auto',
      

        }}
        >
         <InformasiClass />
        </Box>

        

    </React.Fragment>
  )
}

export default LandingPage