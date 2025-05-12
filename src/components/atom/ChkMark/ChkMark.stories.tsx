import React from 'react';
import { Meta, Story } from '@storybook/react';
import { css } from '@emotion/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import { ChkMark } from './ChkMark';

const meta: Meta = {
  title: 'Atoms/ChkMark',
  tags: ['autodocs'],
  args: {
    TotalProps: {
      props: ``,
    },
  },
  parameters: {
    docs: {
      story: { inline: true }, // render the story in an iframe
      canvas: { sourceState: 'shown' }, // start with the source open
      source: { type: 'code' }, // forces the raw source code (rather than the rendered JSX).
    },
  },
};

export default meta;

interface Props {
  darkMode: boolean;
}

const StoryChkMark: Story<Props> = args => {
  return (
    <StoryLayout
      {...args}
      customCss={css`
        height: 500px;
      `}
    >
      <ChkMark checked />
      <ChkMark />
      <ChkMark customColor="#ffd34d" />
      <ChkMark size={30} customColor="#ffd34d" />
      <ChkMark type="circle" checked />
      <ChkMark type="circle" />
      <ChkMark type="circle" customColor="#ffd34d" />
    </StoryLayout>
  );
};
export const Default = StoryChkMark.bind({});
