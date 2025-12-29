"use client";

import Typography from "@/components/atoms/Typography/Typography";
import clsx from "clsx";
import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

interface ModalHeaderProps {
  title?: ReactNode;
  onClose?: () => void;
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

const ModalContainer = ({ children, onClose, ...restProps }: Props) => {
  return (
    <dialog
      open
      className="absolute top-0 flex h-dvh w-dvw items-center justify-center bg-black/[50%]"
      onClick={e => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="ds-modal flex h-[24rem] w-[36rem] flex-col overflow-hidden rounded-2xl">{children}</div>
    </dialog>
  );
};

const Modal = (props: Props) => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  return isClient && props.isOpen ? createPortal(<ModalContainer {...props} />, document.body) : null;
};

export default Modal;
