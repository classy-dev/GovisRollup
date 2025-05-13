import { render, screen } from "@ComponentFarm/test-utils";
import userEvent from "@testing-library/user-event";
import { CheckBoxGroup } from "./CheckBoxGroup";
import { CheckBox } from "@ComponentFarm/atom/Checkbox/CheckBox";

const options = [
  { label: "A", value: "a" },
  { label: "B", value: "b" },
  { label: "C", value: "c" },
];

describe("<CheckBoxGroup /> 옵션 기반>", () => {
  /** 1) 옵션·All 체크박스 렌더링 */
  it("options 와 All 체크박스가 모두 렌더링된다", () => {
    render(
      <CheckBoxGroup name="test" options={options} allChechkHandler={options} />
    );

    expect(screen.getByLabelText("All")).toBeInTheDocument();
    options.forEach((opt) =>
      expect(screen.getByLabelText(opt.label)).toBeInTheDocument()
    );
  });

  /** 2) 개별 선택 onChange */
  it("체크 변경 시 onChange에 선택된 값 배열이 전달된다", async () => {
    const user = userEvent.setup();
    const handle = jest.fn();

    render(<CheckBoxGroup name="cg" options={options} onChange={handle} />);

    await user.click(screen.getByLabelText("B"));
    expect(handle).toHaveBeenCalledWith(["b"]);

    await user.click(screen.getByLabelText("A"));
    expect(handle).toHaveBeenLastCalledWith(expect.arrayContaining(["a", "b"]));
  });

  /** 3) All 토글 → 전체 선택/해제 */
  it("All 체크박스를 클릭하면 모든 옵션이 토글된다", async () => {
    const user = userEvent.setup();
    const handle = jest.fn();

    render(
      <CheckBoxGroup
        name="cg2"
        options={options}
        allChechkHandler={options}
        onChange={handle}
      />
    );

    const all = screen.getByLabelText("All");
    await user.click(all); // 전체 선택
    expect(handle).toHaveBeenLastCalledWith(["a", "b", "c"]);

    await user.click(all); // 전체 해제
    expect(handle).toHaveBeenLastCalledWith([]);
  });

  /** 4) disabled 상태면 클릭 불가 */
  it("disabled 가 true면 체크박스가 비활성화된다", async () => {
    const user = userEvent.setup();
    const handle = jest.fn();

    render(
      <CheckBoxGroup name="cg3" options={options} disabled onChange={handle} />
    );

    const a = screen.getByLabelText("A");
    expect(a).toBeDisabled();
  });
});

describe("<CheckBoxGroup /> children + custom allChkHandler>", () => {
  /** 5) value="allChkHandler" 로 커스텀 위치에 All 삽입 */
  it("children 안에 allChkHandler 가 있으면 해당 위치에 All 이 렌더되고 기본 All 은 안 보인다", () => {
    render(
      <CheckBoxGroup name="custom">
        <div>
          <CheckBox value="allChkHandler" label="(전체)" />
        </div>
        <CheckBox value="x" label="X" />
      </CheckBoxGroup>
    );

    expect(screen.getByLabelText("(전체)")).toBeInTheDocument();
    // 기본 All(label "All") 이 없어야 함
    expect(screen.queryByLabelText("All")).not.toBeInTheDocument();
    expect(screen.getByLabelText("X")).toBeInTheDocument();
  });
});
