import React from "react";

import {
  Box,
  Text,
  Heading,
  Avatar,
} from '@chakra-ui/core'

const Members = () => {
  return (
    <Box id="members">
      <Heading>Members</Heading>
      <Box>
        <Box display="flex">
          <Avatar />
          <Box>
            <Text>Organizers</Text>
            <Text>Adhy Wiranata 4 Others</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Members;
