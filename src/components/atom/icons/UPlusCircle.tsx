import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const UPlusCircle = ({ size, viewBoxSize, ...props }: Props) => (
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
      d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 14.4a6.4 6.4 0 1 1 0-12.8 6.4 6.4 0 0 1 0 12.8Zm3.2-7.2h-2.4V8.8a.8.8 0 0 0-1.6 0v2.4H8.8a.8.8 0 0 0 0 1.6h2.4v2.4a.8.8 0 1 0 1.6 0v-2.4h2.4a.8.8 0 1 0 0-1.6Z"
    />
  </svg>
);
export default UPlusCircle;
