import clsx from "clsx";
import { FC, ForwardedRef, useMemo } from "react";

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

const Input: FC<Props> = ({
  variant = "bordered",
  status = "idle",
  shape = "rounded",
  size = "small",
  disabled,
  ref,
  ...restProps
}) => {
  const sizes = useMemo<Record<Size, string>>(
    () => ({
      small: "ds-input-sm",
      default: "ds-input-md",
      large: "ds-input-lg",
    }),
    []
  );

  const variants = useMemo<Record<Variant, string>>(
    () => ({
      bordered: "ds-input-bordered",
      light: "ds-input-light",
      underline: "ds-input-underline",
    }),
    []
  );

  const states = useMemo<Record<Status, string>>(
    () => ({
      idle: "ds-input-idle",
      success: "ds-input-success",
      error: "ds-input-error",
    }),
    []
  );

  const shapes: Record<Shape, string> = useMemo(
    () => ({
      pilled: "ds-input-pilled",
      rounded: "ds-input-rounded",
    }),
    []
  );

  return (
    <input
      ref={ref}
      disabled={disabled}
      className={clsx("ds-input", sizes[size], variants[variant], states[status], shapes[shape])}
      {...restProps}
    />
  );
};

export default Input;
