import React from "react";

import { Box, Button, Heading, Divider } from "@chakra-ui/core";

import MeetupThumbnails from '../../../../components/MeetupThumbnails'

const meetupData = [
  { title: '#39 JakartaJS April Meetup' },
  { title: '#39 JakartaJS April Meetup' },
  { title: '#39 JakartaJS April Meetup' }
]

const PastMeetup = () => {
  return (
    <Box id="past-meetup">
      <Heading>Past Meetups</Heading>
      <Box>
        <Box>
          <Box>
            <MeetupThumbnails items={meetupData} />
            <Button>Button text</Button>
            <Divider borderColor="blackAlpha.500" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PastMeetup;
