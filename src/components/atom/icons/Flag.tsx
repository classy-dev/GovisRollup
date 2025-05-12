import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const Flag = ({ size, viewBoxSize, ...props }: Props) => (
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
      d="M18.08 5 10 4.33l-3-.25V3a1 1 0 0 0-2 0v18a1 1 0 1 0 2 0v-7.08l3-.25 8.08-.67a1 1 0 0 0 .92-1V6a1 1 0 0 0-.92-1ZM9 11.75l-2 .16V6.09l2 .16v5.5Zm4-.34-2 .17V6.42l2 .17v4.82Zm4-.33-2 .17v-4.5l2 .17v4.16Z"
    />
  </svg>
);
export default Flag;
