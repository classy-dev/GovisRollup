/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { useForm, Controller } from 'react-hook-form';
import { css } from '@emotion/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import { Select, IOption } from './Select';
import { Badge } from '../Badge/Badge';

const meta: Meta = {
  title: 'Atoms/Select',
  tags: ['autodocs'],
  args: {
    TotalProps: {
      props: `options, selectedOption, setSelectedOption,  placeholder?, LeadingIcon?, width?, isSearchable?, formatOptionLabel?`,
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

const StorySelect: Story<Props> = args => {
  const [selectedOption, setSelectedOption] = useState<IOption | null>(null);

  const options: IOption[] = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
  ];

  return (
    <StoryLayout
      {...args}
      customCss={css`
        height: 30vh;
      `}
    >
      <div>
        <Select
          options={options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          placeholder="전체"
          prefixLabel="전체분류"
        />

        <div>
          {selectedOption ? (
            <p>You selected: {selectedOption.label}</p>
          ) : (
            <p>Please select an option</p>
          )}
        </div>
      </div>
    </StoryLayout>
  );
};
export const Default = StorySelect.bind({});

const StorySelect2: Story<Props> = args => {
  type FormData = {
    fruitSelection: IOption | null;
  };

  const defaultSelectedFruit: IOption = { value: 'banana', label: '셋팅됨' }; // Default value for the Select component
  const { control, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: {
      fruitSelection: { value: 'banana', label: '셋팅됨' },
    },
  });

  const options: IOption[] = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <StoryLayout
      {...args}
      customCss={css`
        height: 30vh;
      `}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="fruitSelection"
          control={control}
          render={({ field }) => (
            <Select
              options={options}
              selectedOption={field.value}
              setSelectedOption={field.onChange}
            />
          )}
        />
        <button type="submit">Submit</button>
      </form>
    </StoryLayout>
  );
};
export const reactHookForm = StorySelect2.bind({});

const StorySelect3: Story<Props> = args => {
  type FormData = {
    fruitSelection: IOption | null;
  };

  const defaultSelectedFruit: IOption = { value: 'banana', label: 'apple' }; // Default value for the Select component
  const { control, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: {
      fruitSelection: defaultSelectedFruit,
    },
  });

  const options: IOption[] = [
    { value: '1', label: 'Option 1', status: 'enabled' },
    { value: '2', label: 'Option 2', status: 'disabled' },
    { value: '3', label: 'Option 3', status: 'pending' },
    // ... more options ...
  ];

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  React.useEffect(() => {
    setValue('fruitSelection', defaultSelectedFruit); // Set the default value on mount
  }, [setValue]);

  const formatStatus = (status: string) => {
    switch (status) {
      case 'enabled':
        return <Badge size="sm">사용</Badge>;
      case 'disabled':
        return <Badge size="sm">미사용</Badge>;
      case 'pending':
        return <Badge size="sm">대기중</Badge>;

      default:
        return null;
    }
  };

  return (
    <StoryLayout
      {...args}
      customCss={css`
        height: 30vh;
      `}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="fruitSelection"
          control={control}
          defaultValue={defaultSelectedFruit}
          render={({ field }) => (
            <Select
              options={options}
              selectedOption={field.value}
              setSelectedOption={field.onChange}
              formatStatus={formatStatus}
            />
          )}
        />
        <button type="submit">Submit</button>
      </form>
    </StoryLayout>
  );
};
export const reactHookForm2 = StorySelect3.bind({});
