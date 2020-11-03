import React from 'react'
import {
  Box,
} from '@chakra-ui/core'

import Header from '../../componets/Header'
import Footer from '../../componets/Footer'
import InfoMeetup from './components/InfoMeetup'
import NextMeetup from './components/NextMeetup'
import AboutMeetup from './components/AboutMeetup'
import Members from './components/Members'
import PastMeetup from './components/PastMeetup'

const Home = () => (
    <Box id="wrapper">
      <Header />

      <InfoMeetup />
      <NextMeetup />
      <AboutMeetup />
      <Members />
      <PastMeetup />

      <Footer />
    </Box>
)

export default Home
