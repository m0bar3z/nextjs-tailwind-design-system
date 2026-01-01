"use client";

import Badge from "@/components/atoms/Badge/Badge";
import Button from "@/components/atoms/Button/Button";
import Checkbox from "@/components/atoms/FormControls/Checkbox/Checkbox";
import Input from "@/components/atoms/FormControls/Input/Input";
import Radio from "@/components/atoms/FormControls/Radio/Radio";
import Select from "@/components/atoms/FormControls/Select/Select";
import Switch from "@/components/atoms/FormControls/Switch/Switch";
import Typography from "@/components/atoms/Typography/Typography";
import Card from "@/components/molecules/Card/Card";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "@/components/molecules/Modal/Modal";
import ShowcaseCard from "@/components/molecules/ShowcaseCard/ShowcaseCard";
import ArrowUpToLine from "@/icons/ArrowUpToLine";

import { useState } from "react";

const selectOptions = [
  { label: "Education", value: "edu" },
  { label: "Science", value: "sci" },
  { label: "Art", value: "art" },
];

export default function HomePage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [badgeClickCount, setBadgeClickCount] = useState<number>(0);

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
            <ShowcaseCard title="Buttons" description="Various button styles, sizes, and variants to fit any use case.">
              <Button size="small">Small</Button>
              <Button size="normal">Normal</Button>
              <Button size="large">Large</Button>
              <Button variant="outlined">Outlined</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="soft">Soft</Button>
              <Button color="success">Success</Button>
              <Button color="error">Error</Button>
              <Button leadingIcon={<ArrowUpToLine />}>With Icon</Button>
            </ShowcaseCard>

            <ShowcaseCard title="Input Fields" description="Text input components with multiple styles and states.">
              <div className="w-full space-y-3">
                <Input variant="bordered" placeholder="Bordered input" />
                <Input variant="light" placeholder="Light input" />
                <Input variant="underline" placeholder="Underline input" />
              </div>
            </ShowcaseCard>

            <ShowcaseCard
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
            </ShowcaseCard>

            <ShowcaseCard title="Select Dropdown" description="Dropdown selection component with custom styling.">
              <div className="w-full">
                <Select options={selectOptions} />
              </div>
            </ShowcaseCard>

            <ShowcaseCard
              title="Badges"
              description="Badge components with variants, colors, sizes, icons, and click handlers."
            >
              <div className="w-full space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Typography variant="sm" weight="medium" className="text-ds-gray-700 w-full">
                    Variants:
                  </Typography>
                  <Badge text="Solid" variant="solid" color="primary" />
                  <Badge text="Outlined" variant="outlined" color="primary" />
                  <Badge text="Soft" variant="soft" color="primary" />
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Typography variant="sm" weight="medium" className="text-ds-gray-700 w-full">
                    Colors:
                  </Typography>
                  <Badge text="Primary" color="primary" />
                  <Badge text="Success" color="success" />
                  <Badge text="Error" color="error" />
                  <Badge text="Warning" color="warning" />
                  <Badge text="Secondary" color="secondary" />
                  <Badge text="Dark" color="dark" />
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Typography variant="sm" weight="medium" className="text-ds-gray-700 w-full">
                    Sizes:
                  </Typography>
                  <Badge text="Small" size="small" />
                  <Badge text="Normal" size="normal" />
                  <Badge text="Large" size="large" />
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Typography variant="sm" weight="medium" className="text-ds-gray-700 w-full">
                    With Icons:
                  </Typography>
                  <Badge text="With Icon" icon={<ArrowUpToLine />} color="primary" />
                  <Badge text="Success" icon={<ArrowUpToLine />} color="success" variant="soft" />
                  <Badge text="Error" icon={<ArrowUpToLine />} color="error" variant="outlined" />
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Typography variant="sm" weight="medium" className="text-ds-gray-700 w-full">
                    Clickable:
                  </Typography>
                  <Badge
                    text={`Clicked: ${badgeClickCount}`}
                    icon={<ArrowUpToLine />}
                    color="primary"
                    onClick={() => setBadgeClickCount(prev => prev + 1)}
                  />
                  <Badge text="Click me!" color="success" variant="soft" onClick={() => alert("Badge clicked!")} />
                </div>
              </div>
            </ShowcaseCard>

            <ShowcaseCard
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
            </ShowcaseCard>

            <ShowcaseCard
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
            </ShowcaseCard>
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
