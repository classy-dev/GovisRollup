import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const Right = ({ size, viewBoxSize, ...props }: Props) => (
  <svg
    css={css`
      ${props.customCss}
    `}
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M6 12c0-.15.05-.302.155-.427l2.984-3.58-2.877-3.575a.666.666 0 1 1 1.039-.836l3.218 4c.2.247.197.601-.007.845l-3.333 4A.667.667 0 0 1 6 12Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Right;
