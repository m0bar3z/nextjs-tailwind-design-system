import clsx from "clsx";
import { useMemo } from "react";
import "./Radio.css";

type Variant = "solid" | "soft";
type Status = "idle" | "error" | "success";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  variant?: Variant;
  status?: Status;
}

const Radio = (props: Props) => {
  const { variant = "solid", status = "idle", className, ...restProps } = props;

  const variants = useMemo<Record<Variant, string>>(
    () => ({
      soft: "ds-radio-soft",
      solid: "ds-radio-solid",
    }),
    []
  );

  const states = useMemo<Record<Status, string>>(
    () => ({
      idle: "",
      error: "ds-radio-error",
      success: "ds-radio-success",
    }),
    []
  );

  return (
    <input type="radio" className={clsx("ds-radio", variants[variant], states[status], className)} {...restProps} />
  );
};

export default Radio;
