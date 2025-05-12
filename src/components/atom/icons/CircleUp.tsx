import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const CircleUp = ({ size, viewBoxSize, ...props }: Props) => (
  <svg
    css={css`
      ${props.customCss}
    `}
    xmlns="http://www.w3.org/2000/svg"
    width={size || 16}
    height={size || 16}
    fill="none"
    viewBox={`0 0 ${viewBoxSize || 24} ${viewBoxSize || 24}`}
    {...props}
  >
    <path
      fill="currentColor"
      d="M11.166 8.236c.43-.43 1.213-.43 1.642 0l4.548 4.547a1.159 1.159 0 0 1 0 1.642 1.159 1.159 0 0 1-1.642 0L12 10.712l-3.714 3.713c-.227.228-.53.354-.833.354-.304 0-.607-.126-.834-.354a1.159 1.159 0 0 1 0-1.642l4.547-4.547Z"
    />
    <path
      fill="currentColor"
      d="M12 0c6.619 0 12 5.381 12 12s-5.381 12-12 12S0 18.619 0 12 5.381 0 12 0Zm0 21.676c5.33 0 9.676-4.345 9.676-9.676 0-5.33-4.345-9.676-9.676-9.676-5.33 0-9.676 4.345-9.676 9.676 0 5.33 4.345 9.676 9.676 9.676Z"
    />
  </svg>
);
export default CircleUp;
