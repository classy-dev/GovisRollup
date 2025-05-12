// @ts-nocheck
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { css } from '@emotion/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';

// SVG 컴포넌트들을 동적으로 불러옵니다.
const svgsContext = require.context('.', true, /\.tsx$/);

const svgs = svgsContext
  .keys()
  .filter(filename => !filename.includes('stories.tsx')) // 스토리 파일 제외
  .reduce((acc, filename) => {
    const svgModule = svgsContext(filename);
    const key = filename.replace('./', '').replace('.tsx', '');
    acc[key] = svgModule.default;
    return acc;
  }, {});

const meta: Meta = {
  title: 'Atoms/Icon',
  tags: ['autodocs'],
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
      source: { type: 'code' },
    },
  },
};

export default meta;

const SVGDisplay: Story<any> = ({ ...args }) => (
  <StoryLayout
    customCss={css`
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 4rem;
      text-align: center;
      background: darkseagreen;
      .box_icon {
        margin-right: 20px;
      }
    `}
  >
    {Object.values(svgs).map((SVGComponent, index) => (
      <div key={SVGComponent.name} className="box_icon">
        <SVGComponent {...args} />
        <p>{SVGComponent.name}</p>
      </div>
    ))}
  </StoryLayout>
);

export const Default = SVGDisplay.bind({});
Default.args = {
  size: 24,
  viewBoxSize: 24,
};
