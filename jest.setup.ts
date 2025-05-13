// Jest DOM 확장 추가 (toBeInTheDocument 등의 matcher 제공)
import "@testing-library/jest-dom";

// 브라우저 환경 모의 구현
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// ResizeObserver mock (일부 React 컴포넌트에서 필요)
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Microsoft Edge Tools 관련 오류와 불필요한 경고 무시
const originalError = console.error;
console.error = (...args) => {
  if (
    args[0] &&
    typeof args[0] === "string" &&
    (args[0].includes("Microsoft Edge Tools") ||
      args[0].includes("React does not recognize") ||
      args[0].includes("Unknown prop") ||
      args[0].includes("Warning: "))
  ) {
    return;
  }
  originalError(...args);
};

// TypeScript 관련 경고 억제 (사용자 선호에 따른 타입 오류 억제)
const originalWarn = console.warn;
console.warn = (...args) => {
  if (
    args[0] &&
    typeof args[0] === "string" &&
    (args[0].includes("TypeScript") || args[0].includes("Spread types"))
  ) {
    return;
  }
  originalWarn(...args);
};
