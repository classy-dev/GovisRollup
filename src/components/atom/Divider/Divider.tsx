import React from 'react';
import styled from '@emotion/styled';

const DividerWrap = styled.div`
  display: block;
  width: 100%;
  height: 1px;
  margin: 3.2rem 0;
  border-bottom: 1px solid var(--color-neutral90);
`;

export const Divider = () => {
  return <DividerWrap />;
};
