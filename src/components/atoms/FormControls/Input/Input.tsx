import type { ComponentSize, ValidationState } from "@/components/types";
import clsx from "clsx";
import { FC, ForwardedRef, memo } from "react";

import "./Input.css";

type Variant = "bordered" | "underline" | "light";
type Shape = "rounded" | "pilled";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: Variant;
  size?: ComponentSize;
  validationState?: ValidationState;
  shape?: Shape;
  disabled?: boolean;
  ref?: ForwardedRef<HTMLInputElement>;
}

const SIZE_CLASSES: Record<ComponentSize, string> = {
  sm: "ds-input-sm",
  md: "ds-input-md",
  lg: "ds-input-lg",
};

const VARIANT_CLASSES: Record<Variant, string> = {
  bordered: "ds-input-bordered",
  light: "ds-input-light",
  underline: "ds-input-underline",
};

const VALIDATION_CLASSES: Record<ValidationState, string> = {
  default: "",
  valid: "ds-validation-valid",
  invalid: "ds-validation-invalid",
};

const SHAPE_CLASSES: Record<Shape, string> = {
  pilled: "ds-input-pilled",
  rounded: "ds-input-rounded",
};

const Input: FC<Props> = ({
  variant = "bordered",
  validationState = "default",
  shape = "rounded",
  size = "md",
  disabled,
  ref,
  className,
  "aria-invalid": ariaInvalid,
  ...restProps
}) => {
  return (
    <input
      ref={ref}
      disabled={disabled}
      className={clsx(
        "ds-input",
        SIZE_CLASSES[size],
        VARIANT_CLASSES[variant],
        VALIDATION_CLASSES[validationState],
        SHAPE_CLASSES[shape],
        className
      )}
      aria-invalid={ariaInvalid ?? (validationState === "invalid" || undefined)}
      {...restProps}
    />
  );
};

export default memo(Input);
