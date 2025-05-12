import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const DiagonalRightUp = ({ size, viewBoxSize, ...props }: Props) => (
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
      d="M17.993 7.049a1 1 0 0 0-.994-1L9.006 6H9a1 1 0 0 0-.006 2l5.558.036-8.259 8.258a.999.999 0 1 0 1.414 1.414l8.288-8.288L16 15A1 1 0 0 0 17 16h.001a1 1 0 0 0 1-1.001l-.008-7.95Z"
      clipRule="evenodd"
    />
  </svg>
);
export default DiagonalRightUp;
