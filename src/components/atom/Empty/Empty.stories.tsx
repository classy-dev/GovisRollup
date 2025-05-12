import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { css } from '@emotion/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import { Empty } from './Empty';

const meta: Meta = {
  title: 'Atoms/Empty',
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

const StoryEmpty: Story<Props> = args => {
  return (
    <StoryLayout
      {...args}
      customCss={css`
        height: 500px;
      `}
    >
      <Empty Icon={<IoAlertCircleOutline size={42} />} />
    </StoryLayout>
  );
};
export const Default = StoryEmpty.bind({});
