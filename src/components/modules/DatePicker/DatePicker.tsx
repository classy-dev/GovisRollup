import React, {
  ChangeEvent,
  SyntheticEvent,
  useState,
  useEffect,
  useRef,
} from 'react';
import ko from 'date-fns/locale/ko';
import dayjs from 'dayjs';
import DatepickerLibrary, {
  ReactDatePicker,
  ReactDatePickerProps,
} from 'react-datepicker';
import CustomHeader from './CustomHeader';
import 'react-datepicker/dist/react-datepicker.css';

export type NewDate = string | ChangeEvent<Element> | null;

export interface DatePickerProps extends Partial<ReactDatePickerProps> {
  className?: string;
  DatePickerRef?: React.RefObject<ReactDatePicker>;
  selectedDate: string | null;
  onChange: any;
  disabled?: boolean;
}

export const DatePicker = ({
  className,
  DatePickerRef,
  selectedDate,
  onChange,
  dateFormat = 'yyyy-MM-dd',
  minDate,
  maxDate,
  placeholderText = 'Select date',
  showYearDropdown = false,
  showMonthDropdown = false,
  disabled = false,
  ...props
} : DatePickerProps) => {
  const [selectedDateState, setSelectedDateState] = useState<Date | null>(
    selectedDate ? dayjs(selectedDate).toDate() : null
  );
  const [showMonthYearPicker, setShowMonthYearPicker] = useState(false);
  const datePickerRef = useRef<any>(null);

  useEffect(() => {
    setSelectedDateState(selectedDate ? dayjs(selectedDate).toDate() : null);
    setShowMonthYearPicker(false);
  }, [selectedDate]);

  const handleChange = (
    date: Date | null,
    event: SyntheticEvent | undefined
  ) => {
    setSelectedDateState(date);
    if (date) {
      onChange(dayjs(date).format('YYYY-MM-DD'), event);
    } else {
      onChange(null, event);
    }
  };

  return (
    <DatepickerLibrary
      ref={DatePickerRef ?? datePickerRef}
      selected={selectedDateState}
      onChange={handleChange}
      dateFormat={dateFormat}
      minDate={minDate}
      maxDate={maxDate}
      renderCustomHeader={params =>
        CustomHeader({
          showMonthYearPicker,
          setShowMonthYearPicker,
          params,
          datePickerRef,
        })
      }
      dateFormatCalendar="yyyy년 MM월"
      placeholderText={placeholderText}
      locale={ko}
      showMonthYearPicker={showMonthYearPicker}
      showYearDropdown={showYearDropdown}
      showMonthDropdown={showMonthDropdown}
      disabled={disabled}
      {...props}
    />
  );
};

