import React from 'react'

import { Text } from "@chakra-ui/core";

import './index.css'


const MeetupThumbnails = ({ items }) => (
  <>
    {items.length ? (
      <>
        {items.map((item, index) => <Text className="merah" key={index}>{item.title}</Text>)}
      </>
    ) : (
      <Text>No Meetups</Text>
    )}
  </>
)

MeetupThumbnails.defaultProps = {
  items: []
}

export default MeetupThumbnails
