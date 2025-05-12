import styled from '@emotion/styled';

export type CheckBoxSize = 'sm' | 'md';

export const sizes = {
  sm: '1.6rem',
  md: '2.4rem',
};

export const RadioBoxWrap = styled.input<{ chksize?: CheckBoxSize }>`
  width: ${props => sizes[props.chksize || 'md']};
  height: ${props => sizes[props.chksize || 'md']};
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
    background-image: url('/images/common/ico_radio.svg');
  }

  &.readonly {
    border: 1px solid var(--input-checkBoxReadOnlyBorder);
    background-color: var(--bg-inputCheckBoxReadOnly);
    &:checked {
      background-image: url('/images/common/ico_radio_disabled.svg');
    }
    pointer-events: none;
  }

  &:disabled {
    border: 1px solid var(--input-checkBoxDisabeldBorder);
    background-color: var(--bg-inputCheckBoxDisabled);
    &:checked {
      background-image: url('/images/common/ico_radio_disabled.svg');
    }
    pointer-events: none;

    ~ .form-check-label {
      opacity: 0.5;
    }
  }
`;
