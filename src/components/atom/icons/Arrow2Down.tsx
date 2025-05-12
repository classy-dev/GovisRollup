import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const Arrow2Down = ({ size, viewBoxSize, ...props }: Props) => (
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
      d="M18.768 13.36a1 1 0 0 0-1.408-.128L13 16.865V5a1 1 0 0 0-2 0v11.865l-4.36-3.633a1 1 0 1 0-1.28 1.536l6 5c.047.04.103.059.155.089.041.024.077.052.122.07A.992.992 0 0 0 12 20a.992.992 0 0 0 .363-.073c.045-.018.081-.046.122-.07.052-.03.108-.049.155-.089l6-5a1 1 0 0 0 .128-1.408Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Arrow2Down;
