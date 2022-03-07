import React from 'react'
import Appbar from './components/appbar/Appbar'
import Jumbotron from './components/jumbotron/jumbotron'
import FootHeader from './components/footheader/FootHeader'
const LandingPage = () => {
  return (
    <React.Fragment>
        <Appbar />
        <Jumbotron />
        <FootHeader />
    </React.Fragment>
  )
}

export default LandingPage