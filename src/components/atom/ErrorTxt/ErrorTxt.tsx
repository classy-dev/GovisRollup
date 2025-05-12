import React from 'react';
import { FieldError } from 'react-hook-form';
import styled from '@emotion/styled';

export interface ErrorTxtProps {
  error?:
    | {
        type: string | number;
        message: string;
      }
    | FieldError;
  // children: React.ReactNode;
}

const ErrorTxtWrap = styled.p`
  width: max-content;
  margin-top: 1rem;
  color: red;
  font-weight: 500;
`;

export const ErrorTxt = ({
  error,
  children,
}: React.PropsWithChildren<ErrorTxtProps>) => {
  const message = error?.message ?? '';

  if (children) {
    return <ErrorTxtWrap>{children}</ErrorTxtWrap>;
  }

  if (!error) return <></>;

  if (error.type === 'required') {
    return <ErrorTxtWrap>{message || '필수 입력 항목입니다.'}</ErrorTxtWrap>;
  }
  if (error.type === 'minLength') {
    return <ErrorTxtWrap>최소 {message}글자 이상 입력해주세요.</ErrorTxtWrap>;
  }

  if (error.type === 'maxLength') {
    return <ErrorTxtWrap>최대 {message}글자 이하로 입력해주세요.</ErrorTxtWrap>;
  }
  if (error.type === 'pattern') {
    return <ErrorTxtWrap>형식에 맞지 않습니다.</ErrorTxtWrap>;
  }

  return <ErrorTxtWrap>{message}</ErrorTxtWrap>;
};
