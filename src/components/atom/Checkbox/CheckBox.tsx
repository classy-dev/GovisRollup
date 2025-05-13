import React from "react";
import { CheckBoxWrap, Label } from "./style";

export type CheckBoxSize = "sm" | "md";

export const CheckBoxSizes = {
  sm: "1.6rem",
  md: "2.4rem",
};

export interface CheckBoxProps {
  value?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  chksize?: CheckBoxSize;
  readOnly?: boolean;
  disabled?: boolean;
  label?: string;
  subText?: string;
}

export const CheckBox = ({
  value,
  checked,
  onChange,
  chksize = "md",
  readOnly,
  disabled,
  label,
  subText,
}: CheckBoxProps) => {
  return (
    <Label
      className={subText ? "label_checkbox contain_subtext" : "label_checkbox"}
      chksize={chksize}
    >
      <CheckBoxWrap
        id={value}
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
        chksize={chksize}
        readOnly={readOnly}
        disabled={disabled}
      />
      <span className={`txt_box ${chksize ?? ""}`}>
        <span className="title">{label}</span>
        <span className="sub-text">{subText}</span>
      </span>
    </Label>
  );
};
