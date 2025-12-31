import Typography from "@/components/atoms/Typography/Typography";
import clsx from "clsx";
import { FC, memo, ReactNode } from "react";
import "./Card.css";

interface Props {
  title?: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  className?: string;
}

const Card: FC<Props> = ({ title, subtitle, children, footer, className }) => {
  return (
    <div className={clsx("ds-card", className)}>
      {(title || subtitle) && (
        <div className="ds-card-header">
          {title && (
            <Typography variant="lg" weight="semibold" className="ds-card-title">
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="sm" className="ds-card-subtitle">
              {subtitle}
            </Typography>
          )}
        </div>
      )}
      {children && <div className="ds-card-body">{children}</div>}
      {footer && <div className="ds-card-footer">{footer}</div>}
    </div>
  );
};

export default memo(Card);
