import { render, screen } from "@ComponentFarm/test-utils";
import userEvent from "@testing-library/user-event";
import { DatePicker } from "./DatePicker";

// 1) react-datepicker를 가벼운 인풋 컴포넌트로 Mock
jest.mock("react-datepicker", () => {
  return jest.fn(({ selected, onChange, placeholderText, disabled }: any) => (
    <input
      aria-label="datepicker-input"
      placeholder={placeholderText}
      value={selected ? "2025-05-14" : ""}
      onClick={() => !disabled && onChange(new Date("2025-05-14"), undefined)}
      readOnly
      disabled={disabled}
    />
  ));
});

describe("<DatePicker />", () => {
  /** 1) placeholder & 초기 렌더링 */
  it("placeholder 가 보인다", () => {
    render(
      <DatePicker
        selectedDate={null}
        onChange={jest.fn()}
        placeholderText="날짜 선택"
      />
    );
    expect(screen.getByPlaceholderText("날짜 선택")).toBeInTheDocument();
  });

  /** 2) selectedDate prop → 인풋 value 반영 */
  it("selectedDate prop 이 값이면 해당 날짜가 표시된다", () => {
    render(<DatePicker selectedDate="2025-05-14" onChange={jest.fn()} />);
    expect(screen.getByLabelText("datepicker-input")).toHaveValue("2025-05-14");
  });

  /** 3) 날짜 클릭 → onChange(format: YYYY-MM-DD) 호출 */
  it("날짜를 선택하면 onChange 콜백이 호출된다", async () => {
    const user = userEvent.setup();
    const handle = jest.fn();
    render(<DatePicker selectedDate={null} onChange={handle} />);

    await user.click(screen.getByLabelText("datepicker-input"));
    expect(handle).toHaveBeenCalledWith("2025-05-14", undefined);
  });

  /** 4) disabled 상태면 클릭해도 onChange 가 발생하지 않는다 */
  it("disabled=true 면 인풋이 비활성화되고 클릭 시 반응하지 않는다", async () => {
    const user = userEvent.setup();
    const handle = jest.fn();
    render(
      <DatePicker selectedDate={null} onChange={handle} disabled={true} />
    );

    const input = screen.getByLabelText("datepicker-input");
    expect(input).toBeDisabled();

    await user.click(input);
    expect(handle).not.toHaveBeenCalled();
  });
});
