import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const CloseCircle = ({ size, viewBoxSize, ...props }: Props) => (
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
      d="M20.5 11.999a8.5 8.5 0 1 0-2.487 6.015A8.45 8.45 0 0 0 20.5 12Zm0 0L20 12h.5v-.001Zm-5.145-3.357.003.003a.5.5 0 0 1 0 .71l-2.3 2.29L12.7 12l.356.354 2.3 2.29v.001a.5.5 0 0 1 0 .71l-.002.003a.5.5 0 0 1-.71 0l-2.29-2.3L12 12.7l-.354.356-2.29 2.3h-.001a.5.5 0 0 1-.71 0l-.003-.002a.5.5 0 0 1 0-.71l2.3-2.29L11.3 12l-.356-.354-2.3-2.29a.504.504 0 0 1 .713-.713l2.29 2.3.354.356.354-.356 2.29-2.3h.001a.5.5 0 0 1 .71 0Zm3.355-3.365.006.007.007.006A9.5 9.5 0 1 1 5.29 18.723l-.006-.007-.007-.006A9.5 9.5 0 1 1 18.71 5.277Z"
    />
  </svg>
);
export default CloseCircle;
