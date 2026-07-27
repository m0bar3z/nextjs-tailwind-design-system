import type { ComponentSize, ValidationState } from "@/components/types";
import clsx from "clsx";
import { memo } from "react";
import "./Radio.css";

type Variant = "solid" | "soft";
interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  variant?: Variant;
  size?: ComponentSize;
  validationState?: ValidationState;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  soft: "ds-radio-soft",
  solid: "ds-radio-solid",
};

const SIZE_CLASSES: Record<ComponentSize, string> = {
  sm: "ds-radio-sm",
  md: "ds-radio-md",
  lg: "ds-radio-lg",
};

const VALIDATION_CLASSES: Record<ValidationState, string> = {
  default: "",
  valid: "ds-validation-valid",
  invalid: "ds-validation-invalid",
};

const Radio = (props: Props) => {
  const { variant = "solid", size = "md", validationState = "default", className, ...restProps } = props;

  return (
    <input
      type="radio"
      className={clsx(
        "ds-radio",
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        VALIDATION_CLASSES[validationState],
        className
      )}
      {...restProps}
    />
  );
};

export default memo(Radio);
