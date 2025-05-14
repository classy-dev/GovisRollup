import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { BACKGROUND, INPUT, TEXTCOLOR } from "@ComponentFarm/token";
import { SVG_BASE64 } from "@svg/svg-base64";

export const datepickerGlobalStyle = css`
  .react-datepicker {
    color: var(--color-neutral10);
    background: #fff;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
    font: inherit;
    padding: 0;
    border: 0;
    border-radius: 0.4rem;
  }

  .react-datepicker-time__input .react-datepicker-time__input {
    width: 15rem !important;
    border: 1px solid #aeaeae;
    border-radius: 0.4rem;
    box-shadow: inset 0 2px 2px #e9e9e9;
    font-size: 1.3rem;
    line-height: 1.6rem;
    padding: 0.6rem 1rem 0.5rem;
  }

  .react-datepicker__aria-live {
    display: none;
  }

  & > div:not(.react-datepicker__tab-loop) {
    width: 100%;
  }

  .react-datepicker__monthPicker .react-datepicker__month-wrapper {
    display: none;
  }

  .react-datepicker__input-container {
    position: relative;
    display: inline-flex;
    align-items: center;

    width: 100%;
    height: ${INPUT.height};
    font-size: ${INPUT.fontSize};
    border: 1px solid ${INPUT.border};
    border-radius: 0.4rem;

    -webkit-transition: border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    input {
      width: 100%;
      height: 100%;
      border: none;
      color: inherit;
      border-radius: inherit;
      padding: 0;
      font: inherit;
      padding: 0 2.8rem 0 1.2rem;
    }

    &.disabled {
      background: var(--color-neutral95);

      input {
        background: var(--color-neutral95);
      }
    }

    &:after {
      content: "";
      position: absolute;
      top: 50%;
      margin-top: -0.8rem;
      width: 1.6rem;
      height: 1.6rem;
      right: 1.2rem;
      background: url(${SVG_BASE64.icon_calendar}) no-repeat left top / 100%;
    }

    &:focus-within {
      border-color: ${INPUT.focusBorder};
    }

    &::-webkit-input-placeholder,
    &::-moz-placeholder,
    &:-ms-input-placeholder,
    &:-moz-placeholder {
      color: ${INPUT.placeholder};
    }
  }

  .react-datepicker__month-container {
    width: 37.5rem;
    padding: 3.2rem 1.6rem;
  }

  .react-datepicker__month {
    margin: 0;
  }

  .react-datepicker__header {
    padding: 3.2rem 1.6rem 0;
  }

  .react-datepicker__month-container,
  .react-datepicker__header {
    border-radius: inherit;
  }

  .react-datepicker__day-names,
  .react-datepicker__week {
    display: flex;
    flex-wrap: nowrap;
  }

  .react-datepicker-wrapper {
    height: 100%;
  }

  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow,
  .react-datepicker__navigation-icon::before {
    width: 0.7rem;
    height: 0.7rem;
    border-width: 1px 1px 0 0;
  }

  .react-datepicker__navigation {
    height: 4rem;
    width: 4rem;
    top: 0;
    position: absolute;
  }

  .react-datepicker__portal {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  .react-datepicker__header {
    padding: 0;
    border-bottom: 0;

    .react-datepicker__day-names {
      padding: 0;
    }
  }

  .react-datepicker__day--outside-month {
    color: #828282;
  }

  .react-datepicker__day {
    border-radius: 50%;

    &--disabled {
      opacity: 0.25;
      cursor: not-allowed;
    }

    &:not(.react-datepicker__day--disabled) {
      &:hover {
        background-color: ${BACKGROUND.rowHover} !important;
        color: ${TEXTCOLOR.default} !important;
        font-weight: 400;
      }
    }
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: ${TEXTCOLOR.default};
  }

  .react-datepicker__day-name,
  .react-datepicker__day {
    width: 4.9rem;
    height: 4.2rem;
    margin: 0;
    line-height: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }

  .react-datepicker__day {
    position: relative;
    height: 3.6rem;
    margin: 0.4rem 0.7rem 0.4rem 0.6rem;
    font-size: 1.4rem;
    border-radius: 50%;
    z-index: 1;
  }

  .react-datepicker__day--today,
  .react-datepicker__month-text--today,
  .react-datepicker__quarter-text--today,
  .react-datepicker__year-text--today {
    font-weight: normal;
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    color: var(--color-neutral10);
  }

  .react-datepicker__day--outside-month {
    background: transparent !important;
    pointer-events: none !important;
    color: var(--color-gray6) !important;
  }

  .react-datepicker__current-month {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: var(--font-size4);
    height: 2.4rem;
    line-height: 1.5;
  }

  .react-datepicker__day-names {
    margin-top: 3.2rem;
    margin-bottom: 0;
  }

  .react-datepicker__navigation {
    top: 3.2rem;
    width: 2.4rem;
    height: 2.4rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${TEXTCOLOR.default};
  }

  .react-datepicker__navigation * {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M10.5 7.5L15 12L10.5 16.5' stroke='%23020202' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-position: center;
  }

  .react-datepicker__navigation *::before {
    content: none;
  }

  .react-datepicker__navigation:hover *::before {
    color: ${TEXTCOLOR.default};
  }

  .react-datepicker__navigation--next {
    right: 1.6rem;
  }

  .react-datepicker__navigation--previous {
    left: 1.6rem;
    transform: rotate(-180deg);
  }

  .react-datepicker__navigation-icon--next {
    right: 0;
    top: 0;
    &::before {
      left: -4px;
    }
  }
  .react-datepicker__navigation-icon--previous {
    left: 0;
    top: 0;
    &:before {
      right: -4px;
    }
  }

  .react-datepicker__header {
    background: var(--color-gray-1);
  }

  .react-datepicker {
    svg:not(.gv-button) {
      position: absolute;
      width: 18px;
      height: 18px;
      right: 10px;
      top: 10px;
      color: #828282;
      pointer-events: none;
    }

    &__none-editable {
      width: 100%;
      min-height: 39px;
      background: transparent;
      border: 0;
    }
  }

  // hide
  .react-datepicker-popper[data-placement^="top"]
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^="top"]
    .react-datepicker__triangle::after,
  .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle::after {
    content: none;
  }

  .react-datepicker__day:hover,
  .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover,
  .react-datepicker__year-text:hover {
    border-radius: 50%;
  }

  .react-datepicker-popper[data-placement^="bottom"] {
    padding-top: 0.4rem;
  }

  .react-datepicker__time-list-item--selected {
    background-color: blue;
    color: #fff;
    font-weight: 900;
  }

  .react-datepicker-popper {
    z-index: 4;
  }

  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month--in-range {
    font-weight: 400;
    &::before {
      position: absolute;
      content: "";
      height: 100%;
      margin: 0 -0.7rem;
      background: #ededfc;
      left: 0;
      right: 0;
      z-index: -1;
    }

    &.react-datepicker__day--keyboard-selected {
      background: transparent !important;
      border: 0 !important;
    }

    &.react-datepicker__day--range-start,
    &.react-datepicker__day--selecting-range-start {
      background-color: var(--color-blue60) !important;
      color: var(--color-gray1) !important;
      border-radius: 50%;
      font-weight: 900;

      &:before {
        margin-left: 50%;
        z-index: -2;
      }

      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: inherit;
        z-index: -1;
        border-radius: inherit;
      }
    }

    &.react-datepicker__day--selecting-range-end,
    &.react-datepicker__day--range-end {
      &:not(.react-datepicker__day--outside-month) {
        background-color: var(--color-blue60) !important;
        color: var(--color-gray1) !important;
        border-radius: 50%;
        font-weight: 900;
      }

      &:before {
        margin-right: 50%;
        z-index: -2;
      }

      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: inherit;
        z-index: -1;
        border-radius: inherit;
      }
    }

    &.react-datepicker__day--outside-month,
    &.react-datepicker__day--selecting-range-start.react-datepicker__day--selecting-range-end,
    &.react-datepicker__day--range-start.react-datepicker__day--range-end {
      &::before {
        content: none;
      }
    }
  }

  .react-datepicker__day--selected,
  .react-datepicker__month--selected,
  .react-datepicker__day--range-start,
  .react-datepicker__month--range-start,
  .react-datepicker__month--range-end {
    background-color: var(--color-blue60) !important;
    color: var(--color-gray1) !important;
    border-radius: 50%;
    font-weight: 900;
  }

  .react-datepicker__day--selected {
    &.react-datepicker__day--outside-month {
      background: transparent !important;
    }
  }

  .react-datepicker__day--keyboard-selected {
    background: transparent;
    border: 1px solid var(--color-blue60);

    &[aria-selected="false"] {
      border: none;
    }
    &.react-datepicker__day--outside-month {
      background: transparent !important;
    }
  }

  .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle::after {
    border-bottom-color: #fff;
  }
`;

export const DateInputWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;

  width: 100%;
  height: ${INPUT.height};
  font-size: ${INPUT.fontSize};
  border: 1px solid ${INPUT.border};
  border-radius: 0.4rem;

  -webkit-transition: border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  input {
    width: 100%;
    height: 100%;
    border: none;
    color: inherit;
    border-radius: inherit;
    padding: 0;
    font: inherit;
    padding: 0 2.8rem 0 1.2rem;
  }

  &.disabled {
    background: var(--color-neutral95);

    input {
      background: var(--color-neutral95);
    }
  }

  .ico {
    position: absolute;
    top: 50%;
    margin-top: -0.8rem;
    width: 1.6rem;
    height: 1.6rem;
    right: 1.2rem;
  }

  &:focus-within {
    border-color: ${INPUT.focusBorder};
  }

  &::-webkit-input-placeholder,
  &::-moz-placeholder,
  &:-ms-input-placeholder,
  &:-moz-placeholder {
    color: ${INPUT.placeholder};
  }
`;
