import type { ComponentSize, ValidationState } from "@/components/types";
import clsx from "clsx";
import { ChevronsUpDown } from "lucide-react";
import { memo, SelectHTMLAttributes } from "react";
import "./Select.css";

type Option = { value: string | number; label: string };

interface Props extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  options?: readonly Option[];
  placeholder?: string;
  size?: ComponentSize;
  validationState?: ValidationState;
}

const SIZE_CLASSES: Record<ComponentSize, string> = {
  sm: "ds-select-sm",
  md: "ds-select-md",
  lg: "ds-select-lg",
};

const VALIDATION_CLASSES: Record<ValidationState, string> = {
  default: "",
  valid: "ds-validation-valid",
  invalid: "ds-validation-invalid",
};

const Select = ({
  options = [],
  placeholder = "Select an option",
  size = "md",
  validationState = "default",
  className,
  disabled,
  multiple,
  required,
  "aria-invalid": ariaInvalid,
  ...restProps
}: Props) => {
  return (
    <div className="relative w-full">
      {!multiple && (
        <span
          className={clsx(
            "pointer-events-none absolute right-0 flex h-full items-center px-3",
            disabled ? "text-ds-gray-300" : "text-ds-gray-500"
          )}
          aria-hidden="true"
        >
          <ChevronsUpDown width={16} height={16} />
        </span>
      )}

      <select
        className={clsx(
          "ds-select",
          SIZE_CLASSES[size],
          VALIDATION_CLASSES[validationState],
          multiple && "ds-select-multiple",
          className
        )}
        disabled={disabled}
        multiple={multiple}
        required={required}
        aria-invalid={ariaInvalid ?? (validationState === "invalid" || undefined)}
        {...restProps}
      >
        <option value="" className="hidden">
          {placeholder}
        </option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default memo(Select);
