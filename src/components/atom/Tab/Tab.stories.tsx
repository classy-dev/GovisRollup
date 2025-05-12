/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import { Tabs } from './Tab';

// Create a client

const meta: Meta = {
  title: 'Atoms/Tab',
  tags: ['autodocs'],
  args: {
    Desc: ``,
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

const StoryTab: Story<Props> = args => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabData = [
    {
      title: '첫번째 탭',
      label: 'label',
    },
    {
      title: '두번째 탭',
      label: 'label',
    },
    {
      title: '세번째 탭',
      label: 'label',
    },
  ];

  return (
    <StoryLayout {...args}>
      <div>
        <Tabs
          id="ddd"
          tabs={tabData}
          activeTabIndex={activeTabIndex}
          onTabChange={index => setActiveTabIndex(index)}
        />

        {/* 여기서 활성화된 탭에 따른 컨텐츠 렌더링 */}
        {activeTabIndex === 0 && <div>첫번째 탭의 컨텐츠</div>}
        {activeTabIndex === 1 && <div>두번째 탭의 컨텐츠</div>}
        {activeTabIndex === 2 && <div>세번째 탭의 컨텐츠</div>}
      </div>
    </StoryLayout>
  );
};
export const Default = StoryTab.bind({});

Default.args = {
  darkMode: false,
};

Default.parameters = {
  controls: { exclude: ['setPageNumber'] },
};
