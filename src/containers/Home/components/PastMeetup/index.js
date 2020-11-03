import React from "react";

import { Box, Text, Button, Heading, Divider } from "@chakra-ui/core";

const PastMeetup = () => {
  return (
    <Box id="past-meetup">
      <Heading>Past Meetups</Heading>
      <Box>
        <Box>
          <Box>
            <Text>Text value</Text>
            <Text>Text value</Text>
            <Text>Text value</Text>
            <Button>Button text</Button>
            <Divider borderColor="blackAlpha.500" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PastMeetup;
