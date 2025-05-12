/* eslint-disable react/destructuring-assignment */
// @ts-nocheck
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FiArrowRight, FiStar } from 'react-icons/fi';
import { css } from '@emotion/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import { TextBadge } from '@ComponentFarm/atom/Badge/TextBadge';
import { Badge, BadgeProps } from './Badge';
import { TimeBadge } from './TimeBadge';

const meta: Meta = {
  title: 'Atoms/Badge',
  tags: ['autodocs'],
  args: {
    TotalProps: {
      props: `variant(필수값), size(기본값,md)`,
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

interface Props extends BadgeProps {
  darkMode: boolean;
}

const color = ['green', 'yellow', 'indigo', 'blue', 'red', 'gray'];

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
      <div
        css={css`
          display: flex;
          margin-bottom: 10px;
          span {
            margin-right: 10px;
          }
        `}
      >
        <Badge color="orange" size="circle">
          N
        </Badge>
      </div>
      <div
        css={css`
          display: flex;
          margin-bottom: 10px;
          span {
            margin-right: 10px;
          }
        `}
      >
        {color.map(el => (
          <Badge key={el} color={el} dot size="lg">
            label
          </Badge>
        ))}
      </div>
      <div
        css={css`
          display: flex;
          margin-bottom: 10px;
          span {
            margin-right: 10px;
          }
        `}
      >
        {color.map(el => (
          <Badge key={el} color={el} dot>
            label
          </Badge>
        ))}
      </div>
      <div
        css={css`
          display: flex;
          margin-bottom: 10px;
          span {
            margin-right: 10px;
          }
        `}
      >
        {color.map(el => (
          <Badge key={el} color={el} size="sm" dot>
            label
          </Badge>
        ))}
      </div>
      {/* dot 없을때 */}
      <div
        css={css`
          display: flex;
          margin-bottom: 10px;
          span {
            margin-right: 10px;
          }
        `}
      >
        {color.map(el => (
          <Badge key={el} color={el} size="lg">
            label
          </Badge>
        ))}
      </div>
      <div
        css={css`
          display: flex;
          margin-bottom: 10px;
          span {
            margin-right: 10px;
          }
        `}
      >
        {color.map(el => (
          <Badge key={el} color={el}>
            label
          </Badge>
        ))}
      </div>
      <div
        css={css`
          display: flex;
          margin-bottom: 10px;
          span {
            margin-right: 10px;
          }
        `}
      >
        {color.map(el => (
          <Badge key={el} color={el} size="sm">
            label
          </Badge>
        ))}
      </div>
      {/* dot 없을때 */}
      <div
        css={css`
          display: flex;
          margin-bottom: 10px;
          span {
            margin-right: 10px;
          }
        `}
      >
        {color.map(el => (
          <Badge key={el} color={el} fill="outline">
            label
          </Badge>
        ))}
      </div>
      <div
        css={css`
          display: flex;
          margin-bottom: 10px;
          span {
            margin-right: 10px;
          }
        `}
      >
        {color.map(el => (
          <Badge key={el} color={el} dot fill="outline">
            label
          </Badge>
        ))}
      </div>
      <div
        css={css`
          display: flex;
          margin-bottom: 10px;
          span {
            margin-right: 10px;
          }
        `}
      >
        {color.map(el => (
          <Badge key={el} color={el} fill="transparent" dot>
            label
          </Badge>
        ))}
      </div>

      <div
        css={css`
          display: flex;
          margin-bottom: 10px;
          span {
            margin-right: 10px;
          }
        `}
      >
        <Badge LeadingIcon={<FiStar />}>처리 중</Badge>
        <Badge
          {...args}
          LeadingIcon={
            <img
              src="https://res.cloudinary.com/tailwindcss/image/upload/v1635279277/nl_tpy2ab.svg"
              alt="nl"
              width="16"
              height="16"
            />
          }
        >
          Label
        </Badge>
        <Badge {...args} TrailingIcon={<FiArrowRight />}>
          Label
        </Badge>
        <Badge
          size="lg"
          LeadingIcon={<FiStar />}
          TrailingIcon={<FiArrowRight />}
        >
          error, sm
        </Badge>
      </div>

      {/* <Badge variant="numbering" size="xs">
        1
      </Badge>
      <Badge variant="black" size="sm" textWhite>
        처리 중
      </Badge>
      <Badge {...args}>처리 중</Badge>
      <Badge variant="gray">처리 중</Badge>

      <Badge variant="success" size="lg" LeadingIcon={<FiStar />}>
        TEXT
      </Badge>

      <Badge {...args} LeadingIcon={<FiStar />}>
        Label
      </Badge>

      <Badge
        {...args}
        LeadingIcon={
          <img
            src="https://res.cloudinary.com/tailwindcss/image/upload/v1635279277/nl_tpy2ab.svg"
            alt="nl"
            width="16"
            height="16"
          />
        }
      >
        Label
      </Badge>

      <Badge {...args} TrailingIcon={<FiArrowRight />}>
        Label
      </Badge>
      <Badge
        variant="error"
        size="lg"
        LeadingIcon={<FiStar />}
        TrailingIcon={<FiArrowRight />}
      >
        error, sm
      </Badge> */}
    </StoryLayout>
  );
};
export const Default = StoryBadge.bind({});

Default.args = {
  size: 'md',
  darkMode: false,
};

Default.parameters = {
  controls: { exclude: ['LeadingIcon', 'TrailingIcon', 'className'] },
};

const StoryTimeBadge: Story<Props> = args => {
  return (
    <StoryLayout {...args}>
      <TimeBadge time="65" />
    </StoryLayout>
  );
};
export const TimeBadgeCase = StoryTimeBadge.bind({});

const StoryTextBadge: Story<Props> = args => {
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
      <div
        css={css`
          margin-bottom: 30px;
        `}
      >
        <TextBadge text="토마토 소스 면적" color="red" />
      </div>
      <div
        css={css`
          margin-bottom: 30px;
        `}
      >
        <TextBadge text="100점~70점" color="blue" />
      </div>
      <div
        css={css`
          margin-bottom: 30px;
        `}
      >
        <TextBadge text="70점~50점" color="yellow" />
      </div>
      <div
        css={css`
          margin-bottom: 30px;
        `}
      >
        <TextBadge text="50점~0점" color="orange" />
      </div>
    </StoryLayout>
  );
};
export const TextBadgeCase = StoryTextBadge.bind({});
