"use client";

import Typography from "@/components/atoms/Typography/Typography";
import clsx from "clsx";
import {
  cloneElement,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import "./Tooltip.css";
import type { TooltipPlacement } from "./tooltip.types";
import { useTooltipPosition } from "./useTooltipPosition";

type Variant = "default" | "success" | "info" | "warning" | "error";
type TooltipTriggerProps = {
  "aria-describedby"?: string;
  tabIndex?: number;
};

interface Props {
  children: ReactElement<TooltipTriggerProps>;
  content: ReactNode;
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  placement?: TooltipPlacement;
  variant?: Variant;
  className?: string;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  default: "ds-tooltip-default",
  success: "ds-tooltip-success",
  info: "ds-tooltip-info",
  warning: "ds-tooltip-warning",
  error: "ds-tooltip-error",
};

const Tooltip = ({
  children,
  content,
  open: controlledOpen,
  onOpen,
  onClose,
  placement = "top",
  variant = "default",
  className,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const interactionRef = useRef({ focused: false, hovered: false });
  const requestedOpenRef = useRef(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const tooltipId = useId();

  const isControlled = controlledOpen !== undefined;
  const tooltipOpen = isControlled ? controlledOpen : isOpen;
  const position = useTooltipPosition({
    open: tooltipOpen,
    placement,
    tooltipRef,
    triggerRef,
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  useEffect(() => {
    requestedOpenRef.current = tooltipOpen;
  }, [tooltipOpen]);

  const requestOpenChange = useCallback(
    (nextOpen: boolean) => {
      if (requestedOpenRef.current === nextOpen) return;

      requestedOpenRef.current = nextOpen;
      if (!isControlled) setIsOpen(nextOpen);
      if (nextOpen) onOpen?.();
      else onClose?.();
    },
    [isControlled, onClose, onOpen]
  );

  const handleMouseEnter = () => {
    interactionRef.current.hovered = true;
    requestOpenChange(true);
  };

  const handleMouseLeave = () => {
    interactionRef.current.hovered = false;
    if (!interactionRef.current.focused) requestOpenChange(false);
  };

  const handleFocus = () => {
    interactionRef.current.focused = true;
    requestOpenChange(true);
  };

  const handleBlur = () => {
    interactionRef.current.focused = false;
    if (!interactionRef.current.hovered) requestOpenChange(false);
  };

  const describedBy = [children.props["aria-describedby"], tooltipOpen ? tooltipId : undefined]
    .filter(Boolean)
    .join(" ");
  const trigger = cloneElement(children, {
    "aria-describedby": describedBy || undefined,
    tabIndex: children.props.tabIndex ?? 0,
  });

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocusCapture={handleFocus}
        onBlurCapture={handleBlur}
        onKeyDown={event => {
          if (event.key !== "Escape" || !tooltipOpen) return;
          event.preventDefault();
          requestOpenChange(false);
        }}
        className="ds-tooltip-trigger"
      >
        {trigger}
      </div>
      {isClient &&
        tooltipOpen &&
        createPortal(
          <div
            id={tooltipId}
            ref={tooltipRef}
            className={clsx("ds-tooltip", `ds-tooltip-${placement}`, VARIANT_CLASSES[variant], className)}
            role="tooltip"
            style={{
              position: "fixed",
              top: `${position.top}px`,
              left: `${position.left}px`,
            }}
          >
            <Typography variant="sm" className="ds-tooltip-content">
              {content}
            </Typography>
          </div>,
          document.body
        )}
    </>
  );
};

export default Tooltip;
