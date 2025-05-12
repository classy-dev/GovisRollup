import { css } from "@emotion/react";
import styled from "@emotion/styled";

import {
  BACKGROUND,
  Badge,
  COLOR,
  FONT,
  INPUT,
  LABEL,
  LINE_HEIGHTS,
  TABS,
  TEXTCOLOR,
  Button,
  TABLE,
} from "@ComponentFarm/token";
import {
  DateInputWrapper,
  datepickerGlobalStyle,
} from "./modules/DatePicker/style";

export const breakpoints = [200, 767, 800, 1200, 1600];
export const mq = breakpoints.map(
  (bp, i) =>
    `@media (min-width:${breakpoints[i]}px) and (max-width: ${
      breakpoints[i + 1]
    }px)`
);
export const folder = `@media (max-width: 359px)`;

const pretendardTypes = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const pretendard = pretendardTypes.map(
  (weight) => css`
    @font-face {
      font-family: "Pretendard";
      font-style: normal;
      font-weight: ${weight === 400 ? "normal" : weight};
      src: local("Pretendard"),
        url("/font/Pretendard-${weight}.woff") format("woff"),
        url("/font/Pretendard-${weight}.woff2") format("woff2");
    }
  `
);

const flexPositions = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  between: "space-between",
} as const;

// CSS Variables Setting

const forVariables = (obj: any, fn: any) =>
  Object.entries(obj).map(fn).join("\n");

const createVariables = (property: any, varName: any) =>
  forVariables(
    property,
    ([name, value]: any) => `--${varName}-${name} : ${value};`
  );

