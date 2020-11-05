import React from 'react';
import { render } from '@testing-library/react';

import MeetupThumbnails from '../index'

test('renders successfull', () => {
  const renderer = render(<MeetupThumbnails />);

  expect(renderer).toBeDefined();
});

test('renders "no items" when items is empty', () => {
  const { getByText } = render(<MeetupThumbnails items={[]} />);
  const emptyElement = getByText(/no meetups/i);

  expect(emptyElement).toBeInTheDocument();
});

test('renders list meetup when available', () => {
  const data = [
    { title: '#39 JakartaJS April Meetup' },
    { title: '#39 JakartaJS April Meetup' },
    { title: '#39 JakartaJS April Meetup' }
  ]

  const renderer = render(<MeetupThumbnails items={data} />);

  expect(renderer.queryAllByText("#39 JakartaJS April Meetup")).toHaveLength(3);
});

