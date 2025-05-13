// src/components/atom/ImageUploader/ImageUploader.test.tsx
import { render, screen } from "@ComponentFarm/test-utils";
import userEvent from "@testing-library/user-event";
import { ImageUploader } from "./ImageUploader";

/* ──────────────────────────────────────────────────────────
 아이콘 & URL.createObjectURL 초경량 mock
   ────────────────────────────────────────────────────────── */
jest.mock("@ComponentFarm/atom/icons", () => ({
  Pic: (p: any) => <svg data-testid="Pic" {...p} />,
  Plus: (p: any) => <svg data-testid="Plus" {...p} />,
  Edit: (p: any) => <svg data-testid="Edit" {...p} />,
}));

global.URL.createObjectURL = jest.fn(() => "blob:preview");

// ─── util ────────────────────────────────────────────────
const file = new File(["png"], "test.png", { type: "image/png" });

describe("<ImageUploader />", () => {
  it('pageMode="add" 이면 빈 상태(Pic 아이콘·텍스트)로 렌더된다', () => {
    render(<ImageUploader pageMode="add" product_image={null as any} />);

    expect(screen.getByTestId("Pic")).toBeInTheDocument();
    expect(screen.getByText("권장 용량 최대 2MB")).toBeInTheDocument();
    // “이미지 추가” 버튼
    expect(screen.getByTestId("Plus")).toBeInTheDocument();
  });

  it("product_image 가 주어지면 미리보기가 보이고 “이미지 수정” UI가 노출된다", () => {
    render(
      <ImageUploader
        product_image="https://example.com/img.jpg"
        pageMode="edit"
      />
    );

    const img = screen.getByRole("img") as HTMLImageElement;
    expect(img).toHaveAttribute("src", "https://example.com/img.jpg");
    expect(screen.getByTestId("Edit")).toBeInTheDocument();
    expect(screen.queryByTestId("Plus")).not.toBeInTheDocument();
  });

  it("파일을 업로드하면 onImageChange 가 호출되고 미리보기 src 가 blob URL 로 바뀐다", async () => {
    const user = userEvent.setup();
    const handle = jest.fn();

    render(
      <ImageUploader
        pageMode="add"
        product_image={null as any}
        onImageChange={handle}
      />
    );

    // 숨겨진 input 을 찾아 파일 업로드
    const input = screen
      .getByTestId("Pic")
      .closest("div")!
      .querySelector("input") as HTMLInputElement;

    await user.upload(input, file);

    expect(handle).toHaveBeenCalledWith(file);
    expect(await screen.findByRole("img")).toHaveAttribute(
      "src",
      "blob:preview"
    );
  });

  it("isReadOnly=true 면 클릭해도 input 이 열리지 않고 “이미지 수정/추가” UI가 숨겨진다", async () => {
    const user = userEvent.setup();
    render(
      <ImageUploader pageMode="edit" product_image={null as any} isReadOnly />
    );

    // 수정/추가 버튼 없음
    expect(screen.queryByTestId("Plus")).not.toBeInTheDocument();
    expect(screen.queryByTestId("Edit")).not.toBeInTheDocument();

    // GrayBox 클릭 → 파일 선택 창이 열리지 않도록 (input 클릭 방지)
    const grayBox = screen.getByTestId("Pic").parentElement as HTMLElement;
    const input = grayBox.querySelector("input") as HTMLInputElement;
    const spy = jest.spyOn(input, "click");

    await user.click(grayBox);
    expect(spy).not.toHaveBeenCalled();
  });
});
