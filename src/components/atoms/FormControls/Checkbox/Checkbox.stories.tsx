import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";
import Checkbox from "./Checkbox";

const variants = ["solid", "soft"] as const;
const sizes = ["sm", "md", "lg"] as const;
const validationStates = ["default", "invalid", "valid"] as const;

const meta = {
  title: "Components/Forms/Checkbox",
  component: Checkbox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    "aria-label": "Example checkbox",
  },
  argTypes: {
    size: { control: "select", options: sizes },
    variant: { control: "select", options: variants },
    validationState: { control: "select", options: validationStates },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true },
};

export const Variants: Story = {
  render: args => (
    <div className="flex items-center gap-6">
      {variants.map(variant => (
        <label className="text-ds-sm flex items-center gap-2" key={variant}>
          <Checkbox {...args} aria-label={undefined} variant={variant} defaultChecked />
          {variant}
        </label>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: args => (
    <div className="flex items-center gap-6">
      {sizes.map(size => (
        <label className="text-ds-sm flex items-center gap-2" key={size}>
          <Checkbox {...args} aria-label={undefined} size={size} defaultChecked />
          {size.toUpperCase()}
        </label>
      ))}
    </div>
  ),
};

export const ValidationStates: Story = {
  render: args => (
    <div className="flex items-center gap-6">
      {validationStates.map(validationState => (
        <label className="text-ds-sm flex items-center gap-2" key={validationState}>
          <Checkbox {...args} aria-label={undefined} validationState={validationState} defaultChecked />
          {validationState}
        </label>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  render: args => (
    <div className="flex items-center gap-6">
      <label className="text-ds-sm flex items-center gap-2">
        <Checkbox {...args} aria-label={undefined} disabled />
        Disabled
      </label>
      <label className="text-ds-sm flex items-center gap-2">
        <Checkbox {...args} aria-label={undefined} disabled defaultChecked />
        Disabled checked
      </label>
    </div>
  ),
};

export const KeyboardFocus: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.tab();
    await expect(canvas.getByRole("checkbox", { name: "Example checkbox" })).toHaveFocus();
  },
};
