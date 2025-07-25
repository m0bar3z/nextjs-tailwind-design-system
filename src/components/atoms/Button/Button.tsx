import { FC, memo, ReactNode, useMemo } from "react";

import clsx from "clsx";
import "./Button.css";

type Size = "small" | "normal" | "large";
type Variant = "solid" | "outlined" | "ghost" | "soft";
type Shape = "rounded" | "pilled";
type Color = "primary" | "secondary" | "success" | "error" | "warning" | "dark";

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  size?: Size;
  variant?: Variant;
  shape?: Shape;
  color?: Color;
}



const Button: FC<Props> = ({ size = "small", variant = "solid", shape = "rounded", color = "primary", ...props }) => {
  const colors = useMemo<Record<Color, string>>(
    () => ({
      primary: "ds-btn-primary",
      secondary: "ds-btn-secondary",
      dark: "ds-btn-dark",
      error: "ds-btn-error",
      success: "ds-btn-success",
      warning: "ds-btn-warning",
    }),
    []
  );

  const variants: Record<Variant, string> = useMemo(
    () => ({
      solid: "ds-btn-solid",
      outlined: "ds-btn-outlined",
      ghost: "ds-btn-ghost",
      link: "ds-btn-link",
      soft: "ds-btn-soft",
      white: "ds-btn-white",
    }),
    []
  );

  const sizes: Record<Size, string> = useMemo(
    () => ({
      normal: "ds-btn-normal",
      small: "ds-btn-small",
      large: "ds-btn-large",
    }),
    []
  );

  const shapes: Record<Shape, string> = useMemo(
    () => ({
      pilled: "ds-btn-pilled",
      rounded: "ds-btn-rounded",
    }),
    []
  );

  return (
    <button
      className={clsx(
        "ds-btn",
        variants[variant],
        colors[color],
        sizes[size],
        shapes[shape],
        props.disabled && "ds-btn-disabled"
      )}
      {...props}
    />
  );
};

export default memo(Button);