const resetDefault = css`
  /* CSS Document */

  :root {
    ${createVariables(COLOR, "color")}
    ${createVariables(TEXTCOLOR, "textcolor")}
    ${createVariables(BACKGROUND, "bg")}
    ${createVariables(FONT, "font")}
    ${createVariables(LINE_HEIGHTS, "lineheight")}
    ${createVariables(INPUT, "input")}
    ${createVariables(LABEL, "label")}
    ${createVariables(TABS, "tabs")}
    ${createVariables(Badge, "bage")}
    ${createVariables(Button, "button")}
    ${createVariables(TABLE, "table")}
    --swiper-navigation-size : 8rem;
  }

  /* Type Selector */
  * {
    outline: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-touch-callout: none;
  }

  html {
    font-size: 10px;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }
  body {
    overflow-x: hidden;
    max-width: 100vw;

    color: var(--textcolor-default);
    font-size: var(--font-size4);
    font-weight: var(--font-regular);
    line-height: var(--lineheight-text);

    &.overflowhidden {
      overflow: hidden;
    }
    &.bg_gray {
      background-color: #f9faff;
    }
  }

  #__next {
    height: 100%;
  }

  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  form,
  fieldset,
  p,
  blockquote,
  button,
  figure,
  table {
    margin: 0;
    padding: 0;
    font-family: "Pretendard", "Noto Sans KR", "Helvetica Neue", Helvetica,
      Arial, sans-serif;
    line-height: normal;
  }

  img,
  fieldset,
  button {
    border: 0 none;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  dt,
  dd {
    display: block;
  }

  input {
    border: transparent;
    outline: none;

    &::placeholder {
      color: #ccc !important;
    }
  }

  input[type="text"]::-ms-clear {
    display: none;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  a {
    border: 0;
    cursor: pointer;
  }

  a:link {
    color: var(--color-neutral10);
    text-decoration: none;
  }
  a:visited {
    color: var(--color-neutral10);
    text-decoration: none;
  }
  a:focus {
    color: var(--color-neutral10);
    text-decoration: none;
  }
  a:hover {
    color: var(--color-neutral10);
    text-decoration: none;
  }
  a:active {
    color: var(--color-neutral10);
    text-decoration: none;
  }

  em {
    font-style: normal;
  }

  table {
    border-collapse: collapse;
    table-layout: fixed !important;
    border-spacing: 0;
  }

  fieldset,
  button {
    border: none;
    font-size: 100%;
  }
  hr,
  legend {
    display: none;
    clear: both;
  }

  hr {
    display: none;
  }

  caption {
    visibility: hidden;
    overflow: hidden;
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
  }
  iframe {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: var(--font-size8);
    font-weight: var(--font-bold);
    line-height: var(--lineheight-heading);
  }

  h2 {
    font-size: var(--font-size5);
    font-weight: var(--font-semibold);
    line-height: var(--lineheight-heading);
  }

  h3 {
    font-size: var(--font-size4);
    font-weight: var(--font-semibold);
    line-height: var(--lineheight-heading);
  }

  label {
    display: block;
    margin-bottom: 11px;
    color: var(--textcolor-label);
    vertical-align: middle;
    cursor: pointer;

    .acitve {
      color: var(--textcolor-labelActive);
    }

    &:not(.small) {
      font-size: var(--input-fontsize);
    }
    font-weight: var(--font-regular);
    line-height: var(--lineheight-text);

    &.small {
      font-size: var(--label-fontsize);
    }
  }

  /* svg {
    path:not([fill='none']) {
      fill: currentColor;
    }
  } */

  input[type="checkbox"] {
    margin: 0;
  }

  input.inp,
  select,
  textarea {
    width: 100%;
    height: var(--input-height);
    font-size: var(--input-fontsize);
    border: 1px solid var(--input-border);
    border-radius: 0.6rem;

    &::placeholder {
      color: var(--input-placeholder);
    }

    &:focus {
      border: 1px solid var(--input-focusBorder);

      &::placeholder {
        color: var(--input-focusPlaceholder);
      }
    }

    &:disabled {
      border: none;
      box-shadow: 0px 0px 0px 1px rgba(134, 143, 160, 0.24);
      background: var(--bg-inputDisabled, #f7f9fc);

      &::placeholder {
        color: var(--inut-disabledPlaceholder);
      }
    }
  }

  input.inp {
    padding: 1rem 1.2rem;
  }

  button {
    &:disabled {
      color: var(--textcolor-buttonDisabled);
      cursor: not-allowed !important;
    }

    &.btn_reset {
      min-width: auto;
      height: 4.4rem;
      padding: 0px;
      color: var(--color-neutral60);
    }
  }

  input {
    &:disabled {
      color: var(--textcolor-inputDisabled);
    }
  }

  select {
    padding: 0.8rem 1.2rem;
    appearance: none;
    background: url("/images/common/ico_sel_arrow.svg") no-repeat #fff
      calc(100% - 12px) 50%;
  }

  .helper-text {
    &:not(.small) {
      font-size: var(--font-size4);
    }
    font-weight: var(--font-regular);
    line-height: var(--lineheight-text);

    &.small {
      font-size: var(--font-size2);
    }
  }

  textarea {
    width: 100%;
    height: 15.6rem;
    padding: 1rem 1.4rem;
    border: 1px solid var(--input-border);
    border-radius: 0.6rem;
    box-sizing: border-box;
    overflow: auto;
    resize: none;
    font: inherit;
  }

  .box_inp.error {
    input,
    select,
    textarea,
    ${DateInputWrapper} {
      border: 1px solid red;
    }

    ${DateInputWrapper} input {
      border: none;
    }

    .no-image {
      border: 1px solid var(--color-red50);
    }
  }

  .box_checkbox_group,
  .box_radio_group {
    display: flex;
    align-items: baseline;
  }

  *:-webkit-auto:fill {
    -webkit-box-shadow: 0 0 0px 100rem white inset;
  }

  .select_library_control {
    .css-14kasqh-indicatorContainer {
      svg {
        width: 2rem;
        height: 2rem;
      }
    }
  }

  a.download-link {
    display: inline-flex;
    padding: 1.2rem 1.6rem;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.4;
    border-radius: 0.4rem;
    color: var(--color-blue60);
    border: 1px solid currentColor;
  }

  a.link_more {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 0;
    color: var(--color-neutral10);
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2rem;

    &:after {
      display: block;
      content: "";
      width: 1.6rem;
      height: 1.6rem;
      background: url("/images/common/arrow_right.svg") no-repeat left center /
        1.6rem;
    }
  }

  a.link_popup {
    display: inline-flex;
    appearance: none;
    align-items: center;
    justify-content: center;
    text-decoration: underline;
    color: var(--color-blue60);
    background: transparent;
    cursor: pointer;
  }

  .remove-icon {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-red50);
    cursor: pointer;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-pagination-bullet {
    width: 1rem;
    height: 1rem;
    background: #d9d9d9;
    opacity: 1;

    &:hover {
      background: var(--color-blue60);
    }
  }

  .swiper-pagination-bullet-active {
    background: var(--color-blue60);
  }

  /* input.inp,
  select,
  textarea {
    width: 100%;
    height: var(--input-height);
    font-size: 1.6rem;
    border: 1px solid var(--color-gray5);
    border-radius: 2px;
    transition:
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    }

    &.s {
      width: var(--input-small);
    }
    &.m {
      width: var(--input-middle);
    }
    &.l {
      width: var(--input-large);
    }
  } */

  /* input.inp {
    padding: 0 0.7rem;

    &::placeholder {
      color: #ddd;
    }
  }

  select {
    padding: 0 1.6rem;
    appearance: none;
    background: url('https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/ico_sel_arrow.svg')
      no-repeat #fff 95% 50%;
  } */

  .react-datepicker-wrapper {
    width: 100%;
  }

  .hiddenZone {
    display: none;
  }
  .hiddenZoneV {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
    *visibility: hidden;
  }

  .txt_login {
    width: 52rem;
    font-size: 1.5rem !important;
    color: #828282;
    margin-top: 0.5rem;
    text-align: left;
    line-height: 1.5 !important;
  }

  @media (min-width: 1400px) and (max-width: 1530px) {
    html {
      font-size: 9px;
    }
  }
  @media (min-width: 1200px) and (max-width: 1400px) {
    html {
      font-size: 8px;
    }
  }
  @media (min-width: 1000px) and (max-width: 1200px) {
    html {
      font-size: 7px;
    }
  }
  @media (min-width: 900px) and (max-width: 1000px) {
    html {
      font-size: 6px;
    }
  }
  @media (min-width: 768px) and (max-width: 900px) {
    html {
      font-size: 5px;
    }
  }
  @media (min-width: 700px) and (max-width: 768px) {
    html {
      font-size: 4px;
    }
  }
  @media (min-width: 600px) and (max-width: 700px) {
    html {
      font-size: 3px;
    }
  }
  @media (max-width: 500px) {
    html {
      font-size: 2px;
    }
  }

  ${pretendard}
`;

