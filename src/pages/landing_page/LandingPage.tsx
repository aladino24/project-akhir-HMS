import React from 'react'
import Appbar from './components/header/appbar/Appbar'
import Jumbotron from './components/header/jumbotron/jumbotron'
import FootHeader from './components/header/footheader/FootHeader'
import InformasiClass from './components/content/informasi/Informasi'
import ExploreComponent from './components/content/explore-top-class/Explore'
import EnrollTheCourse from './components/content/enroll-the-course/EnrollTheCourse'
import Banner from './components/content/banner/Banner'
import Video from './components/content/video/Video'
import SayAbout from './components/content/say_about/SayAbout'
import JoinUs from './components/content/join-us/JoinUs'
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
         <Video />
         <SayAbout />
         <JoinUs />
        </Box>

        

    </React.Fragment>
  )
}

export default LandingPage