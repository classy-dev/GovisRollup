import styled from "@emotion/styled";
import { SVG_BASE64 } from "@svg/svg-base64";

export type CheckBoxSize = "sm" | "md";

export const sizes = {
  sm: "1.6rem",
  md: "2.4rem",
};

export const LabelFontSize = {
  sm: "1.4rem",
  md: "1.6rem",
};

export const LineHeight = {
  sm: "2rem",
  md: "2.4rem",
};

export const Label = styled.label<{ chksize?: CheckBoxSize }>`
  display: flex;
  margin-bottom: 0;
  &:not(.contain_subtext) {
    align-items: center;
  }

  &:not(&:last-of-type) {
    margin-right: 15px;
  }

  .txt_box {
    display: flex;
    flex-direction: column;
    margin-left: 8px;

    .title {
      color: var(--color-neutral10);
      font-size: ${(props) => LabelFontSize[props.chksize || "md"]};
      font-weight: 500;
      line-height: ${(props) => LineHeight[props.chksize || "md"]};
    }
    .sub-text {
      color: var(--color-neutral50);
      font-size: ${(props) => LabelFontSize[props.chksize || "md"]};
      font-weight: 400;
      line-height: ${(props) => LineHeight[props.chksize || "md"]};
    }
  }
`;

export const RadioWrap = styled.input<{ chksize?: CheckBoxSize }>`
  width: ${(props) => sizes[props.chksize || "md"]};
  height: ${(props) => sizes[props.chksize || "md"]};
  background: #fff no-repeat 50% / contain;
  border: 1px solid var(--input-checkBoxBorder);
  /* margin-top: 0.25em;
  vertical-align: top; */
  appearance: none;
  color-adjust: exact;
  border-radius: 50%;

  &:checked {
    border: 1px solid var(--input-checkBoxCheckedBorder);
    background-color: var(--bg-inputRadio);
    background-image: url(${SVG_BASE64.ico_radio});
  }

  &.readonly {
    border: 1px solid var(--input-checkBoxReadOnlyBorder);
    background-color: var(--bg-inputCheckBoxReadOnly);
    &:checked {
      background-image: url(${SVG_BASE64.ico_radio_disabled});
    }
    pointer-events: none;
  }

  &:disabled {
    border: 1px solid var(--input-checkBoxDisabeldBorder);
    background-color: var(--bg-inputCheckBoxDisabled);
    &:checked {
      background-image: url(${SVG_BASE64.ico_radio_disabled});
    }
    pointer-events: none;

    ~ .form-check-label {
      opacity: 0.5;
    }
  }
`;
