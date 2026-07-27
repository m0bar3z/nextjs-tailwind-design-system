"use client";

import Typography from "@/components/atoms/Typography/Typography";
import clsx from "clsx";
import { createContext, useContext, useId, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";
import { useModalAccessibility } from "./useModalAccessibility";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
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

interface ModalAccessibilityContextValue {
  bodyId: string;
  titleId: string;
}

const ModalAccessibilityContext = createContext<ModalAccessibilityContextValue | null>(null);

const CloseIcon = () => {
  return (
    <svg
      aria-hidden="true"
      className="ds-modal-close-icon"
      focusable="false"
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
  const accessibility = useContext(ModalAccessibilityContext);

  return (
    <div className={clsx("ds-modal-header", className)}>
      {title && (
        <Typography
          id={accessibility?.titleId}
          variant="xl"
          weight="semibold"
          className="ds-modal-header-title"
          as="h2"
        >
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
  const accessibility = useContext(ModalAccessibilityContext);

  return (
    <div id={accessibility?.bodyId} className={clsx("ds-modal-body", className)}>
      {children}
    </div>
  );
};

export const ModalFooter = ({ children, className }: ModalFooterProps) => {
  return <div className={clsx("ds-modal-footer", className)}>{children}</div>;
};

const SIZE_CLASSES = {
  sm: "ds-modal-sm",
  md: "ds-modal-md",
  lg: "ds-modal-lg",
  xl: "ds-modal-xl",
  full: "ds-modal-full",
} as const;

const ModalContainer = ({
  children,
  onClose,
  size = "md",
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
}: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const generatedId = useId();
  const accessibility = {
    bodyId: `${generatedId}-description`,
    titleId: `${generatedId}-title`,
  };

  useModalAccessibility({ modalRef, onClose });

  return (
    <div
      className="ds-modal-backdrop ds-modal-backdrop-enter"
      onClick={e => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <ModalAccessibilityContext value={accessibility}>
        <div
          ref={modalRef}
          className={clsx("ds-modal", SIZE_CLASSES[size], "ds-modal-enter")}
          role="dialog"
          aria-modal="true"
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy ?? (ariaLabel ? undefined : accessibility.titleId)}
          aria-describedby={ariaDescribedBy ?? accessibility.bodyId}
          tabIndex={-1}
        >
          {children}
        </div>
      </ModalAccessibilityContext>
    </div>
  );
};

const Modal = (props: Props) => {
  if (!props.isOpen || typeof document === "undefined") return null;

  return createPortal(<ModalContainer {...props} />, document.body);
};

export default Modal;
