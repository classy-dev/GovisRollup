import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const Done = ({ size, viewBoxSize, ...props }: Props) => (
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
      d="M10.427 2.421a3.146 3.146 0 0 1 3.146 0l5.936 3.427a3.146 3.146 0 0 1 1.573 2.725v6.854c0 1.124-.6 2.163-1.573 2.724l-5.936 3.427a3.146 3.146 0 0 1-3.146 0l-5.936-3.427a3.146 3.146 0 0 1-1.573-2.724V8.573c0-1.124.6-2.163 1.573-2.725l5.936-3.427Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9 12 2 2 4-4"
    />
  </svg>
);
export default Done;
