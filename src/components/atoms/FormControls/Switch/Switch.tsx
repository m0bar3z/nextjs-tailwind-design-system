import clsx from "clsx";
import "./Switch.css";

type Variant = "solid" | "soft";
type Color = "primary" | "error" | "success";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  variant?: Variant;
  color?: Color;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  solid: "ds-switch-solid",
  soft: "ds-switch-soft",
};

const COLOR_CLASSES: Record<Color, string> = {
  primary: "ds-switch-primary",
  success: "ds-switch-success",
  error: "ds-switch-error",
};

const Switch = (props: Props) => {
  const { variant = "solid", color = "primary", className, ...restProps } = props;

  return (
    <label className="relative flex">
      <input
        type="checkbox"
        className={clsx("ds-switch", VARIANT_CLASSES[variant], COLOR_CLASSES[color], className)}
        {...restProps}
      />
    </label>
  );
};

export default Switch;
