import { screen, fireEvent } from "@testing-library/react";
import { render } from "@ComponentFarm/test-utils";
import { Button, BtnDelete } from "./Button";
import { FaCheck, FaTimes } from "react-icons/fa";

describe("<Button />", () => {
  /** 1) 텍스트 렌더링 */
  it("children 이 정상적으로 표시된다", () => {
    render(<Button>CONFIRM</Button>);
    expect(screen.getByText("CONFIRM")).toBeInTheDocument();
  });

  /** 2) onClick – 활성 / 비활성 */
  it("클릭 시 onClick 이 호출된다 (enabled)", () => {
    const handle = jest.fn();
    render(<Button onClick={handle}>CLICK</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handle).toHaveBeenCalledTimes(1);
  });

  it("disabled 상태에선 onClick 이 호출되지 않는다", () => {
    const handle = jest.fn();
    render(
      <Button onClick={handle} disabled>
        DISABLED
      </Button>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(handle).not.toHaveBeenCalled();
  });

  /** 3) isLoading → Spinner 표시, children 숨김 */
  it("isLoading 이 true면 Spinner만 렌더링된다", () => {
    render(<Button isLoading>LOADING</Button>);
    expect(screen.queryByText("LOADING")).toBeNull();
    expect(screen.getByLabelText("loading")).toBeInTheDocument();
  });

  /** 4) 아이콘 조합 */
  it("Leading, Trailing, IconOnly 렌더링", () => {
    render(
      <Button
        LeadingIcon={<FaCheck data-testid="lead" />}
        TrailingIcon={<FaTimes data-testid="trail" />}
      >
        ICONS
      </Button>
    );
    expect(screen.getByTestId("lead").tagName).toBe("svg");
    expect(screen.getByTestId("trail").tagName).toBe("svg");

    render(<Button IconOnly={<FaCheck data-testid="only" />} />);
    expect(screen.getByTestId("only").tagName).toBe("svg");
  });

  /** 5) 대표 variant+size 스냅샷 (회귀 테스트) */
  it.each`
    variant          | size
    ${"primary"}     | ${"md"}
    ${"gostPrimary"} | ${"sm"}
    ${"transparent"} | ${"lg"}
  `("snapshot – %s / %s", ({ variant, size }) => {
    const { container } = render(
      <Button variant={variant as any} size={size as any}>
        SNAP
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("<BtnDelete />", () => {
  it("onClick 이 잘 호출되며 이벤트 전파를 중단한다", () => {
    const del = jest.fn();
    const parentClick = jest.fn();

    render(
      <div onClick={parentClick}>
        <BtnDelete onClick={del} />
      </div>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(del).toHaveBeenCalledTimes(1);
    expect(parentClick).not.toHaveBeenCalled();
  });
});
