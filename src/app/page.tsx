"use client";

import Button from "@/components/atoms/Button/Button";
import Card from "@/components/atoms/Card/Card";
import Checkbox from "@/components/atoms/FormControls/Checkbox/Checkbox";
import Input from "@/components/atoms/FormControls/Input/Input";
import Radio from "@/components/atoms/FormControls/Radio/Radio";
import Select from "@/components/atoms/FormControls/Select/Select";
import Switch from "@/components/atoms/FormControls/Switch/Switch";
import Typography from "@/components/atoms/Typography/Typography";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "@/components/molecules/Modal";
import ArrowUpToLine from "@/icons/ArrowUpToLine";
import { useState, type ReactNode } from "react";

const selectOptions = [
  { label: "Education", value: "edu" },
  { label: "Science", value: "sci" },
  { label: "Art", value: "art" },
];

const ComponentCard = ({
  title,
  description,
  children,
  className,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`group border-ds-gray-200 shadow-ds-sm hover:shadow-ds-md rounded-xl border bg-white p-6 transition-all ${className || ""}`}
    >
      <div className="mb-4">
        <Typography variant="lg" weight="semibold" className="text-ds-gray-900">
          {title}
        </Typography>
        {description && (
          <Typography variant="sm" className="text-ds-gray-500 mt-1">
            {description}
          </Typography>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
};

export default function HomePage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="from-ds-slate-50 to-ds-blue-50 min-h-screen bg-gradient-to-br via-white">
      <div className="border-ds-gray-200 border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12">
          <div className="mx-auto max-w-3xl text-center">
            <Typography
              variant="4xl"
              weight="bold"
              className="from-ds-blue-600 to-ds-teal-600 mb-4 bg-gradient-to-r bg-clip-text text-transparent"
            >
              Design System Showcase
            </Typography>
            <Typography variant="lg" className="text-ds-gray-600">
              Explore our comprehensive collection of UI components built with React, TypeScript, and Tailwind CSS. Each
              component is designed with accessibility and usability in mind.
            </Typography>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <Typography variant="2xl" weight="bold" className="text-ds-gray-900 mb-2">
              Components
            </Typography>
            <Typography variant="base" className="text-ds-gray-600">
              Interactive examples of all available components in the design system.
            </Typography>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ComponentCard
              title="Buttons"
              description="Various button styles, sizes, and variants to fit any use case."
            >
              <Button size="small">Small</Button>
              <Button size="normal">Normal</Button>
              <Button size="large">Large</Button>
              <Button variant="outlined">Outlined</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="soft">Soft</Button>
              <Button color="success">Success</Button>
              <Button color="error">Error</Button>
              <Button leadingIcon={<ArrowUpToLine />}>With Icon</Button>
            </ComponentCard>

            <ComponentCard title="Input Fields" description="Text input components with multiple styles and states.">
              <div className="w-full space-y-3">
                <Input variant="bordered" placeholder="Bordered input" />
                <Input variant="light" placeholder="Light input" />
                <Input variant="underline" placeholder="Underline input" />
              </div>
            </ComponentCard>

            <ComponentCard
              title="Form Controls"
              description="Checkboxes, radio buttons, and switches for form interactions."
            >
              <div className="w-full space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Checkbox />
                    <Typography variant="sm">Default</Typography>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox variant="soft" />
                    <Typography variant="sm">Soft</Typography>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Radio />
                    <Typography variant="sm">Radio 1</Typography>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio variant="soft" />
                    <Typography variant="sm">Radio 2</Typography>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Switch variant="soft" />
                  <Typography variant="sm">Toggle switch</Typography>
                </div>
              </div>
            </ComponentCard>

            <ComponentCard title="Select Dropdown" description="Dropdown selection component with custom styling.">
              <div className="w-full">
                <Select options={selectOptions} />
              </div>
            </ComponentCard>

            <ComponentCard
              title="Card Component"
              description="Flexible card component with header, body, and footer sections."
              className="lg:col-span-2"
            >
              <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
                <Card title="Card with Footer" subtitle="Subtitle text" footer={<Button size="small">Action</Button>}>
                  <Typography variant="sm" className="text-ds-gray-600">
                    This is a card component with title, subtitle, content, and footer sections.
                  </Typography>
                </Card>
                <Card title="Simple Card">
                  <Typography variant="sm" className="text-ds-gray-600">
                    A simple card with just a title and content. Perfect for displaying information.
                  </Typography>
                </Card>
              </div>
            </ComponentCard>

            <ComponentCard
              title="Modal Dialog"
              description="Accessible modal component with smooth animations and backdrop blur."
              className="lg:col-span-2"
            >
              <Button onClick={() => setIsOpen(true)} size="normal">
                Open Modal Example
              </Button>
              <Typography variant="sm" className="text-ds-gray-500">
                Click the button above to see the modal in action
              </Typography>
            </ComponentCard>
          </div>

          <div className="border-ds-gray-200 from-ds-blue-50 to-ds-teal-50 mt-12 rounded-xl border bg-gradient-to-r p-8 text-center">
            <Typography variant="xl" weight="semibold" className="text-ds-gray-900 mb-2">
              Built with Modern Web Technologies
            </Typography>
            <Typography variant="base" className="text-ds-gray-600">
              React • TypeScript • Tailwind CSS • Next.js
            </Typography>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="md">
        <ModalHeader title="Welcome to the Design System" onClose={() => setIsOpen(false)} />
        <ModalBody>
          <Typography variant="base" className="text-ds-gray-600 mb-4">
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
          <Button variant="outlined" onClick={() => setIsOpen(false)}>
            Close
          </Button>
          <Button onClick={() => setIsOpen(false)}>Get Started</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
