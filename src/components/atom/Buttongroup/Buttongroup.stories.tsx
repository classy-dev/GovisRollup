import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import styled from '@emotion/styled';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import { ButtonGroup } from './Buttongroup';
import { options1, options2, options3 } from './const';

const meta: Meta = {
  title: 'Atoms/ButtonGroup',
  tags: ['autodocs'],
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

const SpacedContainer = styled.div`
  & > div + div {
    margin-top: 1.25rem; /* Corresponds to space-y-5 in Tailwind CSS */
  }
`;

const StoryButtonGroup: Story<Props> = args => {
  const [active1, setActive1] = useState(options1[0].value);
  const [active2, setActive2] = useState(options2[0].value);
  const [viewOption, setViewOption] = useState('list');
  return (
    <StoryLayout {...args}>
      <SpacedContainer>
        <div>
          <ButtonGroup
            options={options1}
            active={active1}
            setActive={setActive1}
          />
        </div>
        <div>
          <ButtonGroup
            options={options2}
            active={active2}
            setActive={setActive2}
          />
        </div>
        <div>
          <ButtonGroup
            options={options3}
            active={viewOption}
            setActive={setViewOption}
          />
        </div>
      </SpacedContainer>
    </StoryLayout>
  );
};

export const Default = StoryButtonGroup.bind({});

Default.args = {
  darkMode: false,
};
