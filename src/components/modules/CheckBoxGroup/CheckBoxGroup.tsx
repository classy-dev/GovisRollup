import React, { ReactNode, useEffect, useState } from "react";
import { CheckBox, CheckBoxProps } from "@ComponentFarm/atom/Checkbox/CheckBox";

export type CheckBoxGroupSize = "sm" | "md";
const sizes = {
  sm: "1.6rem",
  md: "2.4rem",
};

export interface CheckBoxGroupProps {
  chksize?: CheckBoxGroupSize;
  children?: React.ReactNode;
  options?: { label: string; subText?: string; value: string }[];
  onChange?: (event: string[]) => void;
  allChechkHandler?: { label: string; value: string }[];
  name: string;
  control?: any;
  initialCheckedValues?: string[];
  disabled?: boolean;
}

export const CheckBoxGroup = ({
  chksize,
  children,
  options,
  onChange,
  allChechkHandler,
  name,
  control,
  initialCheckedValues = [],
  disabled = false,
}: CheckBoxGroupProps) => {
  const [customAllChk, setCustomAllChk] = useState(false);
  const [values, setValues] = useState<{ [key: string]: boolean }>(
    initialCheckedValues.reduce((acc: { [key: string]: boolean }, curr) => {
      acc[curr] = true;
      return acc;
    }, {})
  );

  const isAllSelected = allChechkHandler
    ? allChechkHandler.every(({ value }) => values[value]) &&
      Object.keys(values).length !== 0
    : false;

  const handleAllChange = (checked: boolean) => {
    const newValues = { ...values };
    allChechkHandler?.forEach(({ value }) => {
      newValues[value] = checked;
    });
    setValues(newValues);
  };

  useEffect(() => {
    if (onChange) {
      onChange(Object.keys(values).filter((key) => values[key]));
    }
  }, [values, onChange]);

  const handleChange = (value: string, checked: boolean) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value]: checked,
    }));
  };

  useEffect(() => {
    let isCustomAllChk = false;

    // 'nodes' 매개변수를 'children'으로 변경
    const checkNodes = (nodes: ReactNode) => {
      React.Children.forEach(nodes, (node) => {
        if (
          React.isValidElement<CheckBoxProps>(node) &&
          node.type === CheckBox &&
          node.props.value === "allChkHandler"
        ) {
          isCustomAllChk = true;
        }

        // 재귀적으로 자식 노드를 확인
        if (
          React.isValidElement(node) &&
          (node.props as unknown as { children: ReactNode }).children
        ) {
          checkNodes(
            (node.props as unknown as { children: ReactNode }).children
          );
        }
      });
    };

    checkNodes(children); // 'children' 매개변수를 함수에 전달

    setCustomAllChk(isCustomAllChk);
  }, [children]);

  const renderChildren = (nodes: ReactNode): ReactNode => {
    return React.Children.map(nodes, (node) => {
      if (React.isValidElement<CheckBoxProps>(node) && node.type === CheckBox) {
        if (node.props.value === "allChkHandler") {
          return (
            <CheckBox
              key="all"
              value="all"
              checked={isAllSelected}
              chksize={chksize}
              onChange={(e: any) => handleAllChange(e.target.checked)}
              label={node.props.label ?? "All"}
            />
          );
        }
        const isChecked = !!values[String(node.props.value)];
        return React.cloneElement(node, {
          checked: isChecked,
          onChange: (e: any) =>
            handleChange(String(node.props.value), e.target.checked),
          disabled,
        });
      }

      if (
        React.isValidElement(node) &&
        (node.props as unknown as { children: ReactNode }).children
      ) {
        const newProps = {
          children: renderChildren(
            (node.props as unknown as { children: ReactNode }).children
          ),
        };
        return React.cloneElement(node, newProps);
      }
      return node;
    });
  };

  const renderOptions = (
    optionArr: { label: string; subText?: string; value: string }[]
  ): ReactNode => {
    return optionArr.map((option) => (
      <CheckBox
        key={option.value}
        value={option.value}
        checked={!!values[option.value]}
        onChange={(e: any) => handleChange(option.value, e.target.checked)}
        chksize={chksize}
        label={option.label}
        subText={option.subText}
        disabled={disabled}
      />
    ));
  };

  const renderAllCheckbox = () => {
    return allChechkHandler ? (
      <CheckBox
        key="all"
        value="all"
        checked={isAllSelected}
        chksize={chksize}
        onChange={(e: any) => handleAllChange(e.target.checked)}
        label="All"
        disabled={disabled}
      />
    ) : null;
  };

  return (
    <span className="box_checkbox_group">
      {!customAllChk && renderAllCheckbox()}
      {options ? renderOptions(options) : renderChildren(children)}
    </span>
  );
};
