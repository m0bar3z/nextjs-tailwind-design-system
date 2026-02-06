"use client";

import Alert from "@/components/atoms/Alert/Alert";
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
import Tooltip from "@/components/molecules/Tooltip/Tooltip";
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
  const [alerts, setAlerts] = useState<Record<string, boolean>>({
    success: true,
    info: true,
    warning: true,
    error: true,
  });

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
              title="Typography"
              description="Text variants, weights, and semantic tags for consistent type scale."
            >
              <div className="w-full space-y-4">
                <div className="space-y-2">
                  <Typography variant="sm" weight="medium" className="text-ds-gray-700">
                    Variants
                  </Typography>
                  <div className="space-y-1">
                    <Typography variant="xs">XS / text-xs</Typography>
                    <Typography variant="sm">SM / text-sm</Typography>
                    <Typography variant="base">Base / text-base</Typography>
                    <Typography variant="lg">LG / text-lg</Typography>
                    <Typography variant="xl">XL / text-xl</Typography>
                    <Typography variant="2xl">2XL / text-2xl</Typography>
                    <Typography variant="3xl">3XL / text-3xl</Typography>
                    <Typography variant="4xl">4XL / text-4xl</Typography>
                  </div>
                </div>
                <div className="space-y-2">
                  <Typography variant="sm" weight="medium" className="text-ds-gray-700">
                    Weights
                  </Typography>
                  <div className="space-y-1">
                    <Typography weight="regular">Regular</Typography>
                    <Typography weight="medium">Medium</Typography>
                    <Typography weight="semibold">Semibold</Typography>
                    <Typography weight="bold">Bold</Typography>
                  </div>
                </div>
                <div className="space-y-2">
                  <Typography variant="sm" weight="medium" className="text-ds-gray-700">
                    Tags
                  </Typography>
                  <div className="space-y-1">
                    <Typography Tag="p">Paragraph text</Typography>
                    <Typography Tag="h3" variant="lg" weight="semibold">
                      Heading with h3 tag
                    </Typography>
                  </div>
                </div>
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

            <ShowcaseCard title="Alerts" description="Alert components with variants and dismissible close button.">
              <div className="w-full space-y-3">
                {alerts.success && (
                  <Alert
                    title="Success alert"
                    subtitle="This is a success alert with a close button."
                    variant="success"
                    onClose={() => setAlerts(prev => ({ ...prev, success: false }))}
                  />
                )}
                {alerts.info && (
                  <Alert
                    title="Info alert"
                    subtitle="This is an info alert with a close button."
                    variant="info"
                    onClose={() => setAlerts(prev => ({ ...prev, info: false }))}
                  />
                )}
                {alerts.warning && (
                  <Alert
                    title="Warning alert"
                    subtitle="This is a warning alert with a close button."
                    variant="warning"
                    onClose={() => setAlerts(prev => ({ ...prev, warning: false }))}
                  />
                )}
                {alerts.error && (
                  <Alert
                    title="Error alert"
                    subtitle="This is an error alert with a close button."
                    variant="error"
                    onClose={() => setAlerts(prev => ({ ...prev, error: false }))}
                  />
                )}
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
              title="Tooltips"
              description="Tooltip component with variants and multiple placement options."
              className="lg:col-span-2"
            >
              <div className="w-full space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Typography variant="sm" weight="medium" className="text-ds-gray-700 w-full">
                    Variants:
                  </Typography>
                  <Tooltip content="Default tooltip" variant="default">
                    <Button size="small">Default</Button>
                  </Tooltip>
                  <Tooltip content="Success tooltip" variant="success">
                    <Button size="small" color="success">Success</Button>
                  </Tooltip>
                  <Tooltip content="Info tooltip" variant="info">
                    <Button size="small" color="primary">Info</Button>
                  </Tooltip>
                  <Tooltip content="Warning tooltip" variant="warning">
                    <Button size="small" color="warning">Warning</Button>
                  </Tooltip>
                  <Tooltip content="Error tooltip" variant="error">
                    <Button size="small" color="error">Error</Button>
                  </Tooltip>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Typography variant="sm" weight="medium" className="text-ds-gray-700 w-full">
                    Placements:
                  </Typography>
                  <Tooltip content="Top placement" placement="top">
                    <Button size="small">Top</Button>
                  </Tooltip>
                  <Tooltip content="Bottom placement" placement="bottom">
                    <Button size="small">Bottom</Button>
                  </Tooltip>
                  <Tooltip content="Left placement" placement="left">
                    <Button size="small">Left</Button>
                  </Tooltip>
                  <Tooltip content="Right placement" placement="right">
                    <Button size="small">Right</Button>
                  </Tooltip>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Typography variant="sm" weight="medium" className="text-ds-gray-700 w-full">
                    Hover over buttons to see tooltips:
                  </Typography>
                  <Tooltip content="Hover to see this tooltip" variant="info" placement="top">
                    <Badge text="Hover me" icon={<ArrowUpToLine />} color="primary" />
                  </Tooltip>
                </div>
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
