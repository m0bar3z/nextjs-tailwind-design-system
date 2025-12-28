"use client";

import Button from "@/components/atoms/Button/Button";
import Checkbox from "@/components/atoms/FormControls/Checkbox/Checkbox";
import Input from "@/components/atoms/FormControls/Input/Input";
import Radio from "@/components/atoms/FormControls/Radio/Radio";
import Select from "@/components/atoms/FormControls/Select/Select";
import Switch from "@/components/atoms/FormControls/Switch/Switch";
import Modal, { ModalHeader } from "@/components/molecules/Modal";
import ArrowUpToLine from "@/icons/ArrowUpToLine";
import { useState } from "react";

const selectOptions = [
  { label: "Education", value: "edu" },
  { label: "Science", value: "sci" },
  { label: "Art", value: "art" },
];

export default function HomePage() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

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
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader title="Modal Title" onClose={() => setIsOpen(false)} />
        <div>modal content</div>
        <div>modal modal footer</div>
      </Modal>
    </div>
  );
}
