import React from 'react'
import Container from '@mui/material/Container'
import Appbar from './components/header/appbar/Appbar'
import Jumbotron from './components/header/jumbotron/jumbotron'
import FootHeader from './components/header/footheader/FootHeader'
import InformasiClass from './components/content/informasi/Informasi'
import ExploreComponent from './components/content/explore-top-class/Explore'
import EnrollTheCourse from './components/content/enroll-the-course/EnrollTheCourse'
import Banner from './components/content/banner/Banner'
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
         <ExploreComponent />
         <EnrollTheCourse />
         <Banner />
        </Box>

        

    </React.Fragment>
  )
}

export default LandingPage