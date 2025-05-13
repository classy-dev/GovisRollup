import { render, screen, fireEvent } from "@ComponentFarm/test-utils";
import { Tabs } from "./Tab";

const mockTabs = [
  { title: "Tab 1", label: "3" },
  { title: "Tab 2" },
  { title: "Tab 3", label: "New" },
];

describe("<Tabs />", () => {
  /** 1) 탭 제목·뱃지 렌더링 */
  it("모든 탭과 라벨 뱃지가 렌더링된다", () => {
    render(<Tabs id="testTabs" tabs={mockTabs} activeTabIndex={0} />);
    mockTabs.forEach((t) =>
      expect(screen.getByText(t.title)).toBeInTheDocument()
    );
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  /** 2) 활성 탭은 underline 이 보인다 */
  it("activeTabIndex 에 해당하는 탭만 underline 이 렌더링된다", () => {
    const { container } = render(
      <Tabs id="testTabs" tabs={mockTabs} activeTabIndex={1} />
    );
    const underlines = container.querySelectorAll(".underline");
    expect(underlines).toHaveLength(1);
    expect(underlines[0].parentElement).toHaveTextContent("Tab 2");
  });

  /** 3) 클릭 시 onTabChange 가 올바른 index 로 호출된다 */
  it("탭을 클릭하면 onTabChange가 호출된다", () => {
    const handle = jest.fn();
    render(
      <Tabs
        id="testTabs"
        tabs={mockTabs}
        activeTabIndex={0}
        onTabChange={handle}
      />
    );

    fireEvent.click(screen.getByText("Tab 3"));
    expect(handle).toHaveBeenCalledWith(2);
  });

  /** 4) Badge 색상 – 활성/비활성 구분 */
  it("활성 탭의 Badge는 purple, 비활성 탭의 Badge는 gray 색상을 가진다", () => {
    const { container } = render(
      <Tabs id="testTabs" tabs={mockTabs} activeTabIndex={0} />
    );

    // 활성 탭(Tab 1)의 Badge 배경색 확인 (purple)
    const activeBadge = container.querySelectorAll(".badge")[0];
    expect(activeBadge).toHaveStyle("background-color: var(--bage-purpleBg)");

    // 비활성 탭(Tab 2)의 Badge 배경색 확인 (gray)
    const inactiveBadge = container.querySelectorAll(".badge")[1];
    expect(inactiveBadge).toHaveStyle("background-color: var(--bage-grayBg)");
  });
});
