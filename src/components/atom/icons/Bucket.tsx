import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const Bucket = ({ size, viewBoxSize, ...props }: Props) => (
  <svg
    css={css`
      ${props.customCss}
    `}
    xmlns="http://www.w3.org/2000/svg"
    width={size || 16}
    height={size || 16}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      d="M11.6668 8.33333L11.4168 14.1667M8.5835 14.1667L8.3335 8.33333M5.00016 5L5.70903 15.633C5.77907 16.6836 6.65167 17.5 7.7046 17.5H12.2957C13.3487 17.5 14.2213 16.6836 14.2913 15.633L15.0002 5M5.00016 5H7.50016M5.00016 5H3.3335M15.0002 5H16.6668M15.0002 5H12.5002M12.5002 5V4.5C12.5002 3.39543 11.6047 2.5 10.5002 2.5H9.50016C8.39559 2.5 7.50016 3.39543 7.50016 4.5V5M12.5002 5H7.50016"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Bucket;
