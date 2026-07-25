import clsx from "clsx";
import "./Radio.css";

type Variant = "solid" | "soft";
type Status = "idle" | "error" | "success";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  variant?: Variant;
  status?: Status;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  soft: "ds-radio-soft",
  solid: "ds-radio-solid",
};

const STATUS_CLASSES: Record<Status, string> = {
  idle: "",
  error: "ds-radio-error",
  success: "ds-radio-success",
};

const Radio = (props: Props) => {
  const { variant = "solid", status = "idle", className, ...restProps } = props;

  return (
    <input
      type="radio"
      className={clsx("ds-radio", VARIANT_CLASSES[variant], STATUS_CLASSES[status], className)}
      {...restProps}
    />
  );
};

export default Radio;
