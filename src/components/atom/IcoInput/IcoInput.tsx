import React, { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from '@emotion/styled';
import { theme } from '@ComponentFarm/theme';
import { FONT } from '@ComponentFarm/token';

export interface IcoInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email';
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  name?: string;
  label?: string;
  leadingText?: string;
  placeholder?: string;
  error?: string;
  helperText?: string;
  LeadingIcon?: React.ReactElement;
  TrailingIcon?: React.ReactElement;
  disabled?: boolean;
  register?: UseFormRegisterReturn; // `register`를 `field`로 변경
  readOnly?: boolean;
}

type IcoInputComponentProps = {
  disabled?: boolean;
  LeadingIcon?: React.ReactElement;
  TrailingIcon?: React.ReactElement;
  leadingText?: string;
  error?: string;
};

const InputContainer = styled.div<{ leadingText?: string }>`
  position: relative;
  display: ${props => (props.leadingText ? 'flex' : 'block')};
  align-items: ${props => (props.leadingText ? 'center' : '')};

  svg {
    width: 1.7rem;
    height: 1.7rem;
  }
`;

const IconContainer = styled.div`
  width: 100%;
  height: 4.4rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.4rem;
  pointer-events: none;
  right: 0;
`;

const LeadingTextContainer = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  height: 4.4rem;
  font-size: ${theme.fontSize.md[0]};
  color: ${theme.colors.gray500};
  padding-left: 1.4rem;
  padding-right: 1.4rem;
  border: 1px solid ${theme.colors.gray300};
  border-top-left-radius: 0.8rem;
  border-bottom-left-radius: 0.8rem;
  background-color: ${props =>
    props.disabled ? theme.colors.gray50 : theme.colors.white};
`;

const IcoInputComponent = styled.input<IcoInputComponentProps>`
  width: 100%;
  cursor: text;
  color: ${theme.colors.gray900};
  font-size: ${FONT.size4};
  border: 1px solid
    ${props => (props.error ? theme.colors.error300 : theme.colors.gray300)};
  height: 4.4rem;
  padding-left: ${props => (props.LeadingIcon ? '3rem' : '0.75rem')};
  padding-right: ${props => (props.TrailingIcon ? '3rem' : '0.75rem')};
  border-top-left-radius: ${props => (props.leadingText ? '0px' : '0.8rem')};
  border-bottom-left-radius: ${props => (props.leadingText ? '0px' : '0.8rem')};
  border-top-right-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
  background-color: ${props =>
    props.disabled ? theme.colors.gray50 : theme.colors.white};
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  /* &:focus {
    outline: none;
    box-shadow: ${props =>
    props.error
      ? `0 0 0 0.3rem ${theme.colors.error100}`
      : `0 0 0 0.3rem ${theme.colors.primary100}`};
    border-color: ${props =>
    props.error ? theme.colors.error300 : theme.colors.primary300};
  } */

  &::placeholder {
    color: ${theme.colors.gray400};
  }
`;

const HelperText = styled.div`
  margin-top: 6px;
  font-size: ${theme.fontSize.sm[0]};
  color: ${theme.colors.gray500};
`;

const ErrorText = styled(HelperText)`
  color: ${theme.colors.error500};
`;

export const IcoInput: FC<IcoInputProps> = ({
  type = 'text',
  value,
  onChange,
  onClick,
  name,
  label,
  leadingText,
  placeholder,
  error,
  helperText,
  LeadingIcon,
  TrailingIcon,
  disabled,
  register, // 'register'를 'field'로 변경
  readOnly,
  ...props
}) => {
  return (
    <>
      {label ? <label>{label}</label> : null}

      <InputContainer leadingText={leadingText}>
        <IconContainer>
          {LeadingIcon ? (
            <LeadingIcon.type
              className="trailingIcon"
              style={{
                color: theme.colors.gray500,
              }}
            />
          ) : null}
          {TrailingIcon ? (
            <TrailingIcon.type
              className="trailingIcon"
              style={{
                marginLeft: 'auto',
                color: error ? theme.colors.error500 : theme.colors.gray400,
              }}
            />
          ) : null}
        </IconContainer>

        {leadingText ? (
          <LeadingTextContainer disabled={disabled}>
            {leadingText}
          </LeadingTextContainer>
        ) : null}

        <IcoInputComponent
          type={type}
          className="icoInput"
          {...(register || { value, onChange })} // 'register'를 'field'로 변경
          name={name}
          placeholder={placeholder}
          aria-label="input"
          disabled={disabled}
          LeadingIcon={LeadingIcon}
          TrailingIcon={TrailingIcon}
          leadingText={leadingText}
          error={error}
          onClick={onClick}
          readOnly={readOnly}
          {...props}
        />
      </InputContainer>

      {error ? <ErrorText>{error}</ErrorText> : null}
      {helperText ? <HelperText>{helperText}</HelperText> : null}
    </>
  );
};
