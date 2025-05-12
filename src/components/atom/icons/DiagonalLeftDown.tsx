import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const DiagonalLeftDown = ({ size, viewBoxSize, ...props }: Props) => (
  <svg
    css={css`
      ${props.customCss}
    `}
    xmlns="http://www.w3.org/2000/svg"
    width={size || 16}
    height={size || 16}
    fill="none"
    viewBox={`0 0 ${viewBoxSize || 24} ${viewBoxSize || 24}`}
  >
    <path
      fill="#747474"
      fillRule="evenodd"
      d="M17.707 6.293a.999.999 0 0 0-1.414 0L8 14.586V9a1 1 0 1 0-2 0v8a1 1 0 0 0 1 1h8a1 1 0 1 0 0-2H9.414l8.293-8.293a.999.999 0 0 0 0-1.414Z"
      clipRule="evenodd"
    />
  </svg>
);
export default DiagonalLeftDown;
