import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const DataFilled = ({ size, viewBoxSize, ...props }: Props) => (
  <svg
    css={css`
      ${props.customCss}
    `}
    xmlns="http://www.w3.org/2000/svg"
    width={size || 16}
    height={size || 16}
    fill="none"
    viewBox={`0 0 ${viewBoxSize || 16} ${viewBoxSize || 16}`}
  >
    <path
      d="M2 8C2 7.44772 2.44772 7 3 7H4C4.55228 7 5 7.44772 5 8V14C5 14.5523 4.55228 15 4 15H3C2.44772 15 2 14.5523 2 14V8Z"
      fill="currentColor"
    />
    <path
      d="M7 2C7 1.44772 7.44772 1 8 1H9C9.55228 1 10 1.44772 10 2V14C10 14.5523 9.55228 15 9 15H8C7.44772 15 7 14.5523 7 14V2Z"
      fill="currentColor"
    />
    <path
      d="M12 6C12 5.44772 12.4477 5 13 5H14C14.5523 5 15 5.44772 15 6V14C15 14.5523 14.5523 15 14 15H13C12.4477 15 12 14.5523 12 14V6Z"
      fill="currentColor"
    />
  </svg>
);
export default DataFilled;
