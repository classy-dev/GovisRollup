import React from 'react';
import { CheckBoxSize, RadioBoxWrap } from './style';

interface RadioProps {
  value?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  chksize?: CheckBoxSize;
}

const Radio = ({
  value,
  checked,
  onChange,
  chksize = 'md',
}:RadioProps) => {
  return (
    <RadioBoxWrap
      value={value}
      type="radio"
      checked={checked}
      onChange={onChange}
      chksize={chksize}
    />
  );
};

export default Radio;
