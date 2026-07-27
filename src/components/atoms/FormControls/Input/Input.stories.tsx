import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";
import Input from "./Input";

const variants = ["bordered", "light", "underline"] as const;
const sizes = ["sm", "md", "lg"] as const;
const validationStates = ["default", "invalid", "valid"] as const;

const meta = {
  title: "Components/Forms/Input",
  component: Input,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    "aria-label": "Example input",
    placeholder: "Enter a value",
  },
  argTypes: {
    size: { control: "select", options: sizes },
    variant: { control: "select", options: variants },
    validationState: { control: "select", options: validationStates },
    shape: { control: "select", options: ["rounded", "pilled"] },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: args => (
    <div className="grid w-80 gap-3">
      {variants.map(variant => (
        <Input {...args} key={variant} variant={variant} placeholder={variant} />
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: args => (
    <div className="grid w-80 gap-3">
      {sizes.map(size => (
        <Input {...args} key={size} size={size} placeholder={size.toUpperCase()} />
      ))}
    </div>
  ),
};

export const ValidationStates: Story = {
  render: args => (
    <div className="grid w-80 gap-3">
      {validationStates.map(validationState => (
        <Input {...args} key={validationState} validationState={validationState} placeholder={validationState} />
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true, value: "Disabled value" },
};

export const ReadOnly: Story = {
  args: { readOnly: true, value: "Read-only value" },
};

export const Required: Story = {
  args: { required: true },
};

export const KeyboardFocus: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.tab();
    await expect(canvas.getByRole("textbox", { name: "Example input" })).toHaveFocus();
  },
};

export const MobileFullWidth: Story = {
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
