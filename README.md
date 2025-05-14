# GOVIS UI 컴포넌트 라이브러리

<div align="center">
  <img src="./src/public/images/mock/thumb.png" alt="GOVIS Design System" width="400" />
</div>

## 개요

이 프로젝트는 고피자(GOPIZZA)에서 사용하던 공통 UI 컴포넌트를 독립적인 라이브러리로 추출하여 모듈화한 것입니다. 여러 애플리케이션에서 일관된 사용자 경험을 제공하고 개발 효율성을 높이기 위해 Rollup으로 번들링하여 관리하고 있습니다.

이 라이브러리는 아토믹 디자인 원칙을 기반으로 구성되어 있으며, 모든 컴포넌트는 TypeScript로 작성되어 타입 안정성을 보장합니다. 또한 Storybook을 통한 컴포넌트 문서화와 Jest 및 React Testing Library를 활용한 테스트로 품질을 관리하고 있습니다.

## 기술 스택

- **React**: UI 컴포넌트 라이브러리
- **TypeScript**: 정적 타입 지원
- **Emotion**: CSS-in-JS 스타일링 솔루션
- **Rollup**: 모듈 번들러
- **Storybook**: 컴포넌트 문서화 및 개발 환경
- **Jest & React Testing Library**: 테스트 프레임워크

## 주요 특징

- **모듈식 구조**: atom, modules로 구성된 체계적인 컴포넌트 구조
- **타입 안정성**: TypeScript를 활용한 강력한 타입 시스템
- **Emotion 스타일링**: CSS-in-JS 방식의 스타일링으로 일관된 디자인 적용
- **테스트 자동화**: Jest와 React Testing Library를 활용한 테스트 자동화
- **문서화**: Storybook을 통한 컴포넌트 문서화 및 인터랙션 테스트
- **Rollup 번들링**: 최적화된 배포를 위한 Rollup 구성

## 프로젝트 구조

```
GovisRollup/
├── .storybook/           # Storybook 설정
├── dist/                 # 빌드 결과물
├── scripts/              # 유틸리티 스크립트
├── src/
│   ├── components/
│   │   ├── atom/        # 기본 UI 컴포넌트
│   │   ├── modules/     # 복합 컴포넌트
│   │   ├── theme.ts     # 테마 설정
│   │   └── ...
│   ├── hook/            # 커스텀 훅
│   ├── public/          # 정적 리소스
│   └── index.ts         # 라이브러리 진입점
├── rollup.config.js      # Rollup 설정
├── jest.config.ts        # Jest 설정
├── tsconfig.json         # TypeScript 설정
└── package.json          # 프로젝트 메타데이터
```

## 테스트 전략

이 라이브러리는 다음과 같은 테스트 전략을 활용합니다:

1. **유닛 테스트**: 개별 컴포넌트의 기능 테스트
2. **스냅샷 테스트**: UI 변경 사항 감지
3. **인터랙션 테스트**: 사용자 상호작용 시뮬레이션

## 설치 방법

이 패키지를 설치하기 위해서는 GitHub 인증이 필요합니다. 다음과 같이 .npmrc 파일을 설정하세요:

```bash
@classy-dev:registry=[https://npm.pkg.github.com](https://npm.pkg.github.com)
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

그리고 다음 명령어를 실행하여 설치하세요:

```bash
# npm 사용 시
npm install @classy-dev/gopizza-design-system

# yarn 사용 시
yarn add @classy-dev/gopizza-design-system
```

## 제공 컴포넌트

### 기본 컴포넌트 (Atom)

- **Badge**: 상태 표시를 위한 뱃지 컴포넌트
- **Button**: 다양한 스타일과 크기를 지원하는 버튼
- **Buttongroup**: 버튼 그룹 컨테이너
- **Checkbox**: 체크박스 입력 컴포넌트
- **ChkMark**: 체크 마크 표시 컴포넌트
- **Color**: 색상 표시 컴포넌트
- **Divider**: 구분선 컴포넌트
- **Empty**: 데이터 없음 상태 표시
- **ErrorTxt**: 오류 메시지 표시
- **Radio**: 라디오 버튼
- **Select**: 드롭다운 선택 컴포넌트
- **Spinner**: 로딩 스피너
- **Tab**: 탭 네비게이션
- **Tooltip**: 툴팁 컴포넌트

### 복합 컴포넌트 (Modules)

- **AddressSearch**: 주소 검색 컴포넌트
- **CheckBoxGroup**: 체크박스 그룹 관리
- **DatePicker**: 날짜 선택 컴포넌트
- **DateRange**: 날짜 범위 선택
- **ImageUploader**: 이미지 업로드 컴포넌트
- **Modal**: 모달 다이얼로그
- **Pagination**: 페이지네이션 컴포넌트
- **RadioGroup**: 라디오 버튼 그룹
- **StickyTable**: 헤더 고정 테이블

## 개발 환경 설정

```bash
# 의존성 설치
yarn install

# 개발 모드 실행 (소스 변경 시 자동 빌드)
yarn dev

# Storybook 실행
yarn storybook

# 테스트 실행
yarn test

# 배포용 빌드
yarn build
```
