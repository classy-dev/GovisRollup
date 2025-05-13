/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import StoryLayout from "@ComponentFarm/modules/story_layout/StoryLayout";
import { Pagination, PaginationProps } from "./Pagination";

// Create a client

const meta: Meta = {
  title: "Modules/Pagination",
  tags: ["autodocs"],
  args: {
    Desc: `기본 라브리 사용, 실사용시 totalItemsCount에는 data?.count 등 count값`,
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

interface Props extends PaginationProps {
  darkMode: boolean;
}

const StoryPagination: Story<Props> = (args) => {
  const [params, setParams] = useState({
    page: 1,
    size: 10,
    search_type: 0,
  });
  const handlePageChange = (pageNumber: number) => {
    setParams((prev) => ({ ...prev, page: pageNumber }));
  };

  return (
    <StoryLayout {...args}>
      <Pagination
        pageInfo={[Number(params.page), Number(params.size)]}
        totalCount={100}
        handlePageChange={handlePageChange}
      />
    </StoryLayout>
  );
};
export const Default = StoryPagination.bind({});

Default.args = {
  darkMode: false,
};

Default.parameters = {
  controls: { exclude: ["setPageNumber"] },
};
