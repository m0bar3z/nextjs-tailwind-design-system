import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";
import Switch from "./Switch";

const variants = ["solid", "soft"] as const;
const colors = ["primary", "success", "error"] as const;
const sizes = ["sm", "md", "lg"] as const;
const validationStates = ["default", "invalid", "valid"] as const;

const meta = {
  title: "Components/Forms/Switch",
  component: Switch,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    "aria-label": "Example switch",
  },
  argTypes: {
    size: { control: "select", options: sizes },
    variant: { control: "select", options: variants },
    color: { control: "select", options: colors },
    validationState: { control: "select", options: validationStates },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Off: Story = {};

export const On: Story = {
  args: { defaultChecked: true },
};

export const Variants: Story = {
  render: args => (
    <div className="flex items-center gap-6">
      {variants.map(variant => (
        <label className="text-ds-sm flex items-center gap-2" key={variant}>
          <Switch {...args} aria-label={undefined} variant={variant} defaultChecked />
          {variant}
        </label>
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: args => (
    <div className="flex items-center gap-6">
      {colors.map(color => (
        <label className="text-ds-sm flex items-center gap-2" key={color}>
          <Switch {...args} aria-label={undefined} color={color} defaultChecked />
          {color}
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
          <Switch {...args} aria-label={undefined} size={size} defaultChecked />
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
          <Switch {...args} aria-label={undefined} validationState={validationState} defaultChecked />
          {validationState}
        </label>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true, defaultChecked: true },
};

export const KeyboardFocus: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.tab();
    await expect(canvas.getByRole("switch", { name: "Example switch" })).toHaveFocus();
  },
};
