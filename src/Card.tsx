import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

export interface CardProps {
  title?: string;
  children: ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
}

const StyledCard = styled.div<{ variant: CardProps['variant'] }>`
  border-radius: 8px;
  padding: 16px;
  max-width: 400px;
  
  ${({ variant }) => {
    switch (variant) {
      case 'outlined':
        return `
          border: 1px solid #e0e0e0;
          box-shadow: none;
        `;
      case 'elevated':
        return `
          border: none;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
        `;
      default:
        return `
          border: none;
          background-color: #f8f9fa;
        `;
    }
  }}
`;

const CardTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 18px;
  color: #333;
`;

export const Card: React.FC<CardProps> = ({
  title,
  children,
  variant = 'default',
}) => {
  return (
    <StyledCard variant={variant}>
      {title && <CardTitle>{title}</CardTitle>}
      {children}
    </StyledCard>
  );
};
