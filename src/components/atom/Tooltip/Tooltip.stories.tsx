import React from 'react';
import { Meta } from '@storybook/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

const meta: Meta = {
  title: 'Atoms/Tooltip',
  tags: ['autodocs'],
  args: {},
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

export const Default = ({ darkMode }: Props) => {
  return (
    <StoryLayout className="center" darkMode={darkMode}>
      <Button>
        기본 툴팁
        <Tooltip>기본 툴팁 내용</Tooltip>
      </Button>
      <Button>
        LEFT 툴팁
        <Tooltip direction="left">LEFT 툴팁 내용</Tooltip>
      </Button>
      <Button>
        RIGHT 툴팁
        <Tooltip direction="right">{`툴팁 내용\n여러줄 툴팁`}</Tooltip>
      </Button>
      <Button>
        TOP 툴팁
        <Tooltip direction="top">TOP 툴팁 내용...</Tooltip>
      </Button>
      <a rel="noopener noreferrer" href="https://gopizza.kr" target="_blank">
        링크 툴팁
        <Tooltip>상단 툴팁 내용</Tooltip>
      </a>

      <div>
        클릭 툴팁 내부 링크
        <Tooltip eventType="click" direction="right">
          <a href="https://gopizza.kr" target="blank">
            툴팁 링크
          </a>
        </Tooltip>
      </div>

      <div>
        클릭 툴팁 내부 링크
        <Tooltip eventType="click" direction="left">
          <a href="https://gopizza.kr" target="blank">
            툴팁 링크
          </a>
        </Tooltip>
      </div>
    </StoryLayout>
  );
};
