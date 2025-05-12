import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const More = ({ size, viewBoxSize, ...props }: Props) => (
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
      fill="currentColor"
      d="M11.991 10.024c1.072 0 1.929.878 1.929 1.976 0 1.098-.857 1.976-1.929 1.976-1.071 0-1.928-.878-1.928-1.976 0-1.098.857-1.976 1.928-1.976Zm-1.928-5.048c0 1.097.857 1.975 1.928 1.975 1.072 0 1.929-.878 1.929-1.975C13.92 3.878 13.063 3 11.991 3c-1.071 0-1.928.878-1.928 1.976Zm0 14.048c0 1.098.857 1.976 1.928 1.976 1.072 0 1.929-.878 1.929-1.976 0-1.097-.857-1.975-1.929-1.975-1.071 0-1.928.878-1.928 1.975Z"
    />
  </svg>
);
export default More;
