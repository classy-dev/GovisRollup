import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const DiagonalRightDown = ({ size, viewBoxSize, ...props }: Props) => (
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
      d="M17 8a1 1 0 0 0-1 1v5.586L7.707 6.293a.999.999 0 1 0-1.414 1.414L14.586 16H9a1 1 0 1 0 0 2h8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Z"
      clipRule="evenodd"
    />
  </svg>
);
export default DiagonalRightDown;
