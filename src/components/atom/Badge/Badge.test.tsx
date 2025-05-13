import { screen, fireEvent } from "@testing-library/react";
import { render } from "@ComponentFarm/test-utils";
import { Badge } from "./Badge";
import { FaCheck, FaTimes } from "react-icons/fa";
import { TextBadge } from "./TextBadge";
import { TimeBadge } from "./TimeBadge";

describe("<Badge />", () => {
  /** 1) 필수 – 텍스트 렌더링 */
  it("뱃지의 텍스트가 정상적으로 렌더링된다", () => {
    render(<Badge>HELLO</Badge>);
    expect(screen.getByText("HELLO")).toBeInTheDocument();
  });

  /** 2) 필수 – 이벤트 동작 */
  it("onClick 이벤트가 호출된다", () => {
    const handleClick = jest.fn();
    render(<Badge onClick={handleClick}>CLICK</Badge>);

    fireEvent.click(screen.getByText("CLICK"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  /** 3) 실사용 빈도 – 아이콘 렌더링 */
  it("LeadingIcon·TrailingIcon 이 제대로 표시된다", () => {
    render(
      <Badge
        LeadingIcon={<FaCheck data-testid="leading" />}
        TrailingIcon={<FaTimes data-testid="trailing" />}
      >
        ICON
      </Badge>
    );

    expect(screen.getByTestId("leading").tagName).toBe("svg");
    expect(screen.getByTestId("trailing").tagName).toBe("svg");
  });

  /** 4) 디자인 시스템 유지 – 대표 state 스냅샷 */
  it.each`
    type        | size    | color
    ${"square"} | ${"lg"} | ${"red"}
    ${"circle"} | ${"sm"} | ${"yellow"}
    ${"new"}    | ${"sm"} | ${"blue"}
  `(
    "snapshot – type:$type size:$size color:$color",
    ({ type, size, color }) => {
      const { container } = render(
        <Badge type={type as any} size={size as any} color={color as any}>
          SNAP
        </Badge>
      );
      // styled-components 해시 클래스까지 포함된 DOM을 스냅샷으로 고정
      expect(container.firstChild).toMatchSnapshot();
    }
  );
});

describe("<TextBadge />", () => {
  /** 1) 기본 렌더링 */
  it("텍스트가 정상적으로 표시된다", () => {
    render(<TextBadge text="DELIVERY" color="red" />);
    expect(screen.getByText("DELIVERY")).toBeInTheDocument();
  });

  /** 2) 대표 컬러 스냅샷 (디자인 회귀 테스트) */
  it.each(["red", "blue", "yellow", "orange"] as const)(
    "snapshot – color:%s",
    (color) => {
      const { container } = render(<TextBadge text="COLOR" color={color} />);
      expect(container.firstChild).toMatchSnapshot();
    }
  );
});

describe("<TimeBadge />", () => {
  /** 1) mm:ss 포맷 확인 */
  it("초 단위를 mm:ss로 포맷해 표시한다", () => {
    render(<TimeBadge time={125} />); // 2분 5초
    expect(screen.getByText("02:05")).toBeInTheDocument();
  });

  /** 2) 경계값(1시간 미만)도 올바르게 표시 */
  it("59분 59초도 올바르게 포맷된다", () => {
    render(<TimeBadge time={3599} />); // 59:59
    expect(screen.getByText("59:59")).toBeInTheDocument();
  });

  /** 3) 스냅샷 – 회귀용 */
  it("snapshot – 기본 상태", () => {
    const { container } = render(<TimeBadge time={0} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
