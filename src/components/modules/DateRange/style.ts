import styled from '@emotion/styled';

export const DateRangeWrap = styled.div`
  width: fit-content;
  .box_daterange_input {
    width: 100%;
  }

  .react-datepicker {
    box-shadow: none;
  }

  &:has(.react-datepicker__month-dropdown),
  &:has(.react-datepicker__year-dropdown) {
    .react-datepicker__month-container:last-of-type,
    .react-datepicker__year-container:last-of-type {
      display: none;
    }
    .react-datepicker__navigation {
      display: none;
    }

    .react-datepicker__month {
      visibility: hidden;
    }

    .react-datepicker__year-option {
      &:first-of-type,
      &:last-of-type {
        display: none;
      }
    }

    .react-datepicker__header {
      position: relative;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4rem;
        z-index: 100;
      }
    }

    .react-datepicker__year {
      display: none;
    }

    .react-datepicker__year-read-view--down-arrow {
      display: none;
    }

    .react-datepicker__year-dropdown-container,
    .react-datepicker__month-dropdown-container {
      margin: 0;
    }
    .react-datepicker__year-dropdown-container {
      margin-right: 5px;
    }
  }
  &:has(.react-datepicker__year-dropdown) {
    .react-datepicker__month-read-view--selected-month {
      display: none;
      &:first-of-type {
        margin: 0;
      }
    }
    .react-datepicker__year-dropdown-container {
      margin-right: 0;
    }
  }

  .react-datepicker__year-option:has(
      .react-datepicker__navigation--years-upcoming
    ) {
    position: absolute !important;
    left: 15.3rem !important;
    top: -10.2rem !important;
  }

  .react-datepicker__header__dropdown {
    display: flex;
    justify-content: center;
    width: 100%;

    .react-datepicker__year-dropdown-container {
      order: 1;

      .react-datepicker__year-read-view--selected-year {
        &:after {
          content: '년';
        }
      }
    }
    .react-datepicker__month-dropdown-container {
      order: 2;
    }
  }
  .react-datepicker__month-container:not(:last-of-type) {
    .react-datepicker__current-month {
      display: none;
    }
    .react-datepicker__month-read-view,
    .react-datepicker__year-read-view {
      display: flex;

      align-items: center;

      justify-content: center;
      font-weight: 800;
      font-size: var(--font-size4);
      height: 2.4rem;
      line-height: 1.5;
      color: var(--color-neutral10);
    }

    .react-datepicker__month-read-view--selected-month,
    .react-datepicker__year-read-view--selected-year {
      visibility: visible;
    }

    .react-datepicker__month-read-view--down-arrow,
    .react-datepicker__year-read-view--down-arrow {
      visibility: visible;
      margin-top: 0.5rem;
      border-color: var(--color-neutral10);
    }

    .react-datepicker__month-dropdown,
    .react-datepicker__year-dropdown {
      position: absolute;
      display: grid;
      left: 0;
      top: 5rem;
      z-index: 10;
      grid-template-columns: repeat(3, 1fr);
      width: 100%;
      height: 24.8rem;
      background: #fff;
      border: navajowhite;

      .react-datepicker__month-option,
      .react-datepicker__year-option {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 3.6rem;
        margin: 0.4rem 0.7rem 0.4rem 0.6rem;
        font-size: 1.4rem;
        z-index: 1;
        cursor: pointer;
        border-radius: 2.1rem !important;
        font-weight: 400;

        &:hover {
          background-color: var(--color-neutral95) !important;
          color: var(--color-neutral10) !important;
        }

        &.react-datepicker__month-option--selected_month,
        &.react-datepicker__year-option--selected_year {
          .react-datepicker__month-option--selected,
          .react-datepicker__year-option--selected {
            display: none;
          }
          background-color: var(--color-blue60) !important;
          color: #fff !important;
        }
      }
    }
  }
`;

export const DateRageBox = styled.div`
  position: absolute;
  z-index: 100;
  margin-top: 0.4rem;
  padding: 2rem;
  border: 1px solid var(--color-neutral90);
  border-radius: 8px;
  box-shadow: 0px 4px 8px 0px rgba(16, 24, 40, 0.05);
  background: #fff;
  .area_calendar {
    display: flex;
    .box_btn {
      display: flex;
      flex-direction: column;
      margin-left: 2.1rem;

      button {
        display: flex;
        width: 12.3rem;
        height: 4.4rem;
        margin-bottom: 0.4rem;
        padding: 1.2rem 1.6rem;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        cursor: pointer;
        background: #fafbfc;

        &:hover {
          background: #eee;
        }
      }
    }
  }

  .area_direct_input {
    display: flex;
    dl {
      dt {
        color: var(--color-blue-gray50);
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.44rem;
      }
      dd {
        margin-top: 1.1rem;
        input {
          display: flex;
          width: 13rem;
          height: 4rem;
          padding: 1rem 1.6rem;
          align-items: center;
        }
      }
    }
    .bar {
      margin: 3.6rem 1.2rem 0;
      color: var(--color-blue-gray50);
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 1.68rem;
    }
  }
`;

export const DiffDateRangerWrap = styled.div`
  display: flex;
  align-items: center;

  .box_daterange_input {
    margin: 0 1rem;
  }
`;
