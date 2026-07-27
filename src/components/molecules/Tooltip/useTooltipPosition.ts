import { useLayoutEffect, useState, type RefObject } from "react";
import type { TooltipPlacement } from "./tooltip.types";

interface Options {
  open: boolean;
  placement: TooltipPlacement;
  tooltipRef: RefObject<HTMLDivElement | null>;
  triggerRef: RefObject<HTMLDivElement | null>;
}

const GAP = 8;
const VIEWPORT_PADDING = 8;

const calculatePosition = (trigger: DOMRect, tooltip: DOMRect, placement: TooltipPlacement) => {
  const positions: Record<TooltipPlacement, { top: number; left: number }> = {
    top: {
      top: trigger.top - tooltip.height - GAP,
      left: trigger.left + (trigger.width - tooltip.width) / 2,
    },
    "top-start": { top: trigger.top - tooltip.height - GAP, left: trigger.left },
    "top-end": {
      top: trigger.top - tooltip.height - GAP,
      left: trigger.right - tooltip.width,
    },
    bottom: {
      top: trigger.bottom + GAP,
      left: trigger.left + (trigger.width - tooltip.width) / 2,
    },
    "bottom-start": { top: trigger.bottom + GAP, left: trigger.left },
    "bottom-end": { top: trigger.bottom + GAP, left: trigger.right - tooltip.width },
    left: {
      top: trigger.top + (trigger.height - tooltip.height) / 2,
      left: trigger.left - tooltip.width - GAP,
    },
    "left-start": { top: trigger.top, left: trigger.left - tooltip.width - GAP },
    "left-end": {
      top: trigger.bottom - tooltip.height,
      left: trigger.left - tooltip.width - GAP,
    },
    right: {
      top: trigger.top + (trigger.height - tooltip.height) / 2,
      left: trigger.right + GAP,
    },
    "right-start": { top: trigger.top, left: trigger.right + GAP },
    "right-end": { top: trigger.bottom - tooltip.height, left: trigger.right + GAP },
  };

  const position = positions[placement];

  return {
    top: Math.min(
      Math.max(position.top, VIEWPORT_PADDING),
      Math.max(VIEWPORT_PADDING, window.innerHeight - tooltip.height - VIEWPORT_PADDING)
    ),
    left: Math.min(
      Math.max(position.left, VIEWPORT_PADDING),
      Math.max(VIEWPORT_PADDING, window.innerWidth - tooltip.width - VIEWPORT_PADDING)
    ),
  };
};

export const useTooltipPosition = ({ open, placement, tooltipRef, triggerRef }: Options) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useLayoutEffect(() => {
    if (!open) return;

    let animationFrame = 0;

    const updatePosition = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        const trigger = triggerRef.current;
        const tooltip = tooltipRef.current;
        if (!trigger || !tooltip) return;

        setPosition(calculatePosition(trigger.getBoundingClientRect(), tooltip.getBoundingClientRect(), placement));
      });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [open, placement, tooltipRef, triggerRef]);

  return position;
};
