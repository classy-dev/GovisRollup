import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const Export = ({ size, viewBoxSize, ...props }: Props) => (
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
      d="M20 17v2c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v1h12v-1c0-.55.45-1 1-1s1 .45 1 1Zm-3.2-6.6a1 1 0 0 1-.2 1.4l-4 3a.998.998 0 0 1-1.175.018l-4-2.814a.999.999 0 0 1-.243-1.393 1 1 0 0 1 1.394-.243l2.442 1.718a.2.2 0 0 0-.01-.039c-.004-.015-.008-.03-.008-.047V4a1 1 0 0 1 2 0v8l2.4-1.8a.999.999 0 0 1 1.4.2Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Export;
