import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const Arrow2Right = ({ size, viewBoxSize, ...props }: Props) => (
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
      d="M5 13h11.865l-3.633 4.36a1 1 0 1 0 1.537 1.28l5-6c.039-.047.058-.102.087-.154.024-.042.053-.078.071-.124a.985.985 0 0 0 .072-.358L20 12l-.001-.004a.985.985 0 0 0-.072-.358c-.018-.046-.047-.082-.071-.124-.029-.052-.048-.107-.087-.154l-5-6a1.002 1.002 0 0 0-1.409-.128 1 1 0 0 0-.128 1.408L16.865 11H5a1 1 0 0 0 0 2Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Arrow2Right;
