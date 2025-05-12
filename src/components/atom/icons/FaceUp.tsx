import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const FaceUp = ({ size, viewBoxSize, ...props }: Props) => (
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
      stroke="#747474"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 9.75V9m-5.25.75V9M9 15s.75 2.25 3.375 2.25S15.75 15 15.75 15m6-2.625a9.375 9.375 0 1 1-18.75 0 9.375 9.375 0 1 1 18.75 0Z"
    />
  </svg>
);
export default FaceUp;
