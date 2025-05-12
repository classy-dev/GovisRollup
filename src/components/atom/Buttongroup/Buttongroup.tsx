import React, { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';

interface ButtonItem {
  value: string;
  content: React.ReactNode;
}

interface ButtonGroupProps {
  options: ButtonItem[];
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}
const Button = styled.button<{ isActive: boolean }>`
  display: inline-flex;
  align-items: center;
  height: 3.5rem;
  padding: 0 1.4rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: #4b5563;
  border: 1px solid #e5e7eb;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #f9fafb;
  }

  &:first-of-type {
    border-top-left-radius: 0.7rem;
    border-bottom-left-radius: 0.7rem;
  }

  &:last-of-type {
    border-top-right-radius: 0.7rem;
    border-bottom-right-radius: 0.7rem;
  }

  ${props =>
    props.isActive &&
    `
      background-color: #F9FAFB; 
    `}

  @media (prefers-color-scheme: dark) {
    color: #ffffff;
    border-color: #6b7280;
    &:hover {
      background-color: #374151;
    }
  }
`;

export const ButtonGroup = ({ options, active, setActive }: ButtonGroupProps) => {
  return (
    <>
      {options.map(option => (
        <Button
          key={option.value}
          isActive={active === option.value}
          onClick={() => setActive(option.value)}
        >
          {option.content}
        </Button>
      ))}
    </>
  );
};

