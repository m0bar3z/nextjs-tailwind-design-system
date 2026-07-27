import type { ComponentSize } from "@/components/types";
import { ComponentPropsWithoutRef, FC, memo, ReactNode } from "react";

import clsx from "clsx";
import "./Button.css";

type Variant = "solid" | "outlined" | "ghost" | "soft";
type Shape = "rounded" | "pilled";
type Color = "primary" | "secondary" | "success" | "error" | "warning" | "dark";

interface Props extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  size?: ComponentSize;
  variant?: Variant;
  shape?: Shape;
  color?: Color;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  loading?: boolean;
  loadingLabel?: string;
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

const SIZE_CLASSES: Record<ComponentSize, string> = {
  sm: "ds-btn-sm",
  md: "ds-btn-md",
  lg: "ds-btn-lg",
};

const SHAPE_CLASSES: Record<Shape, string> = {
  pilled: "ds-btn-pilled",
  rounded: "ds-btn-rounded",
};

const Button: FC<Props> = ({
  size = "md",
  variant = "solid",
  shape = "rounded",
  color = "primary",
  leadingIcon,
  trailingIcon,
  loading = false,
  loadingLabel = "Loading",
  children,
  className,
  disabled,
  type = "button",
  "aria-label": ariaLabel,
  ...restProps
}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      className={clsx(
        "ds-btn",
        VARIANT_CLASSES[variant],
        COLOR_CLASSES[color],
        SIZE_CLASSES[size],
        SHAPE_CLASSES[shape],
        isDisabled && "ds-btn-disabled",
        loading && "ds-btn-loading",
        className
      )}
      disabled={isDisabled}
      type={type}
      aria-busy={loading || undefined}
      aria-label={loading ? loadingLabel : ariaLabel}
      {...restProps}
    >
      <span className="ds-btn-content" aria-hidden={loading || undefined}>
        {leadingIcon ? <span className="ds-btn-icon">{leadingIcon}</span> : null}
        {children}
        {trailingIcon ? <span className="ds-btn-icon">{trailingIcon}</span> : null}
      </span>
      {loading ? <span className="ds-btn-spinner" aria-hidden="true" /> : null}
    </button>
  );
};

export default memo(Button);
