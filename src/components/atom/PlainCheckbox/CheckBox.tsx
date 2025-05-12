import React from 'react';
// eslint-disable-next-line import/no-cycle
import { CheckBoxSize, CheckBoxWrap } from './style';

interface CheckBoxProps {
  value?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  chksize?: CheckBoxSize;
  readOnly?: boolean;
  disabled?: boolean;
}

export const CheckBox = ({
  value,
  checked,
  onChange,
  chksize = 'md',
  readOnly,
  disabled,
}:CheckBoxProps) => {
  return (
    <CheckBoxWrap
      type="checkbox"
      value={value}
      checked={checked}
      onChange={onChange}
      chksize={chksize}
      readOnly={readOnly}
      disabled={disabled}
    />
  );
};
