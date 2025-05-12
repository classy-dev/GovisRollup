/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { css } from '@emotion/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';

const meta: Meta = {
  title: 'Atoms/Plain Select',
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
const emailOptions = [
  'naver.com',
  'gmail.com',
  'nate.com',
  'yahoo.co.kr',
  'hanmail.net',
  'daum.net',
  'dreamwiz.com',
  'lycos.co.kr',
  'empas.com',
  'korea.com',
  'paran.com',
  'freechal.com',
  'hanmir.com',
  'hotmail.com',
];

const StorySelect: Story<Props> = args => {
  const [email, setEmail] = useState('');
  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };
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
      <select name="email3" value={email} onChange={handleChange}>
        <option value="">직접입력</option>
        {emailOptions.map(el => (
          <option value={el} key={el}>
            {el}
          </option>
        ))}
      </select>
    </StoryLayout>
  );
};
export const Default = StorySelect.bind({});

const StorySelect2: Story<Props> = args => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register('email3')}>
          <option value="">직접입력</option>
          {emailOptions.map(el => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </select>
        <input type="submit" />
      </form>
    </StoryLayout>
  );
};
export const reactHookForm = StorySelect2.bind({});

Default.argTypes = {
  darkMode: {
    control: 'boolean',
  },
};
