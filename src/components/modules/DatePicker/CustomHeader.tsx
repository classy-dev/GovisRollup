import React from 'react';
import styled from '@emotion/styled';
import { ArrowDownFilled } from '@ComponentFarm/atom/icons';

const DatePickerCustomHeader = styled.div`
  width: 33.75rem;
  button {
    background: none;
  }

  .react-datepicker__current-month {
    width: 100%;
  }

  .react-datepicker__navigation-icon {
  }

  .area_current_date {
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      position: static;
      width: 1.2rem;
      height: 1.2rem;
      margin-left: 0.2rem;
      path {
        fill: var(--color-neutral10);
      }
    }
  }

  .month-list {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    margin-top: 3.2rem;

    button {
      position: relative;
      height: 3.6rem;
      margin: 0.4rem 0.7rem 0.4rem 0.6rem;
      font-size: 1.4rem;
      z-index: 1;
      cursor: pointer;

      &:hover,
      &.selected-month {
        border-radius: 2.1rem !important;
        font-weight: 400;
      }

      &:hover {
        background-color: var(--color-neutral95) !important;
        color: var(--color-neutral10) !important;
      }

      &.selected-month {
        background-color: var(--color-blue60) !important;
        color: #fff !important;
      }
    }
  }
`;

const CustomHeader = ({
  showMonthYearPicker,
  setShowMonthYearPicker,
  params,
  datePickerRef,
}: any) => {
  const monthNames = Array.from({ length: 12 }, (_, i) =>
    new Date(0, i).toLocaleDateString('ko', { month: 'long' })
  );

  const handleHeaderClick = () => {
    setShowMonthYearPicker((prev: boolean) => !prev);
  };

  const handleMonthClick = (monthNum: number) => {
    setShowMonthYearPicker(false); // 날짜 선택기로 전환
    const newDate = new Date(params.date.getFullYear(), monthNum, 1);
    if (datePickerRef?.current) {
      datePickerRef?.current.setSelected(newDate);
    }
  };

  return (
    <DatePickerCustomHeader>
      <button
        type="button"
        className="react-datepicker__navigation react-datepicker__navigation--previous"
        onClick={
          showMonthYearPicker ? params.decreaseYear : params.decreaseMonth
        }
        disabled={
          showMonthYearPicker
            ? params.prevYearButtonDisabled
            : params.prevMonthButtonDisabled
        }
      >
        <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--previous">
          <span className="hiddenZoneV">Previous Month</span>
        </span>
      </button>
      <button
        type="button"
        className={
          showMonthYearPicker
            ? 'react-datepicker__current-month'
            : 'react-datepicker__current-month'
        }
        onClick={handleHeaderClick}
      >
        <span className="area_current_date">
          {showMonthYearPicker
            ? params.date.getFullYear().toString()
            : params.date.toLocaleDateString('ko', {
                month: 'long',
                year: 'numeric',
              })}
          <ArrowDownFilled />
        </span>
      </button>
      <button
        type="button"
        className="react-datepicker__navigation react-datepicker__navigation--next"
        onClick={
          showMonthYearPicker ? params.increaseYear : params.increaseMonth
        }
        disabled={
          showMonthYearPicker
            ? params.nextYearButtonDisabled
            : params.nextMonthButtonDisabled
        }
      >
        <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--next">
          <span className="hiddenZoneV"> Next Month</span>
        </span>
      </button>
      {showMonthYearPicker && (
        <div className="month-list">
          {monthNames.map((monthName, idx) => (
            <button
              type="button"
              key={monthName}
              onClick={() => handleMonthClick(idx)}
              className={params.date.getMonth() === idx ? 'selected-month' : ''}
            >
              {monthName}
            </button>
          ))}
        </div>
      )}
    </DatePickerCustomHeader>
  );
};

export default CustomHeader;
