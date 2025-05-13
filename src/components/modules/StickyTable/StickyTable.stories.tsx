import React from "react";
import { Meta, Story } from "@storybook/react";
import { css } from "@emotion/react";
import StoryLayout from "@ComponentFarm/modules/story_layout/StoryLayout";
import { customStyle, data } from "./data";
import { StickyTable } from "./StickyTable";

const meta: Meta = {
  title: "MODULES/StickyTable",
  tags: ["autodocs"],
  args: {
    Desc: {
      usages: `labe에는 th에 들어갈 텍스트, renderCell에는 각 data 들을 연결해주면 됨, customStyle에는 전체 colwidth 를 배열의 첫번째요소, 두번째요소는 첫행, 마지막행을 제외한 stickyColoumn의 left 혹은 right 값, 세번째, 네번째는 그라데이션을 나타나게 할 열`,
    },
  },
  parameters: {
    docs: {
      story: { inline: true }, // render the story in an iframe
      canvas: { sourceState: "shown" }, // start with the source open
      source: { type: "code" }, // forces the raw source code (rather than the rendered JSX).
    },
  },
};

export default meta;

interface Props {
  darkMode: boolean;
}

const StoryDatePicker: Story<Props> = (args) => {
  interface DataType {
    id: string;
    name: string;
    deadline: Date;
    type: string;
    isComplete: boolean;
    _hasContent: boolean;
    nodes: DataType[] | null;
  }

  // function onSortChange(action: any, state: any) {
  //   console.log(action, state);
  // }

  // const sort = useSort(
  //   data,
  //   {
  //     onChange: onSortChange,
  //   },
  //   {
  //     sortFns: {
  //       TASK: array => array.sort((a, b) => a.name.localeCompare(b.name)),
  //       DEADLINE: array => array.sort((a, b) => a.deadline - b.deadline),
  //       TYPE: array => array.sort((a, b) => a.type.localeCompare(b.type)),
  //       COMPLETE: array => array.sort((a, b) => a.isComplete - b.isComplete),
  //       TASKS: array =>
  //         array.sort((a, b) => (a.nodes || []).length - (b.nodes || []).length),
  //     },
  //   }
  // );

  const COLUMNS = [
    {
      label: "Task",
      renderCell: (item: DataType) => item.name,
      pinLeft: true,
      sort: { sortKey: "TASK" },
    },
    {
      label: "Deadline",
      renderCell: () => "여러 컨텐츠들이 있어요.",
      pinLeft: true,
    },
    { label: "Type", renderCell: (item: DataType) => item.type },
    {
      label: "Complete",
      renderCell: (item: DataType) => item.isComplete.toString(),
    },
    {
      label: "Tasks",
      renderCell: (item: DataType) => item.nodes?.length,
      pinRight: true,
    },
  ];

  return (
    <StoryLayout
      {...args}
      customCss={css`
        height: 500px;
      `}
    >
      <StickyTable data={data} columns={COLUMNS} customStyle={customStyle} />
    </StoryLayout>
  );
};
export const Default = StoryDatePicker.bind({});
