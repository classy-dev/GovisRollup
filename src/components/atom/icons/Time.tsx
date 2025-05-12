import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const Time = ({ size, viewBoxSize, ...props }: Props) => (
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
      d="M12.7 6.667a.7.7 0 1 0-1.4 0h1.4Zm-.7 6h-.7a.7.7 0 0 0 .7.7v-.7Zm4 .7a.7.7 0 1 0 0-1.4v1.4ZM12 3.3A8.702 8.702 0 0 0 3.3 12h1.4c0-4.03 3.27-7.3 7.3-7.3V3.3ZM3.3 12c0 4.803 3.897 8.7 8.7 8.7v-1.4c-4.03 0-7.3-3.27-7.3-7.3H3.3Zm8.7 8.7c4.803 0 8.7-3.897 8.7-8.7h-1.4c0 4.03-3.27 7.3-7.3 7.3v1.4Zm8.7-8.7c0-4.803-3.897-8.7-8.7-8.7v1.4c4.03 0 7.3 3.27 7.3 7.3h1.4Zm-9.4-5.333v6h1.4v-6h-1.4Zm.7 6.7h4v-1.4h-4v1.4Z"
    />
  </svg>
);
export default Time;
