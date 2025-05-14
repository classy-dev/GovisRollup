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
    
    // export default와 export 둘 다 처리
    let Component;
    
    if (svgModule.default) {
      // export default로 내보낸 경우
      Component = svgModule.default;
    } else {
      // 이름이 있는 export로 내보낸 경우 - 첫 번째 값 사용
      // 파일 이름과 같은 이름의 export를 찾음
      const componentName = key.split('/').pop();
      Component = svgModule[componentName] || Object.values(svgModule)[0];
    }
    
    // 컴포넌트가 있는 경우만 추가
    if (Component) {
      // displayName 설정
      Component.displayName = key;
      acc[key] = Component;
    }
    
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
    {Object.entries(svgs).map(([key, SVGComponent], index) => (
      <div key={key} className="box_icon">
        <SVGComponent {...args} />
        <p>{SVGComponent.displayName || key}</p>
      </div>
    ))}
  </StoryLayout>
);

export const Default = SVGDisplay.bind({});
Default.args = {
  size: 24,
  viewBoxSize: 24,
};
