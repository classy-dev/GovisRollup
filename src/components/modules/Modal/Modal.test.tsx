// src/components/modules/Modal/Modal.test.tsx
import React from "react";
import { render, screen } from "@ComponentFarm/test-utils";
import userEvent from "@testing-library/user-event";
import { Modal } from "./Modal";

/* ──────────────── Mocks ────────────────── */
// 1) Portal → children 그대로 반환
jest.mock("./Portal", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

// 2) framer-motion
jest.mock("framer-motion", () => {
  const React = require("react");
  const MockDiv = (React.forwardRef as any)(({ children, ...rest }, ref) => (
    <div ref={ref} {...rest}>
      {children}
    </div>
  ));
  const AnimatePresence = ({ children }: any) => <>{children}</>;
  return {
    __esModule: true,
    motion: { div: MockDiv },
    AnimatePresence,
  };
});

// 3) 아이콘
jest.mock("@ComponentFarm/atom/icons", () => ({
  Cross: () => <svg data-testid="Cross" />,
}));

/* ──────────────── Tests ────────────────── */
describe("<Modal />", () => {
  /**
   * 기본 렌더링 유틸
   */
  const setup = (
    override: Partial<React.ComponentProps<typeof Modal>> = {}
  ) => {
    const utils = {
      onClose: jest.fn(),
      onFormSubmit: jest.fn(),
      onCancel: jest.fn(),
      ...override,
    };
    render(
      <Modal isOpen title="Hello" {...utils}>
        내용
      </Modal>
    );
    return utils;
  };

  it("isOpen=true 면 제목·내용·버튼이 렌더된다", () => {
    setup();
    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText("내용")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "확인" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "취소" })).toBeInTheDocument();
  });

  it("Dimmed 클릭 시 onClose 호출", async () => {
    const user = userEvent.setup();
    const { onClose } = setup();
    await user.click(screen.getByTestId("dimmed-bg"));
    expect(onClose).toHaveBeenCalled();
  });

  it("“확인”/“취소” 버튼이 각각 onFormSubmit·onCancel 실행", async () => {
    const user = userEvent.setup();
    const { onFormSubmit, onCancel } = setup();
    await user.click(screen.getByRole("button", { name: "확인" }));
    expect(onFormSubmit).toHaveBeenCalled();
    await user.click(screen.getByRole("button", { name: "취소" }));
    expect(onCancel).toHaveBeenCalled();
  });

  it("showCloseButton=true 이면 X 아이콘이 뜨고 클릭 시 onClose", async () => {
    const user = userEvent.setup();
    const { onClose } = setup({ showCloseButton: true });
    expect(screen.getByTestId("Cross")).toBeInTheDocument();
    await user.click(screen.getByTestId("Cross").closest("button")!);
    expect(onClose).toHaveBeenCalled();
  });

  it("isOpen=false 면 아무것도 렌더되지 않는다", () => {
    render(
      <Modal isOpen={false} onClose={jest.fn()}>
        숨김
      </Modal>
    );
    expect(screen.queryByText("숨김")).not.toBeInTheDocument();
  });
});
