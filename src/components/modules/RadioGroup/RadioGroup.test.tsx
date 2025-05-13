import { render, screen } from "@ComponentFarm/test-utils";
import userEvent from "@testing-library/user-event";
import { RadioGroup } from "./RadioGroup";
import { Radio } from "@ComponentFarm/atom/Radio/Radio";

describe("<RadioGroup />", () => {
  const click = async (label: string, user = userEvent.setup()) =>
    user.click(screen.getByLabelText(label));

  /* ────────── 1) options 프롭 사용 ────────── */
  it("options 로 렌더될 때 기본 선택·onChange 동작", async () => {
    const user = userEvent.setup();
    const handle = jest.fn();

    render(
      <RadioGroup
        options={[
          { label: "A", value: "A" },
          { label: "B", value: "B" },
        ]}
        defaultValue="A"
        onChange={handle}
      />
    );

    /* 기본값 체크 */
    expect(screen.getByLabelText("A")).toBeChecked();
    expect(screen.getByLabelText("B")).not.toBeChecked();

    /* B 클릭 → A 해제, B 체크, onChange('B') */
    await click("B", user);
    expect(handle).toHaveBeenCalledWith("B");
    expect(screen.getByLabelText("B")).toBeChecked();
    expect(screen.getByLabelText("A")).not.toBeChecked();
  });

  /* ────────── 2) children 사용 ────────── */
  it("children 안의 <Radio>들도 동일하게 동작한다", async () => {
    const user = userEvent.setup();
    const handle = jest.fn();

    render(
      <RadioGroup defaultValue="x" onChange={handle}>
        <Radio value="x" label="X" />
        <Radio value="y" label="Y" />
      </RadioGroup>
    );

    /* 기본값 */
    expect(screen.getByLabelText("X")).toBeChecked();

    /* Y 클릭 */
    await click("Y", user);
    expect(handle).toHaveBeenCalledWith("y");
    expect(screen.getByLabelText("Y")).toBeChecked();
  });

  /* ────────── 3) disabled ────────── */
  it("disabled=true 면 상태·콜백이 변하지 않는다", async () => {
    /* pointer-events 검사 비활성화 → disabled 인풋도 click 시뮬레이션 가능 */
    const user = userEvent.setup({ pointerEventsCheck: 0 });
    const handle = jest.fn();

    render(
      <RadioGroup
        options={[
          { label: "1", value: "1" },
          { label: "2", value: "2" },
        ]}
        defaultValue="1"
        disabled
        onChange={handle}
      />
    );

    /* 일단 disabled attribute 가 있는지 확인 */
    expect(screen.getByLabelText("1")).toBeDisabled();
    expect(screen.getByLabelText("2")).toBeDisabled();

    /* 클릭 시도 */
    await click("2", user);

    /* 변화 없음 */
    expect(handle).not.toHaveBeenCalled();
    expect(screen.getByLabelText("1")).toBeChecked();
    expect(screen.getByLabelText("2")).not.toBeChecked();
  });
});