export const reset = css`
  ${resetDefault}
  ${pretendard}
  ${datepickerGlobalStyle}
`;

export const Content = styled.div`
  padding: 24px;
`;

export const FormWrap = styled.div`
  h2 {
    margin-bottom: 3.2rem;
    padding: 3.2rem 0;
    font-size: 1.8rem;
    font-weight: bold;
    border-bottom: 1px solid var(--color-neutral90);
  }
  h3 {
    margin-bottom: 0.8rem;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2.1rem;
  }

  .line {
    display: flex;
    margin-top: 3.2rem;
  }
  .field {
    display: flex;
    padding-right: 5.6rem;
  }
  h4 {
    flex: none;
    width: 31.2rem;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2rem;
  }

  label {
    &:not(.label_radio):not(.label_check) {
      flex: none;
      width: 31.2rem;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 600;
      line-height: 2rem;

      &.req {
        &:after {
          display: inline-block;
          content: "*";
          color: red;
          vertical-align: middle;
          margin-left: 0.4rem;
        }
      }
    }
  }

  td,
  th {
    &.req {
      &:after {
        display: inline-block;
        content: "*";
        color: red;
        vertical-align: middle;
        margin-left: 0.4rem;
      }
    }
  }

  .box_checkbox_group label {
    width: auto !important;
  }

  .box_inp {
    align-items: center;
    width: 100%;

    .wrap_txt_inp {
      display: flex;
      align-items: center;
      .txt_addition {
        margin-left: 0.4rem;
      }
    }
  }
  .box_upload_image {
    display: flex;
    width: 100%;

    label {
      width: auto !important;
    }
    .box_inp {
      width: 40rem;
      margin: 0 auto;
    }
  }
`;

