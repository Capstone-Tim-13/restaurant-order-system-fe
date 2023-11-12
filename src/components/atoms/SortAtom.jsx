import React from 'react';
import { Select } from '@mantine/core';

const data = [
  {
    value: 'A to Z',
    label: 'A to Z',
  },
  {
    value: 'Short by Date',
    label: 'Short By Date',
  },
];

export default function SortAtom(props) {
  const { sortByName, sortByDate } = props;

  const handleShort = (value) => {
    value === 'A to Z' ? sortByName() : sortByDate();
  };

  return (
    <>
      <Select
        onChange={(value) => handleShort(value)}
        placeholder="Short By"
        data={data}
        className={`w-36 border border-orange bg-white pl-2 rounded-md`}
        variant="unstyled"
        styles={(theme) => ({
          item: {
            // applies styles to selected item
            '&[data-selected]': {
              '&, &:hover': {
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.orange[9] : theme.colors.orange[1],
                color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[9],
                border: theme.colorScheme === 'dark' ? '1px solid #E25E3E' : '1px solid #E25E3E',
              },
            },

            // applies styles to hovered item (with mouse or keyboard)
            '&[data-hovered]': {},
          },
        })}
      />
    </>
  );
}
