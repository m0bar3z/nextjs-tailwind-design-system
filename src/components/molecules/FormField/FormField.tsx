"use client";

import clsx from "clsx";
import { cloneElement, useId, type ReactElement, type ReactNode } from "react";
import "./FormField.css";

interface FormControlProps {
  id?: string;
  required?: boolean;
  "aria-describedby"?: string;
  "aria-errormessage"?: string;
  "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling";
}

interface Props {
  children: ReactElement<FormControlProps>;
  label: ReactNode;
  description?: ReactNode;
  errorMessage?: ReactNode;
  required?: boolean;
  className?: string;
}

const joinIds = (...ids: Array<string | undefined>) => {
  const uniqueIds = new Set(ids.flatMap(id => id?.split(" ") ?? []).filter(Boolean));
  return Array.from(uniqueIds).join(" ") || undefined;
};

const FormField = ({ children, label, description, errorMessage, required = false, className }: Props) => {
  const generatedId = useId();
  const controlId = children.props.id ?? `${generatedId}-control`;
  const descriptionId = description ? `${generatedId}-description` : undefined;
  const errorId = errorMessage ? `${generatedId}-error` : undefined;
  const describedBy = joinIds(children.props["aria-describedby"], descriptionId, errorId);
  const invalid = children.props["aria-invalid"] ?? (errorMessage ? true : undefined);

  const control = cloneElement(children, {
    id: controlId,
    required: children.props.required ?? required,
    "aria-describedby": describedBy,
    "aria-errormessage": children.props["aria-errormessage"] ?? errorId,
    "aria-invalid": invalid,
  });

  return (
    <div className={clsx("ds-form-field", className)} data-invalid={invalid || undefined}>
      <label className="ds-form-field-label" htmlFor={controlId}>
        {label}
        {required ? (
          <span className="ds-form-field-required" aria-hidden="true">
            *
          </span>
        ) : null}
      </label>

      {description ? (
        <span id={descriptionId} className="ds-form-field-description">
          {description}
        </span>
      ) : null}

      <div className="ds-form-field-control">{control}</div>

      {errorMessage ? (
        <span id={errorId} className="ds-form-field-error" aria-live="polite">
          {errorMessage}
        </span>
      ) : null}
    </div>
  );
};

export default FormField;