export default reset;

export const IconViewArea = styled.span<{ size: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => `${props.size / 10}rem`};
  height: ${(props) => `${props.size / 10}rem`};
`;

export const TableWrap = styled.div`
  overflow: hidden;
  width: fit-content;
  height: fit-content;
  border: 1px solid var(--color-neutral90);
  border-radius: 0.6rem;

  &.overflow-visible {
    overflow: visible;
  }

  .caption {
    display: flex;
    padding: 1.2rem 2rem;
    width: 100%;
    align-items: center;
    gap: 0 1.2rem;
    border-bottom: 1px solid var(--color-neutral90);

    .title {
      margin-bottom: 0;
    }
  }
`;

export const Table = styled.table`
  th,
  td {
    text-align: left;
    padding-left: 2rem;

    &.left {
      text-align: left;
    }

    &.right {
      text-align: right;
      padding-left: 0 !important;
      padding-right: 2rem !important;
    }

    &.center {
      text-align: center;
      padding-left: 1rem !important;
      padding-right: 1rem !important;
    }
  }

  th {
    border-bottom: 1px solid var(--color-neutral90);
  }

  .th_title {
    display: inline-flex;
    align-items: center;
  }

  td {
    min-height: 4.9rem;
    border-top: 1px solid var(--color-neutral90);

    span[aria-busy="true"] {
      display: block;
      width: 100%;
    }

    .wrap_skeleton {
      display: flex;
      min-height: 2.5rem;
    }
  }

  &.basic {
    width: 100%;
    background-color: var(--color-gray1);
    tr:not(.empty) {
      &:hover {
        cursor: pointer;
        background: var(--color-indigo90);
      }
      &:last-of-type td {
        border-bottom: none;
      }
    }

    th {
      height: 4.8rem;
      padding-left: 2rem;
      color: var(--color-gray500);
      font-size: var(--font-size4);
      font-weight: 500;
      letter-spacing: 0.42px;
      word-break: keep-all;
      background: var(--color-blue_gray10);
    }

    td {
      padding: 1.2rem 0 1.2rem 2rem;
      color: var(--color-neutral10);

      &.code {
        color: var(--color-blue60);
      }
    }
  }

  &.horizon {
  }
`;

export const InnerTable = styled.table<{
  bordered?: boolean;
  fullWidth?: boolean;
}>`
  ${(props) => css`
    width: ${props.fullWidth ? "100%" : "auto"};
    min-width: ${props.fullWidth ? "0" : "100%"};
  `}

  text-align: left;
  table-layout: fixed;
  border-spacing: 0;
  color: var(--color-gray500);

  th,
  td {
    padding: 2rem;
    vertical-align: middle;
    white-space: nowrap;

    .bl-none {
      border-left: 0 !important;
    }

    .br-none {
      border-right: 0 !important;
    }
  }

  label {
    margin-bottom: 0;
    color: var(--color-gray500);
  }

  thead th,
  thead td {
    background: var(--table-headerBackground);
    text-align: center;
  }

  th {
    font-weight: 600;
  }

  td {
    font-weight: 500;
  }

  ${(props) =>
    props.bordered &&
    css`
      border: 1px solid var(--color-neutral90);
      border-left: 0;
      border-right: 0;

      th,
      td {
        border: 1px solid var(--color-neutral90);
      }
    `}
`;

export const ListFilterStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3.2rem 0;
  gap: 1.6rem;

  .group {
    flex: none;
    width: fit-content;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0 1.6rem;

    justify-content: flex-start;
  }

  .divider {
    flex: none;
    align-self: center;
    display: flex;
    width: 100%;
    margin: 0.8rem 0;
  }

  ${Object.entries(flexPositions).map(
    ([key, val]) => `&.justify-${key} { justify-content: ${val}; }`
  )}

  ${Object.entries(flexPositions).map(
    ([key, val]) => `&.align-${key} { align-items: ${val}; }`
  )}
`;
