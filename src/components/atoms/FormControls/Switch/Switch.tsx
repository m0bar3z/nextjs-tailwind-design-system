import clsx from "clsx";
import { useMemo } from "react";
import "./Switch.css";

type Variant = "solid" | "soft";
type Color = "primary" | "error" | "success";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  variant?: Variant;
  color?: Color;
}

const Switch = (props: Props) => {
  const { variant = "solid", color = "primary", className, ...restProps } = props;

  const variants: Record<Variant, string> = useMemo(
    () => ({
      solid: "ds-switch-solid",
      soft: "ds-switch-soft",
    }),
    []
  );

  const colors: Record<Color, string> = useMemo(
    () => ({
      primary: "ds-switch-primary",
      success: "ds-switch-success",
      error: "ds-switch-error",
    }),
    []
  );

  return (
    <label className="relative flex">
      <input
        type="checkbox"
        className={clsx("ds-switch", variants[variant], colors[color], className)}
        {...restProps}
      />
    </label>
  );
};

export default Switch;
