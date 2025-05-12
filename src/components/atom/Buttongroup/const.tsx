import React from 'react';
import { FiCircle, FiGrid, FiList } from 'react-icons/fi';

export const options1 = [
  { value: 'Leading', content: 'Leading' },
  { value: 'Middle', content: 'Middle' },
  { value: 'Trailing', content: 'Trailing' },
];

export const options2 = [
  {
    value: 'First',
    content: (
      <>
        <FiCircle size={15} style={{ marginRight: 5 }} />
        FIRST
      </>
    ),
  },
  {
    value: 'Second',
    content: (
      <>
        <FiCircle size={15} style={{ marginRight: 5 }} />
        SECOND
      </>
    ),
  },
  {
    value: 'Third',
    content: (
      <>
        <FiCircle size={15} style={{ marginRight: 5 }} />
        THIRD
      </>
    ),
  },
];

export const options3 = [
  { value: 'list', content: <FiList size={20} /> },
  { value: 'grid', content: <FiGrid size={20} /> },
];
