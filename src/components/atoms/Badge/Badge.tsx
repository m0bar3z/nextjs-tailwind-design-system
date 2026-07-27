import type { ComponentSize } from "@/components/types";
import clsx from "clsx";
import { FC, memo, ReactNode } from "react";
import "./Badge.css";

type Variant = "solid" | "outlined" | "soft";
type Color = "primary" | "secondary" | "success" | "error" | "warning" | "dark";

interface Props {
  text: string;
  icon?: ReactNode;
  variant?: Variant;
  color?: Color;
  size?: ComponentSize;
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

const SIZE_CLASSES: Record<ComponentSize, string> = {
  sm: "ds-badge-sm",
  md: "ds-badge-md",
  lg: "ds-badge-lg",
};

const Badge: FC<Props> = ({ text, icon, variant = "solid", color = "primary", size = "md", onClick, className }) => {
  const badgeClassName = clsx(
    "ds-badge",
    VARIANT_CLASSES[variant],
    COLOR_CLASSES[color],
    SIZE_CLASSES[size],
    onClick && "ds-badge-clickable",
    className
  );
  const content = (
    <>
      {icon && <span className="ds-badge-icon">{icon}</span>}
      <span className="ds-badge-text">{text}</span>
    </>
  );

  return onClick ? (
    <button type="button" className={badgeClassName} onClick={onClick}>
      {content}
    </button>
  ) : (
    <span className={badgeClassName}>{content}</span>
  );
};

export default memo(Badge);
