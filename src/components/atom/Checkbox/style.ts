import styled from '@emotion/styled';

export type CheckBoxSize = 'sm' | 'md';

export const sizes = {
  sm: '1.6rem',
  md: '2.4rem',
};

export const LabelFontSize = {
  sm: '1.4rem',
  md: '1.6rem',
};

export const LineHeight = {
  sm: '2rem',
  md: '2.4rem',
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
      font-size: ${props => LabelFontSize[props.chksize || 'md']};
      font-weight: 500;
      line-height: ${props => LineHeight[props.chksize || 'md']};
    }
    .sub-text {
      color: var(--color-neutral50);
      font-size: ${props => LabelFontSize[props.chksize || 'md']};
      font-weight: 400;
      line-height: ${props => LineHeight[props.chksize || 'md']};
    }
  }
`;

export const CheckBoxWrap = styled.input<{ chksize?: CheckBoxSize }>`
  width: ${props => sizes[props.chksize || 'md']};
  height: ${props => sizes[props.chksize || 'md']};
  /* margin-top: 0.25em;
  vertical-align: top; */
  background: #fff no-repeat 50% / contain;
  border: 1px solid var(--input-checkBoxBorder);
  border-radius: 0.25em;
  appearance: none;
  color-adjust: exact;

  &:checked {
    border: 1px solid var(--input-checkBoxCheckedBorder);
    background-color: var(--bg-inputCheckBox);
    background-image: url('/images/common/ico_checkbox.svg');
  }

  &.readonly {
    border: 1px solid var(--input-checkBoxReadOnlyBorder);
    background-color: var(--bg-inputCheckBoxReadOnly);
    &:checked {
      background-image: url('/images/common/ico_checkbox_disabled.svg');
    }
    pointer-events: none;
  }

  &:disabled {
    border: 1px solid var(--input-checkBoxDisabeldBorder);
    background-color: var(--bg-inputCheckBoxDisabled);
    &:checked {
      background-image: url('/images/common/ico_checkbox_disabled.svg');
    }
    pointer-events: none;

    ~ .form-check-label {
      opacity: 0.5;
    }
  }
`;
