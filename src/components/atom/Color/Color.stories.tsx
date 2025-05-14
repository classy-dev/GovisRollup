import React from "react";
import { Meta, Story } from "@storybook/react";
import { css as emotionCss } from "@emotion/react";
import StoryLayout from "@ComponentFarm/modules/story_layout/StoryLayout";
import { COLOR } from "@ComponentFarm/token";
import { Color, ColorProps } from "./Color";

const meta: Meta = {
  title: "Atoms/Color",
  tags: ["autodocs"],
  parameters: {
    docs: {
      story: { inline: true }, // render the story in an iframe
      canvas: { sourceState: "shown" }, // start with the source open
      source: { type: "code" }, // forces the raw source code (rather than the rendered JSX).
    },
  },
};

export default meta;

interface Props extends ColorProps {
  darkMode: boolean;
}

const customStyles = emotionCss`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  @media (min-width: 768px) {
        grid-template-columns: repeat(8, minmax(0, 1fr));
  }
`;

const Colors: Story<Props> = (args) => (
  <StoryLayout {...args} customCss={customStyles}>
    {Object.entries(COLOR).map(([bgColor, hex]) => (
      <Color key={bgColor} color={{ bgColor, hex }} />
    ))}
  </StoryLayout>
);

export const ColorsInfo = Colors.bind({});

ColorsInfo.argTypes = {
  darkMode: {
    control: "boolean",
  },
};
