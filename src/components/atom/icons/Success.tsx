import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const Success = ({ size, viewBoxSize, ...props }: Props) => (
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
      d="M15.663 3.773A9 9 0 1 0 21 12v-.919a1 1 0 1 1 2 0V12A11.002 11.002 0 0 1 8.188 22.313a11 11 0 1 1 8.289-20.366 1 1 0 1 1-.814 1.826Z"
      clipRule="evenodd"
    />
    <path
      fill="#747474"
      fillRule="evenodd"
      d="M22.707 3.293a1 1 0 0 1 0 1.414l-10 10.01a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L12 12.595l9.293-9.302a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Success;
