import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { useForm, Controller } from 'react-hook-form';
import { DateRangePicker, DateRangeType } from './DateRange';

const meta: Meta = {
  title: 'MODULES/DateRange',
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

interface Props {
  darkMode: boolean;
}

const StoryDateRanger: Story<Props> = () => {
  const [selectedDateRange, setSelectedDateRange] = useState<DateRangeType>([
    null,
    null,
  ]);

  const handleDateRangeChange = (update: DateRangeType) => {
    setSelectedDateRange(update);
  };

  return (
    <>
      <DateRangePicker onDateRangeChange={handleDateRangeChange} />
      <p>
        Selected range: {selectedDateRange[0]?.toLocaleDateString()} -{' '}
        {selectedDateRange[1]?.toLocaleDateString()}
      </p>
    </>
  );
};
export const Default = StoryDateRanger.bind({});

interface FormInputs {
  dateRange: DateRangeType;
}

const StoryDateRanger2: Story<Props> = () => {
  const { handleSubmit, control } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="dateRange"
        control={control}
        defaultValue={[null, null]}
        render={({ field: { onChange, value } }) => (
          <DateRangePicker
            onDateRangeChange={onChange}
            initialDateRange={value}
          />
        )}
      />
      <input type="submit" />
    </form>
  );
};
export const reactHookForm = StoryDateRanger2.bind({});
