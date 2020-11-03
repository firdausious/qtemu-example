import React from "react";

import { Box, Text, Heading } from "@chakra-ui/core";

const NextMeetup = () => {
  return (
    <Box id="next-meetup">
      <Heading>Next Meetups</Heading>
      <Box>
        <Box>
          <Heading size="md">Awesome Meetup and event</Heading>
        </Box>
        <Text>03 November 2020</Text>
        <Text>describion</Text>
      </Box>
    </Box>
  );
};

export default NextMeetup;
