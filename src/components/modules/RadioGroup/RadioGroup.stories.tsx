/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { Controller, useForm } from "react-hook-form";
import { css } from "@emotion/react";
import StoryLayout from "@ComponentFarm/modules/story_layout/StoryLayout";
import { Radio } from "@ComponentFarm/atom/Radio/Radio";
import { RadioGroup, RadioGroupProps } from "./RadioGroup";

const meta: Meta = {
  title: "MODULES/RadioGroup",
  tags: ["autodocs"],
  args: {
    TotalProps: {
      props: ``,
    },
  },
  parameters: {
    docs: {
      story: { inline: true }, // render the story in an iframe
      canvas: { sourceState: "shown" }, // start with the source open
      source: { type: "code" }, // forces the raw source code (rather than the rendered JSX).
    },
  },
};

export default meta;

interface Props extends RadioGroupProps {
  darkMode: boolean;
}

const StoryCheckboxGroup: Story<Props> = (args) => {
  const options = [
    { label: "Apple", value: "1" },
    { label: "Pear", value: "2" },
    { label: "Orange", value: "3" },
  ];

  const options2 = [
    { label: "Apple", value: "1" },
    { label: "Pear", value: "2" },
    { label: "Orange", value: "3" },
  ];
  const option3 = [
    { label: "Apple", value: "1", subText: "subText" },
    { label: "Pear", value: "2", subText: "subText" },
    { label: "Orange", value: "3", subText: "subText" },
  ];

  const [selectedRadio, setSelectedRadio] = useState("");

  return (
    <StoryLayout
      {...args}
      customCss={css`
        /* display: flex; */
        & > div + div {
          margin-top: 1rem; /* Corresponds to space-y-5 in Tailwind CSS */
        }
      `}
    >
      <div style={{ display: "flex" }}>
        <RadioGroup
          options={options}
          defaultValue={selectedRadio}
          onChange={setSelectedRadio}
        />
      </div>
      <div style={{ display: "flex" }}>
        <RadioGroup
          options={options2}
          chksize="sm"
          defaultValue={selectedRadio}
          onChange={setSelectedRadio}
        />
      </div>
      <div style={{ display: "flex" }}>
        <RadioGroup
          options={option3}
          chksize="sm"
          defaultValue={selectedRadio}
          onChange={setSelectedRadio}
        />
      </div>
      <p>Selected Radio: {selectedRadio}</p>
    </StoryLayout>
  );
};
export const Default = StoryCheckboxGroup.bind({});

const StoryCheckboxGroup2: Story<Props> = (args) => {
  const [selectedRadio, setSelectedRadio] = useState("");

  const handleRadioChange = (value: string) => {
    setSelectedRadio(`Selected value: ${value}`);
  };

  return (
    <StoryLayout
      {...args}
      customCss={css`
        /* display: flex; */
        & > div + div {
          margin-top: 1rem; /* Corresponds to space-y-5 in Tailwind CSS */
        }
      `}
    >
      <div>
        <RadioGroup onChange={handleRadioChange} defaultValue="2">
          <div>
            <h3>Group 1</h3>
            <Radio value="1" label="Apple" />
            <Radio value="2" label="Pear" />
          </div>
          <div>
            <h3>Group 2</h3>
            <div>
              <Radio value="3" label="Orange" />
              <Radio value="4" label="Banana" />
            </div>
          </div>
        </RadioGroup>
      </div>
      <div>{selectedRadio}</div>
    </StoryLayout>
  );
};
export const Default2 = StoryCheckboxGroup2.bind({});

const StoryCheckboxGroup3: Story<Props> = (args) => {
  const options = [
    { label: "Apple", value: "1" },
    { label: "Pear", value: "2" },
    { label: "Orange", value: "3" },
  ];

  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    console.log(data); // form data를 콘솔에 출력합니다.
  };

  return (
    <StoryLayout
      {...args}
      customCss={css`
        /* display: flex; */
        & > div + div {
          margin-top: 1rem; /* Corresponds to space-y-5 in Tailwind CSS */
        }
      `}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="radioGroup"
          control={control}
          render={({ field: { onChange, value, ref, ...restField } }) => (
            <RadioGroup
              defaultValue="1"
              onChange={onChange}
              {...restField}
              options={options}
            />
          )}
        />
        <button type="submit">Submit</button>
      </form>
    </StoryLayout>
  );
};
export const reactHookForm = StoryCheckboxGroup3.bind({});

const StoryCheckboxGroupParent: Story<Props> = (args) => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    console.log(data); // form data를 콘솔에 출력합니다.
  };

  return (
    <StoryLayout
      {...args}
      customCss={css`
        /* display: flex; */
        & > div + div {
          margin-top: 1rem; /* Corresponds to space-y-5 in Tailwind CSS */
        }
      `}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="radioGroup"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value, ref, ...restField } }) => (
            <RadioGroup onChange={onChange} {...restField}>
              <div>
                <h3>Group 1</h3>
                <Radio value="1" label="Apple" />
                <Radio value="2" label="Pear" />
              </div>
              <div>
                <h3>Group 2</h3>
                <div>
                  <Radio value="3" label="Orange" />
                  <Radio value="4" label="Banana" />
                </div>
              </div>
            </RadioGroup>
          )}
        />
        <button type="submit">Submit</button>
      </form>
    </StoryLayout>
  );
};
export const reactHookForm2 = StoryCheckboxGroupParent.bind({});
