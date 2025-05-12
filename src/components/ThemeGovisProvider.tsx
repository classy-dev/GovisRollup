import React from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import { reset } from './common';

export interface ThemeGovisProviderProps {
  children: React.ReactNode;
  withReset?: boolean;
}

export const ThemeGovisProvider: React.FC<ThemeGovisProviderProps> = ({ 
  children,
  withReset = true
}) => {
  return (
    <ThemeProvider theme={{}}>
      {withReset && <Global styles={reset} />}
      {children}
    </ThemeProvider>
  );
};
