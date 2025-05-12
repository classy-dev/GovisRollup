import React from 'react';
import type { Preview } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Global } from '@emotion/react';
import {reset} from "../src/components/common";

/* TODO: update import for your custom theme configurations */
// import { lightTheme, darkTheme } from '../path/to/themes';

/* TODO: replace with your own global styles, or remove */
const queryClient = new QueryClient();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          'Atoms',
          [
            'Color',
            'Typo',
            'Plain Input',
            'Plain Select',
            'Plain CheckBox',
            'Plain Radio',
            '...',
          ],
          'modules',
        ],
      },
    },
  },

  decorators: [
    // Adds global styles and theme switching support.
    Story => (
      <QueryClientProvider client={queryClient}>
        <Global styles={reset} />
        <Story />
      </QueryClientProvider>
    ),
  ],
};

export default preview;