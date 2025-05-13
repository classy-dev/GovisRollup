import { render, screen, fireEvent } from "@ComponentFarm/test-utils";
import { CheckBox } from "./CheckBox";

describe("<CheckBox />", () => {
  /** 1. label/subText 렌더링 확인 */
  it("label과 subText가 정상적으로 렌더링된다", () => {
    render(<CheckBox label="동의합니다" subText="마케팅 수신 동의 포함" />);
    expect(screen.getByText("동의합니다")).toBeInTheDocument();
    expect(screen.getByText("마케팅 수신 동의 포함")).toBeInTheDocument();
  });

  /** 2. checked 상태 반영 */
  it("checked prop에 따라 체크 상태가 반영된다", () => {
    const { rerender } = render(<CheckBox checked={false} label="체크박스" />);
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;

    expect(checkbox.checked).toBe(false);

    rerender(<CheckBox checked={true} label="체크박스" />);
    expect(checkbox.checked).toBe(true);
  });

  /** 3. onChange 동작 확인 */
  it("onChange 이벤트가 정상적으로 호출된다", () => {
    const handleChange = jest.fn();
    render(<CheckBox label="알림 수신" onChange={handleChange} />);

    fireEvent.click(screen.getByRole("checkbox"));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  /** 4. disabled 상태에선 체크박스 상태가 변경되지 않음 */
  it("disabled 상태에선 체크박스 상태가 변경되지 않는다", () => {
    const handleChange = jest.fn();
    render(
      <CheckBox
        label="알림 수신"
        onChange={handleChange}
        disabled
        checked={false}
      />
    );

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    // 체크박스가 여전히 체크되지 않은 상태인지 확인
    expect(checkbox).not.toBeChecked();
    expect(checkbox).toBeDisabled();
  });

  /** 5. chksize 별 렌더링 확인 */
  it.each(["sm", "md"] as const)(
    "chksize=%s 로 설정했을 때 checkbox가 렌더링된다",
    (size) => {
      render(<CheckBox label="사이즈 테스트" chksize={size} />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toBeInTheDocument();
    }
  );
});
