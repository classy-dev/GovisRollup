import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const Arrow2Left = ({ size, viewBoxSize, ...props }: Props) => (
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
      d="M19 11H7.135l3.633-4.36a1 1 0 1 0-1.536-1.28l-5 6c-.039.047-.059.102-.088.154-.024.042-.053.078-.071.124a.985.985 0 0 0-.072.358L4 12l.001.004c0 .122.027.243.072.358.018.046.047.082.071.124.029.052.049.107.088.154l5 6a.999.999 0 1 0 1.536-1.28L7.135 13H19a1 1 0 0 0 0-2Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Arrow2Left;
