import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeGovisProvider } from "./ThemeGovisProvider";

// 모든 컴포넌트 테스트를 위한 커스텀 렌더 함수
const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return <ThemeGovisProvider>{children}</ThemeGovisProvider>;
  };

  return render(ui, { wrapper: Wrapper, ...options });
};

// re-export testing-library의 나머지 함수들
export * from "@testing-library/react";

// customRender로 오버라이드
export { customRender as render };
