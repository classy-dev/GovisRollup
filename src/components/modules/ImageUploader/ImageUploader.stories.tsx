/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Meta, Story } from "@storybook/react";
import StoryLayout from "@ComponentFarm/modules/story_layout/StoryLayout";
import { ImageUploader } from "./ImageUploader";

// Create a client

const meta: Meta = {
  title: "Modules/ImageUploader",
  tags: ["autodocs"],
  args: {
    Desc: ``,
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

const StoryPagination: Story<Props> = (args) => {
  return (
    <StoryLayout {...args}>
      <ImageUploader product_image="" />
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
