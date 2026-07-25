import { ComponentPropsWithoutRef, FC, memo, ReactNode } from "react";

import clsx from "clsx";
import "./Button.css";

type Size = "small" | "normal" | "large";
type Variant = "solid" | "outlined" | "ghost" | "soft";
type Shape = "rounded" | "pilled";
type Color = "primary" | "secondary" | "success" | "error" | "warning" | "dark";

interface Props extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  size?: Size;
  variant?: Variant;
  shape?: Shape;
  color?: Color;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

const COLOR_CLASSES: Record<Color, string> = {
  primary: "ds-btn-primary",
  secondary: "ds-btn-secondary",
  dark: "ds-btn-dark",
  error: "ds-btn-error",
  success: "ds-btn-success",
  warning: "ds-btn-warning",
};

const VARIANT_CLASSES: Record<Variant, string> = {
  solid: "ds-btn-solid",
  outlined: "ds-btn-outlined",
  ghost: "ds-btn-ghost",
  soft: "ds-btn-soft",
};

const SIZE_CLASSES: Record<Size, string> = {
  normal: "ds-btn-normal",
  small: "ds-btn-small",
  large: "ds-btn-large",
};

const SHAPE_CLASSES: Record<Shape, string> = {
  pilled: "ds-btn-pilled",
  rounded: "ds-btn-rounded",
};

const Button: FC<Props> = ({
  size = "small",
  variant = "solid",
  shape = "rounded",
  color = "primary",
  leadingIcon,
  trailingIcon,
  children,
  className,
  disabled,
  type = "button",
  ...restProps
}) => {
  return (
    <button
      className={clsx(
        "ds-btn",
        VARIANT_CLASSES[variant],
        COLOR_CLASSES[color],
        SIZE_CLASSES[size],
        SHAPE_CLASSES[shape],
        disabled && "ds-btn-disabled",
        className
      )}
      disabled={disabled}
      type={type}
      {...restProps}
    >
      {leadingIcon ? <span>{leadingIcon}</span> : null}

      {children}

      {trailingIcon ? <span>{trailingIcon}</span> : null}
    </button>
  );
};

export default memo(Button);
