import { css } from '@emotion/react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  viewBoxSize?: number;
  customCss?: any;
};
const Homepage = ({ size, viewBoxSize, ...props }: Props) => (
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
      fill="#fff"
      fillRule="evenodd"
      d="M18.69 15.963 13 18.607V11.89l6-2.787v6.435c0 .174-.117.336-.31.424Zm-13.386 0c-.19-.087-.305-.25-.303-.431V9.104l6 2.787v6.718l-5.697-2.645Zm6.404-10.9a.687.687 0 0 1 .585 0l5.329 2.475L12 10.15 6.379 7.538l5.329-2.474Zm8.949 2.196c-.003-.008-.002-.017-.006-.025-.003-.008-.011-.013-.016-.021-.046-.076-.102-.143-.155-.213-.031-.034-.056-.072-.09-.101a2.523 2.523 0 0 0-.856-.678l-6.4-2.973-.002-.001a2.7 2.7 0 0 0-2.265 0L4.47 6.22a2.524 2.524 0 0 0-.857.677c-.037.03-.064.073-.097.11-.052.067-.105.132-.15.204-.004.009-.012.015-.016.023-.004.009-.003.018-.007.027A2.379 2.379 0 0 0 3 8.458v7.067c-.008.95.564 1.834 1.458 2.252l6.399 2.972a2.688 2.688 0 0 0 2.276 0l6.397-2.971c.892-.412 1.469-1.29 1.47-2.238V8.457a2.387 2.387 0 0 0-.344-1.198Z"
      clipRule="evenodd"
      opacity={0.7}
    />
  </svg>
);
export default Homepage;
