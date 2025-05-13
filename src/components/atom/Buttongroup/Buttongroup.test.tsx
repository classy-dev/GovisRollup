import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import { render } from "@ComponentFarm/test-utils";
import { ButtonGroup } from "./Buttongroup";
import { options1 } from "./const";

describe("<ButtonGroup />", () => {
  it("옵션이 정상적으로 렌더링된다", () => {
    render(
      <ButtonGroup options={options1} active="Middle" setActive={jest.fn()} />
    );

    expect(screen.getByText("Leading")).toBeInTheDocument();
    expect(screen.getByText("Middle")).toBeInTheDocument();
    expect(screen.getByText("Trailing")).toBeInTheDocument();
  });

  it("active 항목에 isActive 스타일이 적용된다", () => {
    const { container } = render(
      <ButtonGroup options={options1} active="Middle" setActive={jest.fn()} />
    );

    const middleBtn = screen.getByText("Middle");
    expect(middleBtn).toHaveStyle("background-color: #F9FAFB"); // 활성화 스타일
  });

  it("클릭 시 setActive 가 호출된다", () => {
    const mockSetActive = jest.fn();

    render(
      <ButtonGroup
        options={options1}
        active="Leading"
        setActive={mockSetActive}
      />
    );

    fireEvent.click(screen.getByText("Trailing"));
    expect(mockSetActive).toHaveBeenCalledWith("Trailing");
  });
});
