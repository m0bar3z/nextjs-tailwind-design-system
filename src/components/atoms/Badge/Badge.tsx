import clsx from "clsx";
import { FC, memo, ReactNode } from "react";
import "./Badge.css";

type Size = "small" | "normal" | "large";
type Variant = "solid" | "outlined" | "soft";
type Color = "primary" | "secondary" | "success" | "error" | "warning" | "dark";

interface Props {
  text: string;
  icon?: ReactNode;
  variant?: Variant;
  color?: Color;
  size?: Size;
  onClick?: () => void;
  className?: string;
}

const COLOR_CLASSES: Record<Color, string> = {
  primary: "ds-badge-primary",
  secondary: "ds-badge-secondary",
  dark: "ds-badge-dark",
  error: "ds-badge-error",
  success: "ds-badge-success",
  warning: "ds-badge-warning",
};

const VARIANT_CLASSES: Record<Variant, string> = {
  solid: "ds-badge-solid",
  outlined: "ds-badge-outlined",
  soft: "ds-badge-soft",
};

const SIZE_CLASSES: Record<Size, string> = {
  small: "ds-badge-small",
  normal: "ds-badge-normal",
  large: "ds-badge-large",
};

const Badge: FC<Props> = ({
  text,
  icon,
  variant = "solid",
  color = "primary",
  size = "normal",
  onClick,
  className,
}) => {
  const Component = onClick ? "button" : "span";

  return (
    <Component
      className={clsx(
        "ds-badge",
        VARIANT_CLASSES[variant],
        COLOR_CLASSES[color],
        SIZE_CLASSES[size],
        onClick && "ds-badge-clickable",
        className
      )}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {icon && <span className="ds-badge-icon">{icon}</span>}
      <span className="ds-badge-text">{text}</span>
    </Component>
  );
};

export default memo(Badge);
