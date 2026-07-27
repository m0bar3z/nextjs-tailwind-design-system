import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";
import Select from "./Select";

const options = [
  { value: "design", label: "Design" },
  { value: "engineering", label: "Engineering" },
  { value: "product", label: "Product" },
];
const sizes = ["sm", "md", "lg"] as const;
const validationStates = ["default", "invalid", "valid"] as const;

const meta = {
  title: "Components/Forms/Select",
  component: Select,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    "aria-label": "Example select",
    options,
  },
  argTypes: {
    size: { control: "select", options: sizes },
    validationState: { control: "select", options: validationStates },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: args => (
    <div className="grid w-80 gap-3">
      {sizes.map(size => (
        <Select {...args} key={size} size={size} placeholder={size.toUpperCase()} />
      ))}
    </div>
  ),
};

export const ValidationStates: Story = {
  render: args => (
    <div className="grid w-80 gap-3">
      {validationStates.map(validationState => (
        <Select {...args} key={validationState} validationState={validationState} placeholder={validationState} />
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Required: Story = {
  args: { required: true },
};

export const Multiple: Story = {
  args: {
    multiple: true,
    defaultValue: ["design", "product"],
  },
};

export const KeyboardFocus: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.tab();
    await expect(canvas.getByRole("combobox", { name: "Example select" })).toHaveFocus();
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
