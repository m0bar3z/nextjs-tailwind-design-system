import type { Meta, StoryObj } from "@storybook/nextjs";

import { fn } from "storybook/test";

import Select from "./Select";

const meta = {
  title: "Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Soft: Story = {
  args: {
    options: [
      { value: "foo", label: "foo" },
      { value: "bar", label: "bar" },
    ],
  },
};
