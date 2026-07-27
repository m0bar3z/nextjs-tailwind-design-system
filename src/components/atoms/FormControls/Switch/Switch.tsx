import type { ComponentSize, ValidationState } from "@/components/types";
import clsx from "clsx";
import { memo } from "react";
import "./Switch.css";

type Variant = "solid" | "soft";
type Color = "primary" | "error" | "success";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  variant?: Variant;
  color?: Color;
  size?: ComponentSize;
  validationState?: ValidationState;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  solid: "ds-switch-solid",
  soft: "ds-switch-soft",
};

const COLOR_CLASSES: Record<Color, string> = {
  primary: "ds-switch-primary",
  success: "ds-switch-success",
  error: "ds-switch-error",
};

const SIZE_CLASSES: Record<ComponentSize, string> = {
  sm: "ds-switch-sm",
  md: "ds-switch-md",
  lg: "ds-switch-lg",
};

const VALIDATION_CLASSES: Record<ValidationState, string> = {
  default: "",
  valid: "ds-validation-valid",
  invalid: "ds-validation-invalid",
};

const Switch = (props: Props) => {
  const {
    variant = "solid",
    color = "primary",
    size = "md",
    validationState = "default",
    className,
    "aria-invalid": ariaInvalid,
    ...restProps
  } = props;

  return (
    <input
      {...restProps}
      type="checkbox"
      role="switch"
      className={clsx(
        "ds-switch",
        VARIANT_CLASSES[variant],
        COLOR_CLASSES[color],
        SIZE_CLASSES[size],
        VALIDATION_CLASSES[validationState],
        className
      )}
      aria-invalid={ariaInvalid ?? (validationState === "invalid" || undefined)}
    />
  );
};

export default memo(Switch);
