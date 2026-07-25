"use client";

import Typography from "@/components/atoms/Typography/Typography";
import clsx from "clsx";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import "./Tooltip.css";

type Placement =
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end";

type Variant = "default" | "success" | "info" | "warning" | "error";

interface Props {
  children: ReactNode;
  content: ReactNode;
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  placement?: Placement;
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
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isClient, setIsClient] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledOpen !== undefined;
  const tooltipOpen = isControlled ? controlledOpen : isOpen;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!tooltipOpen || !triggerRef.current || !tooltipRef.current) return;

    const updatePosition = () => {
      if (!triggerRef.current || !tooltipRef.current) return;

      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;

      let top = 0;
      let left = 0;

      const gap = 8;

      switch (placement) {
        case "top":
          top = triggerRect.top + scrollY - tooltipRect.height - gap;
          left = triggerRect.left + scrollX + triggerRect.width / 2 - tooltipRect.width / 2;
          break;
        case "top-start":
          top = triggerRect.top + scrollY - tooltipRect.height - gap;
          left = triggerRect.left + scrollX;
          break;
        case "top-end":
          top = triggerRect.top + scrollY - tooltipRect.height - gap;
          left = triggerRect.left + scrollX + triggerRect.width - tooltipRect.width;
          break;
        case "bottom":
          top = triggerRect.bottom + scrollY + gap;
          left = triggerRect.left + scrollX + triggerRect.width / 2 - tooltipRect.width / 2;
          break;
        case "bottom-start":
          top = triggerRect.bottom + scrollY + gap;
          left = triggerRect.left + scrollX;
          break;
        case "bottom-end":
          top = triggerRect.bottom + scrollY + gap;
          left = triggerRect.left + scrollX + triggerRect.width - tooltipRect.width;
          break;
        case "left":
          top = triggerRect.top + scrollY + triggerRect.height / 2 - tooltipRect.height / 2;
          left = triggerRect.left + scrollX - tooltipRect.width - gap;
          break;
        case "left-start":
          top = triggerRect.top + scrollY;
          left = triggerRect.left + scrollX - tooltipRect.width - gap;
          break;
        case "left-end":
          top = triggerRect.top + scrollY + triggerRect.height - tooltipRect.height;
          left = triggerRect.left + scrollX - tooltipRect.width - gap;
          break;
        case "right":
          top = triggerRect.top + scrollY + triggerRect.height / 2 - tooltipRect.height / 2;
          left = triggerRect.right + scrollX + gap;
          break;
        case "right-start":
          top = triggerRect.top + scrollY;
          left = triggerRect.right + scrollX + gap;
          break;
        case "right-end":
          top = triggerRect.top + scrollY + triggerRect.height - tooltipRect.height;
          left = triggerRect.right + scrollX + gap;
          break;
      }

      const viewportPadding = 8;
      const minLeft = scrollX + viewportPadding;
      const maxLeft = scrollX + window.innerWidth - tooltipRect.width - viewportPadding;
      const minTop = scrollY + viewportPadding;
      const maxTop = scrollY + window.innerHeight - tooltipRect.height - viewportPadding;

      left = Math.min(Math.max(left, minLeft), Math.max(minLeft, maxLeft));
      top = Math.min(Math.max(top, minTop), Math.max(minTop, maxTop));

      setPosition({ top, left });
    };

    updatePosition();

    const handleResize = () => updatePosition();
    const handleScroll = () => updatePosition();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [tooltipOpen, placement]);

  const handleMouseEnter = () => {
    if (!isControlled) {
      setIsOpen(true);
    }
    onOpen?.();
  };

  const handleMouseLeave = () => {
    if (!isControlled) {
      setIsOpen(false);
    }
    onClose?.();
  };

  if (!isClient) {
    return <div ref={triggerRef}>{children}</div>;
  }

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="ds-tooltip-trigger"
      >
        {children}
      </div>
      {tooltipOpen &&
        createPortal(
          <div
            ref={tooltipRef}
            className={clsx("ds-tooltip", `ds-tooltip-${placement}`, VARIANT_CLASSES[variant], className)}
            style={{
              position: "absolute",
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
