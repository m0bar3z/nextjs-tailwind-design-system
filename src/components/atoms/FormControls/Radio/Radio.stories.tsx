import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";
import Radio from "./Radio";

const variants = ["solid", "soft"] as const;
const sizes = ["sm", "md", "lg"] as const;
const validationStates = ["default", "invalid", "valid"] as const;

const meta = {
  title: "Components/Forms/Radio",
  component: Radio,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    "aria-label": "Example radio",
    name: "example",
  },
  argTypes: {
    size: { control: "select", options: sizes },
    variant: { control: "select", options: variants },
    validationState: { control: "select", options: validationStates },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioGroup: Story = {
  render: args => (
    <fieldset className="grid gap-3">
      <legend className="font-ds-medium text-ds-gray-900 mb-2">Choose an option</legend>
      {["First", "Second", "Third"].map((label, index) => (
        <label className="text-ds-sm flex items-center gap-2" key={label}>
          <Radio {...args} aria-label={undefined} value={label.toLowerCase()} defaultChecked={index === 0} />
          {label}
        </label>
      ))}
    </fieldset>
  ),
};

export const Variants: Story = {
  render: args => (
    <div className="flex items-center gap-6">
      {variants.map(variant => (
        <label className="text-ds-sm flex items-center gap-2" key={variant}>
          <Radio {...args} aria-label={undefined} name={`variant-${variant}`} variant={variant} defaultChecked />
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
          <Radio {...args} aria-label={undefined} name={`size-${size}`} size={size} defaultChecked />
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
          <Radio
            {...args}
            aria-label={undefined}
            name={`validation-${validationState}`}
            validationState={validationState}
            defaultChecked
          />
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
    await expect(canvas.getByRole("radio", { name: "Example radio" })).toHaveFocus();
  },
};
