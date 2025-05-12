import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const Arrow2Up = ({ size, viewBoxSize, ...props }: Props) => (
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
      d="M5.232 10.64a1 1 0 0 0 1.408.128L11 7.135V19a1 1 0 0 0 2 0V7.135l4.36 3.633a1 1 0 1 0 1.28-1.536l-6-5c-.047-.04-.103-.059-.155-.089-.041-.024-.077-.052-.122-.07A.992.992 0 0 0 12 4a.992.992 0 0 0-.363.073c-.045.018-.081.046-.122.07-.052.03-.108.05-.155.09l-6 5a1 1 0 0 0-.128 1.407Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Arrow2Up;
