import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { AddressSearch } from './AddressSearch';

const meta: Meta = {
  title: 'MODULES/AddressSearch',
  tags: ['autodocs'],
  args: {
    value: '서울특별시 강남구 역삼동',
    placeholder: '주소를 입력해주세요',
    disabled: false,
    // TotalProps: {
    //   props: `selectedDate, onChange, dateFormat, minDate, maxDate, placeholderText, showYearDropdown,
    //   showMonthDropdown`,
    // },
    // propsDesc: {
    //   selectedDate: '초기에 설정된 날짜값',
    //   onChange: '날짜가 변경될 때마다 발동하는 함수',
    //   dateFormat: '날짜 형식, yyyy/MM/dd, MM/dd/yyyy 등',
    //   minDateMaxDate: '사용자가 선택할 수 있는 날짜의 최소값과 최대값',
    //   placeholderText:
    //     '날짜를 선택하기 전에 표시되는 placeholder 텍스트를 설정',
    //   showYearDropdown: '년/월을 드롭다운으로 선택할 수 있는 옵션을 제공',
    // },
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
  value: string;
  placeholder: string;
  disabled?: boolean;
}

export const AddressSearchDefault: Story<Props> = ({
  value,
  placeholder,
  disabled,
}) => {
  const [address, setAddress] = useState<string>(value);

  return (
    <AddressSearch
      value={address}
      disabled={disabled}
      placeholder={placeholder}
      onSearch={setAddress}
    />
  );
};

export const ReactHookForm: Story<Props> = ({
  value,
  placeholder,
  disabled,
}) => {
  const { register, watch } = useForm<{ address: string }>({
    defaultValues: {
      address: value,
    },
  });

  return (
    <>
      <AddressSearch
        {...register('address')}
        disabled={disabled}
        placeholder={placeholder}
      />
      <p>입력주소: {watch('address')}</p>
    </>
  );
};
