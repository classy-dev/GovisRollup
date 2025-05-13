import { render, screen } from "@ComponentFarm/test-utils";
import userEvent from "@testing-library/user-event";
import { AddressSearch } from "./AddressSearch";

// ─── 라이브러리·모달 간단 Mock ──────────────────────────────
jest.mock("react-daum-postcode", () => ({
  __esModule: true,
  default: ({ onComplete }: any) => (
    <button
      data-testid="postcode-mock"
      onClick={() =>
        onComplete({
          address: "서울 강남구 테헤란로 123",
          bname: "",
          buildingName: "",
        })
      }
    >
      PostcodeMock
    </button>
  ),
}));

jest.mock("@ComponentFarm/modules/Modal/Modal", () => ({
  Modal: ({ isOpen, children }: any) =>
    isOpen ? <div data-testid="modal">{children}</div> : null,
}));

// ─── 테스트 시작 ────────────────────────────────────────────
describe("<AddressSearch />", () => {
  /** 1) 입력창·버튼 렌더링 + 팝업 열기 */
  it("버튼을 클릭하면 모달이 열리고, 주소 검색 컴포넌트가 나타난다", async () => {
    const user = userEvent.setup();
    render(<AddressSearch placeholder="주소" />);

    // 모달 열기
    await user.click(screen.getByRole("button", { name: "주소 검색" }));
    expect(screen.getByTestId("modal")).toBeInTheDocument();
    expect(screen.getByTestId("postcode-mock")).toBeInTheDocument();
  });

  /** 2) onComplete → input 값 세팅 & onSearch 호출 */
  it("주소를 선택하면 input value 가 바뀌고 onSearch 가 호출된다", async () => {
    const user = userEvent.setup();
    const onSearch = jest.fn();
    let value = "";

    const { rerender } = render(
      <AddressSearch
        value={value}
        onSearch={(addr) => {
          value = addr;
          onSearch(addr);
        }}
      />
    );

    // 모달 열기
    await user.click(screen.getByRole("button", { name: "주소 검색" }));

    // 주소 선택 시뮬레이션
    await user.click(screen.getByTestId("postcode-mock"));

    // value 업데이트 후 리렌더
    rerender(<AddressSearch value={value} onSearch={onSearch} />);

    // input 값 확인
    const input = screen.getByRole("textbox");
    console.log(input);
    expect(input).toHaveValue("서울 강남구 테헤란로 123 ");

    // onSearch 호출 확인
    expect(onSearch).toHaveBeenCalledWith("서울 강남구 테헤란로 123 ");
  });

  /** 3) disabled 상태에선 모달이 열리지 않는다 */
  it("disabled 가 true면 버튼·input 모두 비활성화되어 팝업이 열리지 않는다", async () => {
    const user = userEvent.setup();
    render(<AddressSearch disabled />);

    await user.click(screen.getByRole("button", { name: "주소 검색" }));
    expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
  });
});
