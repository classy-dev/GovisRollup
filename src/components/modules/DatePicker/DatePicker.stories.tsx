/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { useForm, Controller } from 'react-hook-form';
import { css } from '@emotion/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import { ErrorTxt } from '@ComponentFarm/atom/ErrorTxt/ErrorTxt';
import { DatePicker, DatePickerProps, NewDate } from './DatePicker';

// Define the form data structure

const meta: Meta = {
  title: 'MODULES/DatePicker',
  tags: ['autodocs'],
  args: {
    TotalProps: {
      props: `selectedDate, onChange, dateFormat, minDate, maxDate, placeholderText, showYearDropdown,
      showMonthDropdown`,
    },
    propsDesc: {
      selectedDate: '초기에 설정된 날짜값',
      onChange: '날짜가 변경될 때마다 발동하는 함수',
      dateFormat: '날짜 형식, yyyy/MM/dd, MM/dd/yyyy 등',
      minDateMaxDate: '사용자가 선택할 수 있는 날짜의 최소값과 최대값',
      placeholderText:
        '날짜를 선택하기 전에 표시되는 placeholder 텍스트를 설정',
      showYearDropdown: '년/월을 드롭다운으로 선택할 수 있는 옵션을 제공',
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

interface Props extends DatePickerProps {
  darkMode: boolean;
}

const StoryDatePicker: Story<Props> = args => {
  const [selectedDate, setSelectedDate] = useState('2023-08-05');
  const handleSubmit = () => {
    console.log(selectedDate);
  };

  return (
    <StoryLayout
      {...args}
      customCss={css`
        height: 500px;
      `}
    >
      <div>
        <form onSubmit={handleSubmit}>
          <DatePicker
            selectedDate={selectedDate}
            onChange={(newDate: string) => setSelectedDate(newDate)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>{selectedDate}</div>
    </StoryLayout>
  );
};

export const Default = StoryDatePicker.bind({});

const StoryDatePicker2: Story<Props> = args => {
  type IFormInput2 = {
    selectedDate: string | null;
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput2>();
  const onSubmit = (data: IFormInput2) => {
    console.log(data);
  };

  return (
    <StoryLayout
      {...args}
      customCss={css`
        height: 500px;
      `}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="selectedDate"
          rules={{ required: '필수 입력 항목입니다.' }}
          render={({ field }) => (
            <DatePicker
              placeholderText="판매 시작일"
              selectedDate={field.value}
              onChange={(newDate: NewDate) => {
                field.onChange(String(newDate));
              }}
            />
          )}
        />
        {errors.selectedDate && (
          <ErrorTxt>{String(errors.selectedDate.message)}</ErrorTxt>
        )}{' '}
        {/* 에러를 보여주는 부분 */}
        <button type="submit">Submit</button>
      </form>
    </StoryLayout>
  );
};
export const ReactHookForm = StoryDatePicker2.bind({});

export const minDateMaxDate = (args: any) => {
  const [minDateValue, setMinDateValue] = useState('2023-10-18');
  const [maxDateValue, setMaxDateValue] = useState('2023-10-20');

  return (
    <StoryLayout {...args}>
      <DatePicker
        placeholderText="판매 시작일"
        minDate={new Date('2023-10-17')}
        selectedDate={minDateValue}
        onChange={(newDate: NewDate) => {
          setMinDateValue(String(newDate));
        }}
      />
      <DatePicker
        placeholderText="판매 시작일"
        maxDate={new Date('2023-10-20')}
        selectedDate={maxDateValue}
        onChange={(newDate: NewDate) => {
          setMaxDateValue(String(newDate));
        }}
      />
    </StoryLayout>
  );
};
