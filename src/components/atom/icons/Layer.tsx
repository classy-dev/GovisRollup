import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const Layer = ({ size, viewBoxSize, ...props }: Props) => (
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
      d="M17.76 15.54 12 18.847 6.24 15.54l1.694-.721 3.568 2.048a.994.994 0 0 0 .996 0l3.568-2.049 1.694.722Zm-6.258-2.673a.994.994 0 0 0 .996 0l3.568-2.049 1.694.722L12 14.847 6.24 11.54l1.694-.722 3.568 2.049ZM12 5.087l5.76 2.453L12 10.847 6.24 7.54 12 5.087Zm8.998 6.261a1.002 1.002 0 0 0-.607-.861l-2.152-.916 2.26-1.297a.999.999 0 0 0-.108-1.787l-8-3.407a.995.995 0 0 0-.783 0l-8 3.407a1 1 0 0 0-.106 1.787L5.76 9.571l-2.152.916a1 1 0 0 0-.106 1.787l2.258 1.297-2.152.916a1 1 0 0 0-.106 1.787l8 4.593a.994.994 0 0 0 .996 0l8-4.593a.999.999 0 0 0-.106-1.787l-2.152-.917 2.258-1.296a.999.999 0 0 0 .5-.926Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Layer;
