import clsx from "clsx";
import "./Checkbox.css";

type Variant = "solid" | "soft";
type Status = "idle" | "error" | "success";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  variant?: Variant;
  status?: Status;
}

const Checkbox = (props: Props) => {
  const { variant = "solid", status = "idle", className, ...restProps } = props;

  return <input type="checkbox" className={clsx("ds-checkbox", variant, status, className)} {...restProps} />;
};

export default Checkbox;
