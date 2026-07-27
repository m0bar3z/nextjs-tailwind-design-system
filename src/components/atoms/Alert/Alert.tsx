import Button from "@/components/atoms/Button/Button";
import Typography from "@/components/atoms/Typography/Typography";
import clsx from "clsx";
import { X } from "lucide-react";
import { FC, memo } from "react";
import "./Alert.css";

type Variant = "success" | "info" | "warning" | "error";

interface Props {
  title: string;
  subtitle?: string;
  variant?: Variant;
  onClose?: () => void;
  className?: string;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  success: "ds-alert-success",
  info: "ds-alert-info",
  warning: "ds-alert-warning",
  error: "ds-alert-error",
};

const Alert: FC<Props> = ({ title, subtitle, variant = "info", onClose, className }) => {
  return (
    <div className={clsx("ds-alert", VARIANT_CLASSES[variant], className)} role="alert">
      <div className="ds-alert-content">
        <div className="ds-alert-text">
          <Typography variant="base" weight="semibold" className="ds-alert-title">
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="sm" className="ds-alert-subtitle">
              {subtitle}
            </Typography>
          )}
        </div>
        {onClose && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="ds-alert-close-button"
            aria-label="Close alert"
          >
            <X className="ds-alert-close-icon" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default memo(Alert);
