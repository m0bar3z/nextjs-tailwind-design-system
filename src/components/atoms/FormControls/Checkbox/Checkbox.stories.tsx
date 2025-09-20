import type { Meta, StoryObj } from "@storybook/nextjs";

import { fn } from "storybook/test";

import Checkbox from "./Checkbox";

const meta = {
  title: "Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Soft: Story = {
  args: {
    variant: "soft",
    defaultChecked: true,
  },
};

export const Solid: Story = {
  args: {
    variant: "solid",
    defaultChecked: true,
  },
};
