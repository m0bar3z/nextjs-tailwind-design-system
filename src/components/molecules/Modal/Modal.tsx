"use client";

import Typography from "@/components/atoms/Typography/Typography";
import clsx from "clsx";
import { startTransition, useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

interface ModalHeaderProps {
  title?: ReactNode;
  onClose?: () => void;
  className?: string;
}

interface ModalBodyProps {
  children: ReactNode;
  className?: string;
}

interface ModalFooterProps {
  children: ReactNode;
  className?: string;
}

const CloseIcon = () => {
  return (
    <svg
      className="ds-modal-close-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
};

export const ModalHeader = ({ title, onClose, className }: ModalHeaderProps) => {
  return (
    <div className={clsx("ds-modal-header", className)}>
      {title && (
        <Typography variant="xl" weight="semibold" className="ds-modal-header-title" Tag="h2">
          {title}
        </Typography>
      )}
      {onClose && (
        <button type="button" onClick={onClose} className="ds-modal-close-button" aria-label="Close modal">
          <CloseIcon />
        </button>
      )}
    </div>
  );
};

export const ModalBody = ({ children, className }: ModalBodyProps) => {
  return <div className={clsx("ds-modal-body", className)}>{children}</div>;
};

export const ModalFooter = ({ children, className }: ModalFooterProps) => {
  return <div className={clsx("ds-modal-footer", className)}>{children}</div>;
};

const ModalContainer = ({ children, onClose, size = "md" }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isAnimating] = useState(true);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  useEffect(() => {
    if (modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key !== "Tab") return;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      };

      firstElement?.focus();
      document.addEventListener("keydown", handleTabKey);

      return () => {
        document.removeEventListener("keydown", handleTabKey);
      };
    }
  }, []);

  const sizeClasses = {
    sm: "ds-modal-sm",
    md: "ds-modal-md",
    lg: "ds-modal-lg",
    xl: "ds-modal-xl",
    full: "ds-modal-full",
  };

  return (
    <div
      className={clsx("ds-modal-backdrop", isAnimating && "ds-modal-backdrop-enter")}
      onClick={e => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className={clsx("ds-modal", sizeClasses[size], isAnimating && "ds-modal-enter")}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>
  );
};

const Modal = (props: Props) => {
  const [shouldRender, setShouldRender] = useState<boolean>(props.isOpen);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const prevIsOpenRef = useRef<boolean>(props.isOpen);

  useEffect(() => {
    if (props.isOpen && !prevIsOpenRef.current) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      startTransition(() => {
        setShouldRender(true);
      });
    }

    if (!props.isOpen && prevIsOpenRef.current) {
      timeoutRef.current = setTimeout(() => {
        startTransition(() => {
          setShouldRender(false);
        });
      }, 300);
    }

    prevIsOpenRef.current = props.isOpen;

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [props.isOpen]);

  if (!shouldRender) return null;

  return createPortal(<ModalContainer {...props} />, document.body);
};

export default Modal;
