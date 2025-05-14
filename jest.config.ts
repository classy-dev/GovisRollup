import type { Config } from "@jest/types";
import { pathsToModuleNameMapper } from "ts-jest";
// tsconfig.json의 paths를 가져오기 위한 설정
// @ts-ignore
const { compilerOptions } = require("./tsconfig.json");

const config: Config.InitialOptions = {
  // React 테스트를 위한 jsdom 환경 지정
  testEnvironment: "jsdom",

  // TypeScript 파일을 위한 변환 설정
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json",
        // 타입 에러 억제 (사용자 선호에 따름)
        diagnostics: {
          warnOnly: true,
          ignoreCodes: [2698], // "Spread types may only be created from object types" 오류 코드
        },
      },
    ],
  },

  // 테스트 파일 패턴
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",

  // 모듈 엘리어스 설정 - tsconfig 경로 별칭을 Jest에서 인식할 수 있도록 매핑
  moduleNameMapper: {
    // TypeScript 경로 별칭 매핑
    ...pathsToModuleNameMapper(compilerOptions.paths || {}, {
      prefix: "<rootDir>/",
    }),

    // SVG base64 모듈 모의 처리
    "src/public/images/constants/svg-base64":
      "<rootDir>/src/__mocks__/svgBaseMock.js",

    // 스타일 및 미디어 파일 모의 처리
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__mocks__/fileMock.js",
  },

  // 모듈 확장자 해석
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  // 테스트 설정 파일
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  // 테스트 제외 패턴
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],

  // -----------------------------
  // 프로덕션 수준 설정 추가
  // -----------------------------

  // 1. 코드 커버리지 설정
  collectCoverage: false, // 코드 커버리지 수집 - CI/CD 파이프라인에서 true로 설정
  coverageDirectory: "<rootDir>/coverage", // 커버리지 보고서 디렉토리
  coverageReporters: ["text", "lcov", "clover", "html"], // 커버리지 보고서 형식
  coverageThreshold: {
    // 커버리지 임계값 설정
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
    // 특정 파일 또는 디렉토리에 대해 다른 임계값을 적용할 수 있음
    "src/components/**/*.{ts,tsx}": {
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  collectCoverageFrom: [
    // 커버리지 수집 파일 패턴
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.stories.{ts,tsx}",
    "!src/**/*.mock.{ts,tsx}",
    "!src/**/__mocks__/**",
    "!src/test-utils/**",
  ],

  // 2. 테스트 타임아웃 설정
  testTimeout: 10000, // 테스트 실행 제한 시간 (기본 5초)

  // 3. 테스트 성능 최적화 설정
  maxWorkers: "50%", // CPU 사용량 최적화 (CI 서버에서 유용)
  maxConcurrency: 5, // 동시 실행 테스트 개수 제한
  cacheDirectory: "<rootDir>/.jest-cache", // 테스트 결과 캐싱
  errorOnDeprecated: false, // 축소된 API 사용 시 오류 발생 (개발 환경에서는 false로 설정)
  detectLeaks: false, // 메모리 누수 감지 (현재 테스트에서는 끄고 프로덕션에서 사용)
  detectOpenHandles: true, // 열린 핸들 감지
  forceExit: false, // 테스트 완료 후 강제 종료

  // 4. 필수적인 프로덕션 설정
  bail: false, // 처음 실패한 테스트에서 중단 (CI에서는 true로 설정할 수 있음)
  verbose: true, // 상세한 출력
  clearMocks: true, // 각 테스트 전에 모든 모의 함수 초기화
  resetMocks: false, // 각 테스트 후 모든 모의 함수 초기화
  restoreMocks: true, // 각 테스트 후 스파이 함수 복원
  logHeapUsage: true, // 테스트 실행 중 힙 사용량 로깅
  watchPathIgnorePatterns: ["/node_modules/", "/dist/", "\\.git"], // 감시 모드에서 무시할 패턴
  notifyMode: "failure-change", // 감시 모드에서 알림 모드
  prettierPath: null, // 프리티어 사용하지 않음
};

export default config;
