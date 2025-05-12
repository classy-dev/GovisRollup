import React from 'react';
import styled from '@emotion/styled';
import { COLOR } from '@ComponentFarm/token';

export interface ColorProps {
  bgColor: string;
  code?: number;
  hex?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.375rem;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  height: 12.75rem;
`;

const ColorPreview = styled.div<ColorProps>`
  height: 5rem;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
  background-color: ${props => COLOR[props.bgColor]};
`;

const Content = styled.div`
  padding: 0 10px;
  text-transform: uppercase;
  h3 {
    margin: 10px 0 5px;
  }
`;

export const Color = ({ color }: { color: ColorProps }) => {
  return (
    <Container>
      <ColorPreview bgColor={color.bgColor} />
      <Content>
        <h3>{color.bgColor}</h3>
        <p>{color.hex}</p>
      </Content>
    </Container>
  );
};
