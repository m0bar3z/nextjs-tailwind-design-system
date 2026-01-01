import { FC, memo, ReactNode, useMemo } from "react";
import clsx from "clsx";
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

const Badge: FC<Props> = ({
  text,
  icon,
  variant = "solid",
  color = "primary",
  size = "normal",
  onClick,
  className,
}) => {
  const colors = useMemo<Record<Color, string>>(
    () => ({
      primary: "ds-badge-primary",
      secondary: "ds-badge-secondary",
      dark: "ds-badge-dark",
      error: "ds-badge-error",
      success: "ds-badge-success",
      warning: "ds-badge-warning",
    }),
    []
  );

  const variants: Record<Variant, string> = useMemo(
    () => ({
      solid: "ds-badge-solid",
      outlined: "ds-badge-outlined",
      soft: "ds-badge-soft",
    }),
    []
  );

  const sizes: Record<Size, string> = useMemo(
    () => ({
      small: "ds-badge-small",
      normal: "ds-badge-normal",
      large: "ds-badge-large",
    }),
    []
  );

  const Component = onClick ? "button" : "span";

  return (
    <Component
      className={clsx(
        "ds-badge",
        variants[variant],
        colors[color],
        sizes[size],
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

