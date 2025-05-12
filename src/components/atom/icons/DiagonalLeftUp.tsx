import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const DiagonalLeftUp = ({ size, viewBoxSize, ...props }: Props) => (
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
      d="M17.707 16.293 9.418 8.004 15.001 8A1 1 0 0 0 15 6h-.001l-7.95.006A1 1 0 0 0 6.05 7L6 14.994A1 1 0 0 0 6.994 16H7a1 1 0 0 0 1-.994l.035-5.557 8.258 8.258a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414Z"
      clipRule="evenodd"
    />
  </svg>
);
export default DiagonalLeftUp;
