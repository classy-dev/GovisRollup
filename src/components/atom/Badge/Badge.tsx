import React, { FC, ReactNode } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

type BadgeType = 'square' | 'circle' | 'new';
type BadgeSize = 'sm' | 'md' | 'lg' | 'circle';
export type BadgeColor =
  | 'green'
  | 'yellow'
  | 'indigo'
  | 'purple'
  | 'blue'
  | 'red'
  | 'gray'
  | 'orange';
type BadgeFill = 'fill' | 'outline' | 'transparent';

export interface BadgeProps {
  type?: BadgeType;
  children: ReactNode;
  size?: BadgeSize;
  color?: BadgeColor;
  dot?: boolean;
  fill?: BadgeFill;
  LeadingIcon?: React.ReactElement;
  TrailingIcon?: React.ReactElement;
  textWhite?: boolean;
  hasBorder?: boolean;
  onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

const badgeBase = css`
  display: inline-flex;
  align-items: center;
  width: max-content;
  font-weight: 500;
  svg {
    margin-right: 0.6rem;
  }
`;

const badgeType = {
  square: css`
    min-width: 5.8rem;
    justify-content: center;
    border-radius: 0.4rem;
  `,
  circle: css`
    border-radius: 1.6rem;
  `,
  new: css`
    justify-content: center;
    width: 2rem;
    height: 2rem;
    margin-left: 1rem;
    padding: 0 !important;
    border-radius: 50%;
  `,
};

const sizes = {
  sm: css`
    padding: 0.2rem 0.8rem;
    font-size: 1.2rem;
    line-height: 1.8rem;
  `,
  md: css`
    padding: 0.2rem 1rem;
    font-size: 1.4rem;
    line-height: 2rem;
  `,
  lg: css`
    padding: 0.4rem 1.2rem;
    font-size: 1.4rem;
    line-height: 2rem;
  `,
  circle: css`
    padding: 0 0.6rem;
    font-size: 1.2rem;
    line-height: 1.8rem;
    border-radius: 50%;
  `,
};

const colors = {
  green: css`
    color: var(--bage-greenLabel);
    border: 1px solid var(--bage-greenBorder);
    background-color: var(--bage-greenBg);
  `,
  yellow: css`
    color: var(--bage-yellowLabel);
    border: 1px solid var(--bage-yellowBorder);
    background-color: var(--bage-yellowBg);
  `,
  indigo: css`
    color: var(--bage-indigoLabel);
    border: 1px solid var(--bage-indigoBorder);
    background-color: var(--bage-indigoBg);
  `,
  purple: css`
    color: var(--bage-purpleLabel);
    border: 1px solid var(--bage-purpleBorder);
    background-color: var(--bage-purpleBg);
  `,
  blue: css`
    color: var(--bage-blueLabel);
    border: 1px solid var(--bage-blueBorder);
    background-color: var(--bage-blueBg);
  `,
  red: css`
    color: var(--bage-redLabel);
    border: 1px solid var(--bage-redBorder);
    background-color: var(--bage-redBg);
  `,
  gray: css`
    color: var(--bage-grayLabel);
    border: 1px solid var(--bage-grayBorder);
    background-color: var(--bage-grayBg);
  `,
  orange: css`
    color: var(--bage-orangeLabel);
    border: 1px solid var(--bage-orangeBorder);
    background-color: var(--bage-orangeBg);
  `,
};

const BadgeWrapper = styled.span<BadgeProps>`
  ${badgeBase};
  ${props => badgeType[props.type || 'circle']};
  ${props => sizes[props.size || props.type === 'new' ? 'sm' : 'md']};
  ${props => colors[props.color || 'green']};
  ${props =>
    props.dot
      ? `&:before {
    display: inline-block;
    content: '';
    width: 0.6rem;
    height: 0.6rem;
    margin-right: 0.4rem;
    border-radius: 50%;
    background: currentColor;
  }`
      : ''}
  ${props => (props.fill === 'outline' ? 'background:none' : '')}
  ${props =>
    props.fill === 'transparent' ? 'border:none;background:none' : ''}

  ${props => !props.hasBorder && 'border:none;font-weight:600;'}
`;

export const Badge: FC<BadgeProps> = ({
  type = 'circle',
  size = 'md',
  color = 'green',
  dot,
  fill = 'fill',
  LeadingIcon,
  TrailingIcon,
  children,
  textWhite,
  hasBorder = true,
  onClick,
}) => {
  const Leading = LeadingIcon?.type;
  const Trailing = TrailingIcon?.type;

  return (
    <BadgeWrapper
      type={type}
      size={size}
      color={color}
      dot={dot}
      fill={fill}
      textWhite={textWhite}
      hasBorder={hasBorder}
      className="badge"
      onClick={e => onClick?.(e)}
    >
      {Leading && <Leading {...(LeadingIcon.props as React.ReactElement)} />}
      {children}
      {Trailing && <Trailing {...TrailingIcon.props as React.ReactElement} />}
    </BadgeWrapper>
  );
};
