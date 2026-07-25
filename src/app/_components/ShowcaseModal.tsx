"use client";

import Button from "@/components/atoms/Button/Button";
import Typography from "@/components/atoms/Typography/Typography";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "@/components/molecules/Modal/Modal";
import { memo } from "react";

interface Props {
  onClose: () => void;
}

const ShowcaseModal = ({ onClose }: Props) => (
  <Modal isOpen onClose={onClose} size="md">
    <ModalHeader title="Welcome to the Design System" onClose={onClose} />
    <ModalBody>
      <Typography variant="base" color="muted" className="mb-4">
        This modal component is part of our comprehensive design system. It features:
      </Typography>
      <ul className="text-ds-gray-600 list-disc space-y-2 pl-6">
        <li>Smooth fade-in and slide-up animations</li>
        <li>Backdrop blur for better focus</li>
        <li>Full keyboard accessibility (ESC to close, Tab navigation)</li>
        <li>Focus trap to keep focus within the modal</li>
        <li>Responsive design that works on all screen sizes</li>
      </ul>
    </ModalBody>
    <ModalFooter>
      <Button variant="outlined" onClick={onClose}>
        Close
      </Button>
      <Button onClick={onClose}>Get Started</Button>
    </ModalFooter>
  </Modal>
);

export default memo(ShowcaseModal);
