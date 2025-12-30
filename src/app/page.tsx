"use client";

import Button from "@/components/atoms/Button/Button";
import Checkbox from "@/components/atoms/FormControls/Checkbox/Checkbox";
import Input from "@/components/atoms/FormControls/Input/Input";
import Radio from "@/components/atoms/FormControls/Radio/Radio";
import Select from "@/components/atoms/FormControls/Select/Select";
import Switch from "@/components/atoms/FormControls/Switch/Switch";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "@/components/molecules/Modal";
import ArrowUpToLine from "@/icons/ArrowUpToLine";
import { useState } from "react";

const selectOptions = [
  { label: "Education", value: "edu" },
  { label: "Science", value: "sci" },
  { label: "Art", value: "art" },
];

export default function HomePage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="container m-auto flex h-full flex-col flex-wrap items-center gap-6 p-6">
      <div className="flex flex-wrap items-center justify-center-safe gap-2">
        <Input variant="underline" />
        <Input variant="light" />
        <Input variant="bordered" />
      </div>
      <div className="flex w-full items-center justify-center gap-2">
        <Checkbox />
        <Checkbox variant="soft" />
        <Radio />
        <Radio variant="soft" />
      </div>
      <div className="flex w-full items-center justify-center gap-2">
        <Switch variant="soft" />
      </div>
      <div className="flex w-full items-center justify-center gap-2">
        <Select options={selectOptions} />
      </div>
      <div className="flex w-full items-center justify-center gap-2">
        <Button leadingIcon={<ArrowUpToLine />} trailingIcon={<ArrowUpToLine />}>
          Click!
        </Button>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="md">
        <ModalHeader title="Modal Title" onClose={() => setIsOpen(false)} />
        <ModalBody>
          <p className="text-ds-gray-600">
            This is a redesigned modal component inspired by Preline UI. It features smooth animations, backdrop blur,
            and improved accessibility.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button variant="outlined" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>Confirm</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
