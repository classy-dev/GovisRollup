import React from 'react';
import { Label, RadioWrap } from './style';

export type RadioSize = 'sm' | 'md';

export const sizes = {
  sm: '1.6rem',
  md: '2.4rem',
};

interface RadioProps {
  value?: string | number;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  chksize?: RadioSize;
  readOnly?: boolean;
  disabled?: boolean;
  label?: string;
  subText?: string;
}

export const Radio = ({
  value,
  checked,
  onChange,
  chksize = 'md',
  readOnly,
  disabled,
  label,
  subText,
}: RadioProps) => {
  return (
    <Label
      className={subText ? 'label_radio contain_subtext' : 'label_radio'}
      chksize={chksize}
    >
      <RadioWrap
        type="radio"
        id={String(value)}
        value={value}
        checked={checked}
        onChange={onChange}
        chksize={chksize}
        readOnly={readOnly}
        disabled={disabled}
      />
      <span className={`txt_box ${chksize ?? ''}`}>
        <span className="title">{label}</span>
        <span className="sub-text">{subText}</span>
      </span>
    </Label>
  );
};