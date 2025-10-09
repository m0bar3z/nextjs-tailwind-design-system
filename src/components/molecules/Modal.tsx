"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const ModalContainer = ({ children, ...restProps }: Props) => {
  return (
    <dialog open className="absolute top-0 flex h-dvh w-dvw items-center justify-center bg-black/[50%]">
      <div className="flex h-[24rem] w-[36rem] flex-wrap gap-4 rounded-2xl bg-green-100 p-4">{children}</div>
    </dialog>
  );
};

const Modal = (props: Props) => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient && props.isOpen ? createPortal(<ModalContainer {...props} />, document.body) : null;
};

export default Modal;
