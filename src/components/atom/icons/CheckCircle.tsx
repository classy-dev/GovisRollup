import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const CheckCircle = ({ size, viewBoxSize, ...props }: Props) => (
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
      stroke="#747474"
      d="m10.076 13.444.354.353.354-.354 4.288-4.298.001-.001a.5.5 0 0 1 .704 0v.001a.5.5 0 0 1 0 .71v.001l-5 4.999a.499.499 0 0 1-.704 0l-2.349-2.358-.014-.014-.015-.013a.5.5 0 1 1 .705-.705l.013.015.013.014 1.65 1.65ZM6.722 4.1a9.5 9.5 0 1 1 10.556 15.798A9.5 9.5 0 0 1 6.722 4.101Zm.556 14.966a8.5 8.5 0 1 0 9.444-14.135 8.5 8.5 0 0 0-9.444 14.135Z"
    />
  </svg>
);
export default CheckCircle;
