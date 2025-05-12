import React from 'react';
import { ThemeProvider, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from '@ComponentFarm/theme';
import 'react-datepicker/dist/react-datepicker.css';

interface IStoryArgs {
  darkMode: boolean;
  className?: string;
  children?: React.ReactNode;
  noPadding?: boolean;
  customCss?: SerializedStyles;
}

const Container = styled.div<{ darkMode: boolean }>`
  margin: -1rem;

  ${({ darkMode }) =>
    darkMode &&
    `
    background-color: #2D3748;
  `};
`;

const Content = styled.div<{
  noPadding?: boolean;
  customCss?: SerializedStyles;
}>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  * {
    box-sizing: border-box;
  }

  &.center {
    align-items: center;
  }

  padding: ${({ noPadding }) => (noPadding ? '0' : '1rem')};
  ${({ customCss }) => customCss}
`;

const StoryLayout = ({
  darkMode,
  children,
  className,
  noPadding,
  customCss,
}: IStoryArgs) => {
  return (
    <ThemeProvider theme={theme as Theme}>
      <Container darkMode={darkMode}>
        <Content
          className={className}
          noPadding={noPadding}
          customCss={customCss}
        >
          {children}
        </Content>
      </Container>
      <div id="modal-root" />
    </ThemeProvider>
  );
};

export default StoryLayout;
