/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { css } from '@emotion/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';

const meta: Meta = {
  title: 'Atoms/Plain Input',
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

const StoryBadge: Story<Props> = args => {
  return (
    <StoryLayout
      {...args}
      customCss={css`
        display: inline-flex;
        flex-direction: column;
        & > span + span {
          margin-top: 1.25rem; /* Corresponds to space-y-5 in Tailwind CSS */
        }
      `}
    >
      <div className="field1" style={{ marginBottom: 30 }}>
        <label htmlFor="product_name" className="req">
          제품명
        </label>
        <input
          type="text"
          id="product_name"
          className="inp"
          placeholder="Search"
          name="product_name"
        />
      </div>
      <div className="field1">
        <label htmlFor="product_name" className="req">
          제품명
        </label>
        <input
          type="text"
          id="product_name"
          className="inp"
          placeholder="Search"
          name="product_name"
          disabled
        />
      </div>
    </StoryLayout>
  );
};
export const Default = StoryBadge.bind({});

Default.argTypes = {
  darkMode: {
    control: 'boolean',
  },
};
