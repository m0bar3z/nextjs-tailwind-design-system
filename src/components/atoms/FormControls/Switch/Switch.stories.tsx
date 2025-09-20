import type { Meta, StoryObj } from "@storybook/nextjs";

import { fn } from "storybook/test";

import Switch from "./Switch";

const meta = {
  title: "Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Soft: Story = {
  args: {
    variant: "soft",
  },
};

export const Solid: Story = {
  args: {
    variant: "solid",
  },
};
