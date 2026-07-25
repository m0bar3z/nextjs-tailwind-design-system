import clsx from "clsx";
import { FC, ForwardedRef } from "react";

import "./Input.css";

type Variant = "bordered" | "underline" | "light";
type Size = "small" | "default" | "large";
type Status = "idle" | "error" | "success";
type Shape = "rounded" | "pilled";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: Variant;
  size?: Size;
  status?: Status;
  shape?: Shape;
  disabled?: boolean;
  ref?: ForwardedRef<HTMLInputElement>;
}

const SIZE_CLASSES: Record<Size, string> = {
  small: "ds-input-sm",
  default: "ds-input-md",
  large: "ds-input-lg",
};

const VARIANT_CLASSES: Record<Variant, string> = {
  bordered: "ds-input-bordered",
  light: "ds-input-light",
  underline: "ds-input-underline",
};

const STATUS_CLASSES: Record<Status, string> = {
  idle: "ds-input-idle",
  success: "ds-input-success",
  error: "ds-input-error",
};

const SHAPE_CLASSES: Record<Shape, string> = {
  pilled: "ds-input-pilled",
  rounded: "ds-input-rounded",
};

const Input: FC<Props> = ({
  variant = "bordered",
  status = "idle",
  shape = "rounded",
  size = "small",
  disabled,
  ref,
  className,
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
        STATUS_CLASSES[status],
        SHAPE_CLASSES[shape],
        className
      )}
      {...restProps}
    />
  );
};

export default Input;
