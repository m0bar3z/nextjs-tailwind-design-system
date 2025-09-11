import clsx from "clsx";
import { ChevronsUpDown } from "lucide-react";
import { SelectHTMLAttributes } from "react";
import "./Select.css";

type Option = { value: string | number; label: string };

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  multiSelect?: boolean;
  options?: Option[];
}

const Select = ({ multiSelect, options, className, ...rest }: Props) => {
  return (
    <div className="relative">
      <span
        className={clsx(
          "py3.5 absolute right-0 flex h-full items-center px-4",
          rest.disabled ? "text-ds-gray-300" : "text-ds-gray-500"
        )}
      >
        <ChevronsUpDown width={16} height={16} />
      </span>

      <select className={clsx("ds-select", className)} {...rest}>
        <option value="" className="hidden">
          Select Input
        </option>
        {options?.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
