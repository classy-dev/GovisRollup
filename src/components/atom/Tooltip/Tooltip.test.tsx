import { render, screen } from "@ComponentFarm/test-utils";
import userEvent from "@testing-library/user-event";
import { Tooltip } from "./Tooltip";

const TOOLTIP_TEXT = "안녕하세요, 툴팁입니다!";

describe("<Tooltip />", () => {
  /** 1) hover 타입 – 마우스 오버/아웃 시 show 클래스 토글 */
  it("hover 시 툴팁이 나타나고, 벗어나면 사라진다", async () => {
    const user = userEvent.setup();
    render(
      <button type="button">
        Hover me
        <Tooltip eventType="hover">{TOOLTIP_TEXT}</Tooltip>
      </button>
    );

    const button = screen.getByRole("button", { name: /hover me/i });
    const tooltipContainer = screen.getByText(TOOLTIP_TEXT).parentElement!;

    // 초기 상태: hidden
    expect(tooltipContainer.classList.contains("show")).toBe(false);

    // hover → show
    await user.hover(button);
    expect(tooltipContainer.classList.contains("show")).toBe(true);

    // unhover → hide
    await user.unhover(button);
    expect(tooltipContainer.classList.contains("show")).toBe(false);
  });

  /** 2) click 타입 – 클릭으로 토글, 바깥 클릭 시 닫힘 */
  it("click 타입은 클릭 시 토글되고, 외부 클릭 시 닫힌다", async () => {
    const user = userEvent.setup();
    render(
      <>
        <div data-testid="outside">외부</div>
        <button type="button">
          Click me
          <Tooltip eventType="click">{TOOLTIP_TEXT}</Tooltip>
        </button>
      </>
    );

    const button = screen.getByRole("button", { name: /click me/i });
    const tooltipContainer = screen.getByText(TOOLTIP_TEXT).parentElement!;
    const outside = screen.getByTestId("outside");

    // 첫 클릭 → open
    await user.click(button);
    expect(tooltipContainer.classList).toContain("show");

    // 두 번째 클릭(버튼) → close
    await user.click(button);
    expect(tooltipContainer.classList).not.toContain("show");

    // 다시 열고 외부 클릭 → close
    await user.click(button);
    expect(tooltipContainer.classList).toContain("show");
    await user.click(outside);
    expect(tooltipContainer.classList).not.toContain("show");
  });

  /** 3) direction·size 클래스 적용 */
  it("direction 과 size prop 에 따른 클래스가 적용된다", () => {
    render(
      <span>
        anchor
        <Tooltip direction="left" size="sm">
          {TOOLTIP_TEXT}
        </Tooltip>
      </span>
    );

    const tooltipContainer = screen.getByText(TOOLTIP_TEXT).parentElement!;
    expect(tooltipContainer.classList).toContain("left");
    expect(tooltipContainer.classList).toContain("sm");
  });
});
