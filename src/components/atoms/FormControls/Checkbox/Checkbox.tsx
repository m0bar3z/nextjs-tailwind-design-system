import clsx from "clsx";
import "./Checkbox.css";

type Variant = "solid" | "soft";
type Status = "idle" | "error" | "success";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  variant?: Variant;
  status?: Status;
}

const Checkbox = (props: Props) => {
  const { variant = "solid", status = "idle", ...restProps } = props;

  // const variants = useMemo<Record<Variant, string>>(() => ({
  //   soft: "soft"
  // }), [variant]);

  return <input type="checkbox" className={clsx(variant, status)} {...restProps} />;
};

export default Checkbox;
