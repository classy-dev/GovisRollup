import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const FaceDown = ({ size, viewBoxSize, ...props }: Props) => (
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
      d="M14.625 9.375v-.75m-5.25.75v-.75m-.75 7.5s.75-1.5 3.375-1.5 3.375 1.5 3.375 1.5m6-4.125a9.375 9.375 0 1 1-18.75 0 9.375 9.375 0 1 1 18.75 0Z"
    />
  </svg>
);
export default FaceDown;
