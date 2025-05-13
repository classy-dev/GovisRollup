import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { getTheme } from "@table-library/react-table-library/baseline";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";

interface ColumnType<T> {
  label: string;
  renderCell: (item: T) => any; // 이 부분은 renderCell이 반환하는 타입에 따라 다를 수 있습니다.
  pinLeft?: boolean;
  pinRight?: boolean;
}

interface Props<T> {
  data: T[];
  columns: ColumnType<T>[];
  customStyle: any;
}

export const StickyTable = <T,>({ data, columns, customStyle }: Props<T>) => {
  const tableData = { nodes: data };
  const tableRef = useRef<HTMLTableElement>(null);
  const [stickyPosition, setStickyPosition] = useState("left");

  useEffect(() => {
    const handleScroll = (e: any) => {
      const element = e.target;
      if (element.scrollWidth - element.scrollLeft === element.clientWidth) {
        setStickyPosition("right");
      }
      if (element.scrollLeft === 0) {
        setStickyPosition("left");
      }
      if (
        element.scrollLeft !== 0 &&
        element.scrollWidth - element.scrollLeft !== element.clientWidth
      ) {
        setStickyPosition("move");
      }
    };

    const tableElement = tableRef.current;
    if (tableElement) {
      tableElement.addEventListener("scroll", handleScroll);

      // Clean up function
      return () => {
        tableElement.removeEventListener("scroll", handleScroll);
      };
    }
    return () => {};
  }, []);

  const theme = useTheme([
    getTheme(),
    {
      Table: `
        --data-table-library_grid-template-columns:  ${customStyle[0]};
      `,
      BaseCell: `
      ${customStyle[1]}
        &:nth-of-type(${customStyle[2]}), &:nth-of-type(${customStyle[3]}) {
          &:after {
            position: absolute;
            top: 0;
            bottom: -1px;
            width: 25px;
            transform: translateX(-100%);
            transition: box-shadow .3s;
            content: "";
            pointer-events: none;
          }
        }
        &:nth-of-type(1) {
          left: 0px;
        }
        &:nth-of-type(5) {
          right: 0px;
        }
      
        &:nth-of-type(${customStyle[2]}) {
          &:after {
            right: 0;
            ${
              stickyPosition === "left"
                ? "box-shadow: none"
                : "box-shadow: inset 10px 0 15px -8px rgba(0,0,0,.15);"
            }  
          }
        }

        &:nth-of-type(${customStyle[3]}) {
          &:after {
            left: 0;
            ${
              stickyPosition === "right"
                ? "box-shadow: none"
                : "box-shadow: inset -10px 0 15px -8px rgba(0,0,0,.15);"
            }  
          }
        }
      `,
    },
  ]);

  return (
    <CompactTable
      columns={columns}
      ref={tableRef}
      data={tableData}
      theme={theme}
      layout={{ custom: true, horizontalScroll: true }}
    />
  );
};
