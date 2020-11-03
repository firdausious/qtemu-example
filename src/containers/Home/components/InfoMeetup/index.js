import React from "react";

import { Box, Image, Text, Button } from "@chakra-ui/core";

const InfoMeetup = () => {
  return (
    <Box id="info-meetup" display="flex">
      <Box width="20%" textAlign="left" alignItems='"center"'>
        <Image
          height="100px"
          width="100px"
          src="https://i1.sndcdn.com/avatars-000589154457-u2cvrc-t500x500.jpg"
        />
      </Box>
      <Box width="80%">
        <Text>Hacktiv8 Meetup</Text>
        <Text>Location Jakrta Indonesia</Text>
        <Text>Member 100</Text>
        <Text>Organizers Adhi W</Text>
        <Button>Join Us</Button>
      </Box>
    </Box>
  );
};

export default InfoMeetup;
