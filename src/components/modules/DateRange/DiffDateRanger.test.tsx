import { render, screen } from "@ComponentFarm/test-utils";
import userEvent from "@testing-library/user-event";
import dayjs from "dayjs";
import { DiffDateRanger, DiffDateType } from "./DiffDateRanger";

/* ---------- DateRangePicker mock ---------- */
jest.mock("@ComponentFarm/modules/DateRange/DateRange", () => ({
  DateRangePicker: ({ onDateRangeChange, placeholder, disabled }: any) => (
    <div data-testid={placeholder}>
      <button
        onClick={() =>
          onDateRangeChange([new Date("2025-01-01"), new Date("2025-01-15")])
        }
      >
        pickRange
      </button>
      {disabled && <span data-testid={`${placeholder}-disabled`} />}
    </div>
  ),
}));

/* ---------- helpers ---------- */
const fmt = (d: Date | null) => (d ? dayjs(d).format("YYYY-MM-DD") : null);
const initial: DiffDateType = { range1: [null, null] };

describe("<DiffDateRanger />", () => {
  it("type이 없으면 “기간을 선택하세요” 하나만 렌더된다", () => {
    render(
      <DiffDateRanger
        selectedDateRanges={initial}
        setSelectedDateRanges={jest.fn()}
        params={{}}
      />
    );
    expect(screen.getByTestId("기간을 선택하세요")).toBeInTheDocument();
    expect(screen.queryByText("기준일:")).not.toBeInTheDocument();
  });

  it('type="diff"이면 기준·비교 두 개가 뜨고 비교일은 초기엔 disabled', () => {
    render(
      <DiffDateRanger
        type="diff"
        selectedDateRanges={{ range1: [null, null], range2: [null, null] }}
        setSelectedDateRanges={jest.fn()}
        params={{}}
      />
    );
    expect(screen.getByText("기준일:")).toBeInTheDocument();
    expect(screen.getByTestId("비교일-disabled")).toBeInTheDocument();
  });

  it("range1 선택 시 setSelectedDateRanges가 올바르게 호출된다", async () => {
    const user = userEvent.setup();
    const setState = jest.fn();
    render(
      <DiffDateRanger
        type="diff"
        selectedDateRanges={{ range1: [null, null], range2: [null, null] }}
        setSelectedDateRanges={setState}
        params={{}}
      />
    );

    await user.click(screen.getByTestId("기준일").querySelector("button")!);

    // 첫 번째 콜에서 updater 함수 꺼내 실행
    const updaterFn = setState.mock.calls[0][0] as (
      prev: DiffDateType
    ) => DiffDateType;
    const result = updaterFn({ range1: [null, null], range2: [null, null] });

    expect(fmt(result.range1[0])).toBe("2025-01-01");
    expect(fmt(result.range1[1])).toBe("2025-01-15");
  });

  it("params 로 전달된 날짜를 초기값으로 세팅한다 (단일 모드)", () => {
    const setState = jest.fn();
    render(
      <DiffDateRanger
        selectedDateRanges={initial}
        setSelectedDateRanges={setState}
        params={{ search_dt: "2025-03-01", end_dt: "2025-03-07" }}
      />
    );

    const [{ range1 }] = setState.mock.calls[0]; // 첫 콜의 인자 객체
    expect(range1.map(fmt)).toEqual(["2025-03-01", "2025-03-07"]);
  });

  it("params 로 전달된 날짜를 초기값으로 세팅한다 (diff 모드)", () => {
    const setState = jest.fn();
    render(
      <DiffDateRanger
        type="diff"
        selectedDateRanges={{ range1: [null, null], range2: [null, null] }}
        setSelectedDateRanges={setState}
        params={{
          base_dt_start: "2024-12-01",
          base_dt_finish: "2024-12-10",
          comparison_dt_start: "2024-11-01",
          comparison_dt_finish: "2024-11-10",
        }}
      />
    );

    const [{ range1, range2 }] = setState.mock.calls[0];
    expect(range1.map(fmt)).toEqual(["2024-12-01", "2024-12-10"]);
    expect(range2!.map(fmt)).toEqual(["2024-11-01", "2024-11-10"]);
  });
});
