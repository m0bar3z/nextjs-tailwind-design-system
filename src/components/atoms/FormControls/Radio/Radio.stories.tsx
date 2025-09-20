import type { Meta, StoryObj } from "@storybook/nextjs";

import { fn } from "storybook/test";

import Radio from "./Radio";

const meta = {
  title: "Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Radio>;

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
