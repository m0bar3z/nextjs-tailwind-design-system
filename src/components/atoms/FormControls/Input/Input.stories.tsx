import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fn } from "storybook/test";

import Input from "./Input";

const meta = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bordered: Story = {
  args: {
    variant: "bordered",
    placeholder: "Placeholder for you...",
  },
};

export const Light: Story = {
  args: {
    variant: "light",
    placeholder: "Placeholder for you...",
  },
};

export const UnderLine: Story = {
  args: {
    variant: "underline",
    placeholder: "Placeholder for you...",
  },
};
