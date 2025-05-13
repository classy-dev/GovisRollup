import { render, screen, fireEvent } from "@ComponentFarm/test-utils";
import { Radio } from "./Radio";

describe("<Radio />", () => {
  /** 1) label · subText 렌더링 */
  it("label과 subText가 정상적으로 표시된다", () => {
    render(<Radio label="남자" subText="Male" value="M" />);
    expect(screen.getByText("남자")).toBeInTheDocument();
    expect(screen.getByText("Male")).toBeInTheDocument();
  });

  /** 2) checked 상태 반영 */
  it("checked prop이 true면 라디오가 선택된 상태다", () => {
    render(<Radio checked label="선택됨" value="S" />);
    const radio = screen.getByRole("radio") as HTMLInputElement;
    expect(radio.checked).toBe(true);
  });

  /** 3) onChange 이벤트 호출 */
  it("클릭 시 onChange가 호출된다", () => {
    const handle = jest.fn();
    render(<Radio onChange={handle} label="배송" value="D" />);
    fireEvent.click(screen.getByRole("radio"));
    expect(handle).toHaveBeenCalledTimes(1);
  });

  /** 4) disabled 상태 */
  it("disabled 상태에서는 라디오버튼 상태가 변경되지 않는다", () => {
    const handle = jest.fn();
    render(
      <Radio
        disabled
        onChange={handle}
        label="비활성"
        value="X"
        checked={false}
      />
    );
    const radio = screen.getByRole("radio");
    fireEvent.click(radio);

    expect(radio).not.toBeChecked();
    expect(radio).toBeDisabled();
  });

  /** 5) 사이즈 옵션 체크 */
  it.each(["sm", "md"] as const)(
    "chksize=%s 인 경우에도 렌더링된다",
    (size) => {
      render(<Radio chksize={size} label="사이즈" />);
      expect(screen.getByRole("radio")).toBeInTheDocument();
    }
  );
});
