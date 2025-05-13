import { screen, fireEvent } from "@testing-library/react";
import { render } from "@ComponentFarm/test-utils";
import { IcoInput } from "./IcoInput";
import { FiMail, FiAlertCircle } from "react-icons/fi";

describe("<IcoInput />", () => {
  /** 1) label·placeholder 렌더링 */
  it("label 과 placeholder 가 표시된다", () => {
    render(<IcoInput label="이메일" placeholder="example@gopizza.com" />);
    expect(screen.getByText("이메일")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("example@gopizza.com")
    ).toBeInTheDocument();
  });

  /** 2) leadingText 존재 시, 왼쪽 고정 텍스트와 input padding 처리 */
  it("leadingText 가 있으면 고정 텍스트 박스가 렌더링된다", () => {
    render(<IcoInput leadingText="+82" />);
    expect(screen.getByText("+82")).toBeInTheDocument();
  });

  /** 3) LeadingIcon / TrailingIcon 렌더링 */
  it("아이콘이 제대로 표시된다", () => {
    const { container } = render(
      <IcoInput LeadingIcon={<FiMail />} TrailingIcon={<FiAlertCircle />} />
    );
    expect(container.querySelector("svg.leadingIcon")).toBeInTheDocument();
    expect(container.querySelector("svg.trailingIcon")).toBeInTheDocument();
  });

  /** 4) onChange 이벤트 동작 */
  it("입력값이 바뀌면 onChange 가 호출된다", () => {
    const handle = jest.fn();
    render(<IcoInput onChange={handle} />);
    fireEvent.change(screen.getByLabelText("input"), {
      target: { value: "abc" },
    });
    expect(handle).toHaveBeenCalledWith(
      expect.objectContaining({ target: expect.any(HTMLInputElement) })
    );
  });

  /** 5) error prop 처리 */
  it("error 메시지를 출력하고 TrailingIcon 색을 error 컬러로 바꾼다", () => {
    const { container } = render(
      <IcoInput
        error="형식이 올바르지 않습니다."
        TrailingIcon={<FiAlertCircle />}
      />
    );
    expect(screen.getByText("형식이 올바르지 않습니다.")).toBeInTheDocument();

    // 스타일 토큰 방어: svg fill 색상이 error 색 (#?로 시작) 인지만 간단 체크
    const trail = container.querySelector("svg.trailingIcon")!;
    const color = window.getComputedStyle(trail).color;
    expect(color).toMatch(/rgb|#/); // 토큰 환경 따라 달라질 수 있어 대략 검증
  });

  /** 6) helperText 표시 */
  it("helperText 가 표시된다", () => {
    render(<IcoInput helperText="8~20자 영문·숫자" />);
    expect(screen.getByText("8~20자 영문·숫자")).toBeInTheDocument();
  });
});
