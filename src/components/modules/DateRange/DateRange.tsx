import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  KeyboardEvent,
} from 'react';
import ko from 'date-fns/locale/ko';
import dayjs from 'dayjs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FiCalendar } from 'react-icons/fi';
import { IcoInput } from '@ComponentFarm/atom/IcoInput/IcoInput';
import { DateRageBox, DateRangeWrap } from './style';

export type DateRangeType = [Date | null, Date | null];

interface DateRangePickerProps {
  onDateRangeChange: (update: DateRangeType) => void;
  initialDateRange?: DateRangeType;
  exceptDateRange?: DateRangeType;
  placeholder?: string;
  disabled?: boolean;
  maxDate?: any;
}

export const DateRangePicker = ({
  onDateRangeChange,
  initialDateRange = [null, null],
  exceptDateRange = [null, null],
  placeholder,
  disabled = false,
  maxDate,
}:DateRangePickerProps) => {
  const [dateRange, setDateRange] = useState<DateRangeType>(initialDateRange);
  const [startDateInput, setStartDateInput] = useState<string | null>('');
  const [endDateInput, setEndDateInput] = useState<string | null>('');
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isResetVisible, setIsResetVisible] = useState(false);
  const refEndDate = useRef<HTMLInputElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // URL 쿼리 파라미터로부터 날짜를 설정합니다.
    const start = initialDateRange[0]
      ? dayjs(initialDateRange[0], 'YYYY-MM-DD').toDate()
      : null;
    const end = initialDateRange[1]
      ? dayjs(initialDateRange[1], 'YYYY-MM-DD').toDate()
      : null;

    if (start && end) {
      setStartDateInput(dayjs(start).format('YYYY-MM-DD'));
      setEndDateInput(dayjs(end).format('YYYY-MM-DD'));
      setDateRange([start, end]);
    } else if (!start && !end) {
      setStartDateInput(null);
      setEndDateInput(null);
      setDateRange([null, null]);
    }
  }, [initialDateRange]);

  const validateDate = (dateStr: string) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateStr)) {
      return false;
    }

    const [year, month, day] = dateStr.split('-').map(Number);
    if (year < 2000) {
      return false;
    }

    const date = new Date(Date.UTC(year, month - 1, day));

    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
  };

  const handleStartDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const dateStr = e.target.value;
    setStartDateInput(dateStr);

    if (validateDate(dateStr)) {
      const startDate = new Date(dateStr);
      const endDate = dateRange[1];

      // 종료일이 설정되어 있고, 시작일이 종료일로부터 1년 이내인지 확인
      if (endDate) {
        const oneMonthAfterStartDate = new Date(startDate);
        oneMonthAfterStartDate.setMonth(oneMonthAfterStartDate.getMonth() + 1); // 변경된 부분

        if (endDate > oneMonthAfterStartDate) {
          setEndDateInput('');
          setDateRange([startDate, null]);
          onDateRangeChange([startDate, null]);
        }
      } else {
        // 시작일과 (조정된) 종료일 업데이트
        setDateRange([startDate, endDate]);
        onDateRangeChange([startDate, endDate]);
      }
    }
  };

  const handleEndDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const dateStr = e.target.value;
    setEndDateInput(dateStr);

    if (validateDate(dateStr)) {
      const endDate = new Date(dateStr);
      const startDate = dateRange[0];

      // 시작일이 설정되어 있고, 종료일이 시작일로부터 1년 이내인지 확인
      if (startDate && endDate) {
        const oneMonthLater = new Date(startDate);
        oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);

        if (endDate > oneMonthLater) {
          alert('종료일은 시작일로부터 최대 1개월 이내로 설정해야 합니다.');
          setEndDateInput('');

          return; // 조건을 충족하지 않으면 업데이트 중단
        }
      }

      // 종료일 업데이트
      setDateRange((prev): DateRangeType => {
        const update: DateRangeType = [prev[0], endDate];
        onDateRangeChange(update);
        return update;
      });
    }
  };

  const handleStartDateKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && startDateInput && validateDate(startDateInput)) {
      refEndDate.current?.focus();
    }
  };

  const handleEndDateKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && endDateInput && validateDate(endDateInput)) {
      setOpen(false);
      refEndDate.current?.blur();
    }
  };

  const handleFocus = () => {
    setOpen(true);
    setIsResetVisible(true);
  };

  const onChange = (update: DateRangeType) => {
    const formattedUpdate: DateRangeType = [
      update[0] ? dayjs(update[0]).toDate() : null,
      update[1] ? dayjs(update[1]).toDate() : null,
    ];
    setDateRange(formattedUpdate);
    if (formattedUpdate[0]) {
      setStartDateInput(dayjs(formattedUpdate[0]).format('YYYY-MM-DD'));
    }
    if (formattedUpdate[1]) {
      setEndDateInput(dayjs(formattedUpdate[1]).format('YYYY-MM-DD'));
      setOpen(false);
    }
    onDateRangeChange(formattedUpdate);
  };
  const onClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpen(false);
      setIsResetVisible(false);
    }
  };

  const handleResetClick = () => {
    setDateRange([null, null]);
    setStartDateInput('');
    setEndDateInput('');
    setIsResetVisible(false);
    onDateRangeChange([null, null]);
    // setOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, []);

  const setDateRangeAndUpdateInputs = (range: DateRangeType) => {
    setDateRange(range);
    setStartDateInput(range[0]?.toISOString().split('T')[0] || '');
    setEndDateInput(range[1]?.toISOString().split('T')[0] || '');
    onDateRangeChange(range);
  };

  const setRangeSetting = (type: number) => {
    const today = new Date();
    const specificDaysAgo = new Date();
    if (type === 1) {
      setDateRangeAndUpdateInputs([today, today]);
    }
    if (type !== 1) {
      specificDaysAgo.setDate(today.getDate() - (type - 1));
      setDateRangeAndUpdateInputs([specificDaysAgo, today]);
    }
  };

  const getExcludedDates = (excludeDate: DateRangeType) => {
    const start = excludeDate[0];
    const end = excludeDate[1];

    if (!start || !end) {
      return [];
    }

    const daysDifference = Math.round(
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );
    return Array.from({ length: daysDifference + 1 }, (v, i) => {
      const date = new Date(start);
      date.setDate(date.getDate() + i);
      return date;
    });
  };

  return (
    <DateRangeWrap>
      <div className="box_daterange_input">
        <IcoInput
          type="text"
          value={
            startDateInput && endDateInput
              ? `${startDateInput} - ${endDateInput}`
              : ''
          }
          placeholder={placeholder}
          onClick={() => setOpen(!open)}
          TrailingIcon={<FiCalendar />}
          readOnly
          disabled={disabled}
        />
      </div>
      {open && (
        <DateRageBox ref={ref}>
          <div className="area_calendar">
            <div className="box_calendar">
              <DatePicker
                selected={dateRange[0]}
                startDate={dateRange[0]}
                endDate={dateRange[1]}
                // minDate={dateRange[0]}
                onChange={onChange}
                selectsRange
                inline
                monthsShown={2}
                locale={ko}
                showYearDropdown
                showMonthDropdown
                yearDropdownItemNumber={8}
                dateFormatCalendar="yyyy년 MM월"
                excludeDates={getExcludedDates(exceptDateRange)}
                maxDate={maxDate}
              />
            </div>
            <div className="box_btn">
              <button type="button" onClick={() => setRangeSetting(1)}>
                오늘
              </button>
              <button type="button" onClick={() => setRangeSetting(7)}>
                최근 7일
              </button>
              <button type="button" onClick={() => setRangeSetting(30)}>
                최근 30일
              </button>
              <button type="button" onClick={handleResetClick}>
                초기화
              </button>
            </div>
          </div>
          <div className="area_direct_input">
            <dl>
              <dt>시작일</dt>
              <dd>
                <input
                  type="text"
                  id="startDate"
                  className="inp"
                  // placeholder="시작일"
                  value={startDateInput ?? ''}
                  onChange={handleStartDateChange}
                  onKeyDown={handleStartDateKeyDown}
                  onFocus={handleFocus}
                />
              </dd>
            </dl>
            <span className="bar">-</span>
            <dl>
              <dt>종료일</dt>
              <dd>
                <input
                  type="text"
                  id="endDate"
                  className="inp"
                  // placeholder="종료일"
                  value={endDateInput ?? ''}
                  onChange={handleEndDateChange}
                  onKeyDown={handleEndDateKeyDown}
                  onFocus={handleFocus}
                  disabled={!validateDate(String(startDateInput))}
                  ref={refEndDate}
                />
              </dd>
            </dl>
          </div>
        </DateRageBox>
      )}
    </DateRangeWrap>
  );
};
