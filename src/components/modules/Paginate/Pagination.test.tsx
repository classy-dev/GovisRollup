import { render, screen } from "@ComponentFarm/test-utils";
import userEvent from "@testing-library/user-event";
import { Pagination } from "./Pagination";

/* react-js-pagination 을 초경량 목으로 대체
   - 클릭 시 onChange 로 page 번호만 넘겨줌 */
jest.mock("react-js-pagination", () => {
  return ({ activePage, totalItemsCount, onChange }: any) => (
    <nav data-testid="mock-pagination">
      <button
        onClick={() => onChange(activePage - 1)}
        disabled={activePage === 1}
      >
        «
      </button>
      <span data-testid="page-now">{activePage}</span> /
      <span data-testid="page-total">{Math.ceil(totalItemsCount / 10)}</span>
      <button onClick={() => onChange(activePage + 1)}>»</button>
    </nav>
  );
});

describe("<Pagination />", () => {
  it("렌더만 해도 페이지 번호가 표시된다", () => {
    render(
      <Pagination
        pageInfo={[2, 10]}
        totalCount={100}
        handlePageChange={jest.fn()}
      />
    );
    expect(screen.getByTestId("page-now")).toHaveTextContent("2");
    expect(screen.getByTestId("page-total")).toHaveTextContent("10");
  });

  it("버튼을 클릭하면 handlePageChange 가 호출된다", async () => {
    const user = userEvent.setup();
    const handle = jest.fn();
    render(
      <Pagination
        pageInfo={[1, 10]}
        totalCount={30}
        handlePageChange={handle}
      />
    );

    await user.click(screen.getByText("»"));
    expect(handle).toHaveBeenCalledWith(2);
  });
});
