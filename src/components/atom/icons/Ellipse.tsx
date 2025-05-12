import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};

const Ellipse = ({ size, viewBoxSize, ...props }: Props) => (
  <svg
    css={css`
      ${props.customCss}
    `}
    xmlns="http://www.w3.org/2000/svg"
    width={size || 16}
    height={size || 17}
    viewBox="0 0 16 17"
    fill="none"
    {...props}
  >
    <circle cx="8" cy="8.25" r="8" fill="currentColor" />

    <path
      d="M2.66602 8.75H13.3327"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
export default Ellipse;
