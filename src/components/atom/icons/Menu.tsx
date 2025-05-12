import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const Menu = ({ size, viewBoxSize, ...props }: Props) => (
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
      d="M3.948 6h16.103c.522 0 .95.427.95.949v.102a.952.952 0 0 1-.95.949H3.948A.95.95 0 0 1 3 7.051v-.102A.95.95 0 0 1 3.948 6Zm16.103 5H3.948a.95.95 0 0 0-.948.949v.102a.95.95 0 0 0 .948.949h16.103a.952.952 0 0 0 .95-.949v-.102a.952.952 0 0 0-.95-.949Zm0 5H3.948a.95.95 0 0 0-.948.949v.102a.95.95 0 0 0 .948.949h16.103a.952.952 0 0 0 .95-.949v-.102a.952.952 0 0 0-.95-.949Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Menu;
