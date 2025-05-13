import { render, screen } from "@ComponentFarm/test-utils";
import { ErrorTxt } from "./ErrorTxt";

describe("<ErrorTxt />", () => {
  /** 1) children 콘텐츠 우선 표시 */
  it("직접 전달한 텍스트(children)이 있을 경우 error prop을 무시하고 직접 전달한 텍스트(children)을 표시한다", () => {
    render(<ErrorTxt>직접 작성한 메시지</ErrorTxt>);
    expect(screen.getByText("직접 작성한 메시지")).toBeInTheDocument();
  });

  /** 2) 표시할 내용이 없을 때 빈 화면 처리 */
  it("error와 직접 전달한 텍스트(children)이 모두 없을 경우 아무것도 표시하지 않는다", () => {
    const { container } = render(<ErrorTxt />);
    expect(container.firstChild).toBeNull();
  });

  /** 3) 필수 입력 오류 시 기본 메시지 표시 */
  it('필수 입력 오류(type="required")이고 별도 메시지가 없을 때 기본 안내문("필수 입력 항목입니다.")을 표시한다', () => {
    render(<ErrorTxt error={{ type: "required" }} />);
    expect(screen.getByText("필수 입력 항목입니다.")).toBeInTheDocument();
  });

  /** 4) 최소 글자 수 오류 메시지 */
  it('최소 글자 수 오류(type="minLength")에서 message 값("최소 N글자 이상 입력해주세요.")을 포함한 안내문을 표시한다', () => {
    render(<ErrorTxt error={{ type: "minLength", message: "3" }} />);
    expect(
      screen.getByText("최소 3글자 이상 입력해주세요.")
    ).toBeInTheDocument();
  });

  /** 5) 커스텀 오류 메시지 표시 */
  it("정의되지 않은 오류 타입의 경우 전달받은 message를 그대로 표시한다", () => {
    render(<ErrorTxt error={{ type: "custom", message: "커스텀 에러" }} />);
    expect(screen.getByText("커스텀 에러")).toBeInTheDocument();
  });
});
