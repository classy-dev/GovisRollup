import { render, screen } from "@ComponentFarm/test-utils";
import userEvent from "@testing-library/user-event";
import { DateRangePicker } from "./DateRange";
import dayjs from "dayjs";

jest.mock("react-datepicker", () => {
  return jest.fn(({ onChange }: any) => (
    <div data-testid="datepicker-inline">
      <button onClick={() => onChange([new Date("2025-05-01"), null])}>
        pickStart
      </button>
      <button
        onClick={() =>
          onChange([new Date("2025-05-01"), new Date("2025-05-07")])
        }
      >
        pickEnd
      </button>
    </div>
  ));
});

const fmt = (d: Date) => dayjs(d).format("YYYY-MM-DD");

describe("<DateRangePicker />", () => {
  it("입력창을 클릭하면 달력 박스가 열린다", async () => {
    const user = userEvent.setup();
    render(
      <DateRangePicker onDateRangeChange={jest.fn()} placeholder="기간 선택" />
    );

    await user.click(screen.getByPlaceholderText("기간 선택"));
    expect(screen.getByTestId("datepicker-inline")).toBeInTheDocument();
  });

  it("날짜 두 개를 선택하면 onDateRangeChange 가 호출된다", async () => {
    const user = userEvent.setup();
    const handle = jest.fn();
    render(<DateRangePicker onDateRangeChange={handle} />);

    await user.click(screen.getByRole("textbox"));
    await user.click(screen.getByText("pickStart"));
    expect(handle).toHaveBeenLastCalledWith([new Date("2025-05-01"), null]);

    await user.click(screen.getByText("pickEnd"));
    expect(handle).toHaveBeenLastCalledWith([
      new Date("2025-05-01"),
      new Date("2025-05-07"),
    ]);

    expect(screen.getByRole("textbox")).toHaveValue(
      `${fmt(new Date("2025-05-01"))} - ${fmt(new Date("2025-05-07"))}`
    );
  });

  it("“오늘” 버튼을 누르면 시작·종료 날짜(연-월-일)만 동일하게 세팅된다", async () => {
    const user = userEvent.setup();
    const handle = jest.fn();
    render(<DateRangePicker onDateRangeChange={handle} />);

    await user.click(screen.getByRole("textbox"));
    await user.click(screen.getByRole("button", { name: "오늘" }));

    // onChange 에서 넘어온 Date 객체의 'YYYY-MM-DD' 부분만 비교
    const [[from, to]] = handle.mock.calls.pop();
    const todayStr = fmt(new Date());
    expect(fmt(from)).toBe(todayStr);
    expect(fmt(to)).toBe(todayStr);
  });

  it("잘못된 날짜 포맷을 입력하면 값이 반영되지 않는다", async () => {
    const user = userEvent.setup();
    const handle = jest.fn();
    const { container } = render(
      <DateRangePicker onDateRangeChange={handle} />
    );

    await user.click(screen.getByRole("textbox")); // 팝업 열기
    const startInput = container.querySelector(
      "#startDate"
    ) as HTMLInputElement;
    await user.type(startInput, "2025-13-40");
    await user.keyboard("[Enter]");

    expect(handle).not.toHaveBeenCalled();
    expect(startInput).toHaveValue("2025-13-40"); // 입력은 됨
  });

  it("disabled=true 면 달력이 열리지 않는다", async () => {
    const user = userEvent.setup();
    render(
      <DateRangePicker
        onDateRangeChange={jest.fn()}
        disabled
        placeholder="disabled"
      />
    );

    await user.click(screen.getByPlaceholderText("disabled"));
    expect(screen.queryByTestId("datepicker-inline")).not.toBeInTheDocument();
  });
});
