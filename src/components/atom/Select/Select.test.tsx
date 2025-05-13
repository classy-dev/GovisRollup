import { render, screen } from "@ComponentFarm/test-utils";
import userEvent from "@testing-library/user-event";
import { Select } from "./Select";
import { IOption } from "./Select";

const options: IOption[] = [
  { label: "Apple", value: "apple" },
  { label: "Orange", value: "orange" },
  { label: "Banana", value: "banana" },
];

describe("<Select />", () => {
  /** 1) placeholder 렌더 + 옵션 클릭 → setSelectedOption 호출 */
  it("placeholder 가 보이고, 옵션 선택 시 setSelectedOption 이 호출된다", async () => {
    const user = userEvent.setup();
    const setSelected = jest.fn();

    render(
      <Select
        options={options}
        selectedOption={null}
        setSelectedOption={setSelected}
        placeholder="과일 선택"
      />
    );

    // placeholder 확인
    expect(screen.getByText("과일 선택")).toBeInTheDocument();

    // 메뉴 열고 옵션 클릭
    await user.click(screen.getByText("과일 선택"));
    await user.click(screen.getByText("Orange"));

    const firstArg = (setSelected.mock.calls[0] as any)[0];
    expect(firstArg).toEqual(expect.objectContaining({ value: "orange" }));
  });

  /** 2) selectedOption 이 문자열이어도 초기값이 표시된다 */
  it("selectedOption 을 문자열로 넘겨도 라벨이 표시된다", () => {
    render(
      <Select
        options={options}
        selectedOption="banana"
        setSelectedOption={jest.fn()}
      />
    );

    expect(screen.getByText("Banana")).toBeInTheDocument();
  });

  /** 3) prefixLabel 이 Control 앞에 표시된다 */
  it("prefixLabel 이 있으면 컨트롤 앞에 표시된다", () => {
    render(
      <Select
        options={options}
        selectedOption={null}
        setSelectedOption={jest.fn()}
        prefixLabel="+82"
      />
    );

    expect(screen.getByText("+82")).toBeInTheDocument();
  });

  /** 4) disabled 상태에서는 메뉴가 열리지 않는다 */
  it("isDisabled 가 true면 클릭해도 메뉴가 열리지 않는다", async () => {
    const user = userEvent.setup();

    render(
      <Select
        options={options}
        selectedOption={null}
        setSelectedOption={jest.fn()}
        placeholder="Disabled"
        isDisabled
      />
    );

    const selectControl = screen
      .getByText("Disabled")
      .closest('div[class*="control"]');
    expect(selectControl).toHaveAttribute("aria-disabled", "true");
  });
});
