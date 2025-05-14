const fs = require("fs");
const path = require("path");

// SVG 파일을 읽어서 base64로 변환
function svgToBase64(filePath) {
  try {
    const absolutePath = path.resolve(__dirname, "..", filePath);
    if (fs.existsSync(absolutePath)) {
      const svg = fs.readFileSync(absolutePath, "utf8");
      return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
    } else {
      console.error(`파일을 찾을 수 없습니다: ${absolutePath}`);
      return null;
    }
  } catch (error) {
    console.error(`오류 발생: ${error.message}`);
    return null;
  }
}

// 잔타식 디렉토리 경로
const SVG_DIRECTORIES = [
  "src/public/images/common",
  // 추가로 검색할 디렉토리를 여기에 추가
];

// base64 상수를 담을 객체
const svgConstants = {};

// 각 디렉토리를 검색하여 SVG 파일 처리
SVG_DIRECTORIES.forEach((directory) => {
  const fullDirPath = path.resolve(__dirname, "..", directory);

  // 디렉토리가 존재하는지 확인
  if (!fs.existsSync(fullDirPath)) {
    console.warn(`디렉토리가 존재하지 않습니다: ${fullDirPath}`);
    return;
  }

  try {
    // 디렉토리에서 모든 파일 읽기
    const files = fs.readdirSync(fullDirPath);

    // SVG 파일만 필터링
    const svgFiles = files.filter(
      (file) => path.extname(file).toLowerCase() === ".svg"
    );

    console.log(
      `${directory} 디렉토리에서 ${svgFiles.length}개의 SVG 파일을 찾았습니다.`
    );

    // 각 SVG 파일을 base64로 변환
    svgFiles.forEach((file) => {
      const filePath = path.join(directory, file);
      const fileName = path.basename(file, ".svg");
      const base64 = svgToBase64(filePath);

      if (base64) {
        svgConstants[fileName] = base64;
      }
    });
  } catch (error) {
    console.error(`디렉토리 검색 중 오류 발생 (${directory}):`, error);
  }
});

// constants 디렉토리 확인 및 생성
const constantsDir = path.resolve(
  __dirname,
  "..",
  "src",
  "public",
  "images",
  "constants"
);
if (!fs.existsSync(constantsDir)) {
  fs.mkdirSync(constantsDir, { recursive: true });
}

// TypeScript 상수 파일 생성
const tsContent = `// 자동 생성된 파일입니다. 직접 수정하지 마세요.
export const SVG_BASE64 = ${JSON.stringify(svgConstants, null, 2)};
`;

fs.writeFileSync(path.resolve(constantsDir, "svg-base64.ts"), tsContent);

console.log("SVG base64 상수 파일이 생성되었습니다.");
