import React from 'react';
import { AiFillCheckCircle, AiFillCheckSquare } from 'react-icons/ai';
import styled from '@emotion/styled';

type ChkMakrType = 'circle' | 'Square';

interface ChkMarkProps {
  type?: ChkMakrType;
  size?: number;
  checked?: boolean;
  customColor?: string;
}

const ChkMarkWrap = styled.div``;

export const ChkMark = ({
  type = 'Square',
  size = 24,
  checked,
  customColor,
}: ChkMarkProps) => {
  return (
    <ChkMarkWrap>
      {type === 'circle' ? (
        <AiFillCheckCircle
          size={size}
          fill={customColor || (checked ? '#2f80ed' : '#e0e0e0')}
        />
      ) : (
        <AiFillCheckSquare
          size={size}
          fill={customColor || (checked ? '#2f80ed' : '#e0e0e0')}
        />
      )}
    </ChkMarkWrap>
  );
};
