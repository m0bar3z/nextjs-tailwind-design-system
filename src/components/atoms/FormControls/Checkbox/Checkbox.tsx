import type { ComponentSize, ValidationState } from "@/components/types";
import clsx from "clsx";
import { memo } from "react";
import "./Checkbox.css";

type Variant = "solid" | "soft";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  variant?: Variant;
  size?: ComponentSize;
  validationState?: ValidationState;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  solid: "ds-checkbox-solid",
  soft: "ds-checkbox-soft",
};

const SIZE_CLASSES: Record<ComponentSize, string> = {
  sm: "ds-checkbox-sm",
  md: "ds-checkbox-md",
  lg: "ds-checkbox-lg",
};

const VALIDATION_CLASSES: Record<ValidationState, string> = {
  default: "",
  valid: "ds-validation-valid",
  invalid: "ds-validation-invalid",
};

const Checkbox = (props: Props) => {
  const {
    variant = "solid",
    size = "md",
    validationState = "default",
    className,
    "aria-invalid": ariaInvalid,
    ...restProps
  } = props;

  return (
    <input
      type="checkbox"
      className={clsx(
        "ds-checkbox",
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        VALIDATION_CLASSES[validationState],
        className
      )}
      aria-invalid={ariaInvalid ?? (validationState === "invalid" || undefined)}
      {...restProps}
    />
  );
};

export default memo(Checkbox);
