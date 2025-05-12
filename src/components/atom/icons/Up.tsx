import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const Up = ({ size, viewBoxSize, ...props }: Props) => (
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
      d="M18 15a.995.995 0 0 1-.64-.232l-5.371-4.476-5.362 4.315a.999.999 0 1 1-1.253-1.558l6-4.828a.998.998 0 0 1 1.266.011l6 5A1 1 0 0 1 18 15Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Up;
