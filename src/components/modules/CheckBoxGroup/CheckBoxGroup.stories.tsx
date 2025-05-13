/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Controller, useForm } from 'react-hook-form';
import { css } from '@emotion/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import { CheckBox } from '@ComponentFarm/atom/Checkbox/CheckBox';
import { CheckBoxGroup,  CheckBoxGroupProps } from './CheckBoxGroup';

const meta: Meta = {
  title: 'MODULES/CheckBoxGroup',
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

interface Props extends CheckBoxGroupProps {
  darkMode: boolean;
}

const StoryCheckboxGroup: Story<Props> = args => {
  const options = [
    { label: 'Apple', value: '1' },
    { label: 'Pear', value: '2' },
    { label: 'Orange', value: '3' },
  ];

  const options2 = [
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' },
    { label: 'D', value: 'D' },
    { label: 'E', value: 'E' },
  ];

  const option3 = [
    { label: 'Apple', value: '1', subText: 'subText' },
    { label: 'Pear', value: '2', subText: 'subText' },
    { label: 'Orange', value: '3', subText: 'subText' },
  ];

  const [selectedFruits, setSelectedFruits] = useState<any>([]);
  const [selectedLetters, setSelectedLetters] = useState<any>([]);
  return (
    <StoryLayout
      {...args}
      customCss={css`
        /* display: flex; */
        div {
          margin-top: 20px; /* Corresponds to space-y-5 in Tailwind CSS */
        }
      `}
    >
      <div>
        <div>
          <CheckBoxGroup
            options={options}
            onChange={setSelectedFruits}
            initialCheckedValues={['1', '2']}
            name="fruits"
          />
        </div>
        <div>
          <CheckBoxGroup
            options={options}
            allChechkHandler={options}
            onChange={setSelectedFruits}
            initialCheckedValues={[]}
            name="fruits"
          />
        </div>
        <div>
          <CheckBoxGroup
            options={option3}
            allChechkHandler={option3}
            onChange={setSelectedFruits}
            initialCheckedValues={[]}
            name="fruits"
          />
        </div>
        <div>
          <CheckBoxGroup
            chksize="sm"
            options={options}
            allChechkHandler={options}
            onChange={setSelectedFruits}
            initialCheckedValues={[]}
            name="fruits"
          />
        </div>
        <div>
          {/* <CheckBoxGroup
            chksize="sm"
            options={option3}
            allChechkHandler={option3}
            onChange={setSelectedFruits}
            initialCheckedValues={[]}
            name="fruits"
          /> */}
        </div>
        <div>
          <CheckBoxGroup
            onChange={setSelectedLetters}
            initialCheckedValues={[]}
            allChechkHandler={options2}
            name="letters"
          >
            <table>
              <tbody>
                <tr>
                  <td>
                    <CheckBox value="A" label="A" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>
                      <CheckBox value="B" label="B" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <CheckBox value="C" label="C" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <CheckBox value="D" label="D" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <CheckBox value="E" label="E" />
                  </td>
                </tr>
              </tbody>
            </table>
          </CheckBoxGroup>
        </div>
        <div>
          <h3>Selected Fruits:</h3>
          <ul>
            {selectedFruits.map((fruit: any, index: any) => (
              <li key={fruit}>{fruit}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Selected Letters:</h3>
          <ul>
            {selectedLetters.map((letter: any, index: any) => (
              <li key={letter}>{letter}</li>
            ))}
          </ul>
        </div>
      </div>
    </StoryLayout>
  );
};
export const Default = StoryCheckboxGroup.bind({});

const StoryCheckboxGroup2: Story<Props> = args => {
  const options = [
    { label: 'Apple', value: '1' },
    { label: 'Pear', value: '2' },
    { label: 'Orange', value: '3' },
  ];

  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    console.log(data); // form data를 콘솔에 출력합니다.
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="checkboxGroup"
        control={control}
        defaultValue={['1', '2']}
        render={({ field: { value, ref, ...restField } }) => (
          <CheckBoxGroup
            {...restField}
            options={options}
            allChechkHandler={options}
            initialCheckedValues={value}
          />
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export const reactHookForm = StoryCheckboxGroup2.bind({});
