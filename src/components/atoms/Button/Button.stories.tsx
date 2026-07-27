import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn } from "storybook/test";
import Button from "./Button";

const variants = ["solid", "outlined", "ghost", "soft"] as const;
const colors = ["primary", "secondary", "success", "error", "warning", "dark"] as const;
const sizes = ["sm", "md", "lg"] as const;

const meta = {
  title: "Components/Actions/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    children: "Button",
    onClick: fn(),
  },
  argTypes: {
    size: { control: "select", options: sizes },
    variant: { control: "select", options: variants },
    color: { control: "select", options: colors },
    shape: { control: "select", options: ["rounded", "pilled"] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: args => (
    <div className="flex flex-wrap items-center gap-3">
      {variants.map(variant => (
        <Button {...args} key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: args => (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {colors.map(color => (
        <Button {...args} key={color} color={color}>
          {color}
        </Button>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: args => (
    <div className="flex flex-wrap items-center gap-3">
      {sizes.map(size => (
        <Button {...args} key={size} size={size}>
          {size.toUpperCase()}
        </Button>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Loading: Story = {
  args: {
    loading: true,
    loadingLabel: "Saving",
    children: "Save changes",
  },
};

export const KeyboardFocus: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.tab();
    await expect(canvas.getByRole("button", { name: "Button" })).toHaveFocus();
  },
};

export const MobileFullWidth: Story = {
  args: { className: "w-full" },
  globals: {
    viewport: { value: "mobile1", isRotated: false },
  },
  decorators: [
    Story => (
      <div className="w-full p-4">
        <Story />
      </div>
    ),
  ],
};
