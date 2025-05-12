import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const HeadOffice = ({ size, viewBoxSize, ...props }: Props) => (
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
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      opacity={0.7}
    >
      <path d="M3 20.408h18M9.886 11.41H5.649v8.998h4.237v-8.997ZM18.355 4h-4.237v16.409h4.237V4Z" />
      <path d="M14.118 7.174H9.882V20.41h4.236V7.174Z" />
    </g>
  </svg>
);
export default HeadOffice;
