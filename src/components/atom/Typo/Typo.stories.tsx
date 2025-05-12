
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { css } from '@emotion/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';

const meta: Meta = {
  title: 'Atoms/Typo',
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

const TypoHeadings: Story<any> = ({ darkMode, ...args }) => (
  <StoryLayout darkMode={darkMode}>
    <div
      css={css`
        div,
        p {
          margin-bottom: 15px;
        }
      `}
    >
      <div>
        <p>
          <a href="#">링크</a>
        </p>
      </div>
      <div>
        <h1>H1 텍스트입니다.</h1>
      </div>
      <div>
        <h2>H2 텍스트입니다.</h2>
      </div>
      <div>
        <h3>H3 텍스트입니다.</h3>
      </div>
      <p>body 텍스트입니다.</p>
      <p className="small">body2 텍스트입니다.</p>
      <div>
        <label>라벨 텍스트입니다.</label>
      </div>
      <div>
        <label className="small">라벨 텍스트입니다.</label>
      </div>
      <div>
        <button type="button" disabled>
          버튼 disabled 텍스트
        </button>
      </div>
      <div>
        <input type="text" value="input disabled 텍스트" disabled />
      </div>
      <div className="helper-text">헬퍼 텍스트</div>
      <div className="helper-text small">small 헬퍼 텍스트</div>
    </div>
  </StoryLayout>
);

export const Heading = TypoHeadings.bind({});

Heading.argTypes = {
  weight: {
    control: 'radio',
    options: ['normal', 'medium', 'semibold', 'bold'],
  },
  darkMode: {
    control: 'boolean',
  },
};

Heading.parameters = {
  controls: { exclude: ['customColor'] },
};
