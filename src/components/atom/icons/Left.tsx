import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const Left = ({ size, viewBoxSize, ...props }: Props) => (
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
      d="M15.5 5.5a.995.995 0 0 1-.232.64l-4.476 5.371 4.315 5.362a.999.999 0 1 1-1.558 1.253l-4.828-6a.998.998 0 0 1 .011-1.267l5-6A1 1 0 0 1 15.5 5.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Left;
