import React from "react";
import { render, screen, fireEvent } from "@ComponentFarm/test-utils";
import { StickyTable } from "./StickyTable";
import { data, customStyle } from "./data";

jest.mock("@table-library/react-table-library/compact", () => ({
  CompactTable: (props) => (
    <table data-testid="mock-table">
      <thead>
        <tr>
          {props.columns.map((col) => (
            <th key={col.label}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.nodes.map((row) => (
          <tr key={row.id}>
            {props.columns.map((col) => (
              <td key={`${row.id}-${col.label}`}>{col.renderCell(row)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
}));

jest.mock("@table-library/react-table-library/baseline", () => ({
  getTheme: () => ({}),
}));

// useTheme 스파이 추가
const useThemeSpy = jest.fn((args) => {
  // StickyTable 내부에서 useTheme([getTheme(), customTheme])로 호출함
  return args?.[1] || {}; // 두 번째 인자인 customTheme만 반환
});

jest.mock("@table-library/react-table-library/theme", () => ({
  useTheme: (args) => useThemeSpy(args),
}));

const columns = [
  { label: "ID", renderCell: (row) => row.id, pinLeft: true },
  { label: "Name", renderCell: (row) => row.name },
  { label: "Type", renderCell: (row) => row.type },
  { label: "isComplete", renderCell: (row) => String(row.isComplete) },
  {
    label: "Content?",
    renderCell: (row) => String(row._hasContent),
    pinRight: true,
  },
];

describe("<StickyTable />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("헤더와 셀 텍스트가 올바르게 렌더된다", () => {
    render(
      <StickyTable data={data} columns={columns} customStyle={customStyle} />
    );

    // 헤더 텍스트 확인
    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();

    // 셀 데이터 확인 - data.ts에서 가져온 데이터가 렌더링되어야 함
    expect(screen.getByText("Operating System")).toBeInTheDocument(); // 실제 데이터에 있는 값
    expect(screen.getByText("JavaScript")).toBeInTheDocument(); // 다른 실제 데이터
  });

  it("customStyle이 theme.Table에 적용된다", () => {
    render(
      <StickyTable data={data} columns={columns} customStyle={customStyle} />
    );

    // useTheme 호출 확인 및 인자 검증
    expect(useThemeSpy).toHaveBeenCalled();
    const themeArgs = useThemeSpy.mock.calls[0][0];

    // customStyle[0]이 grid-template-columns에 적용되었는지 확인
    expect(themeArgs[1].Table).toContain(customStyle[0]);
  });

  // 스크롤 테스트는 일단 간단히 테마 적용에 집중
  it("stickyPosition 기반 스타일이 theme에 적용된다", () => {
    // useState를 모킹하여 stickyPosition을 직접 제어
    const setStateMock = jest.fn();
    const useStateSpy = jest
      .spyOn(React, "useState")
      .mockReturnValueOnce(["right", setStateMock]);

    render(
      <StickyTable data={data} columns={columns} customStyle={customStyle} />
    );

    // useTheme 호출 확인
    expect(useThemeSpy).toHaveBeenCalled();

    // stickyPosition이 "right"일 때 테마에 반영되는지 확인
    // BaseCell 스타일에 "box-shadow: none" 포함되어야 함
    const customTheme = useThemeSpy.mock.calls[0][0][1];
    expect(customTheme.BaseCell).toContain("box-shadow: none");

    // 스파이 정리
    useStateSpy.mockRestore();
  });
});
