"use client";

import Badge from "@/components/atoms/Badge/Badge";
import Button from "@/components/atoms/Button/Button";
import Typography from "@/components/atoms/Typography/Typography";
import ShowcaseCard from "@/components/molecules/ShowcaseCard/ShowcaseCard";
import Tooltip from "@/components/molecules/Tooltip/Tooltip";
import ArrowUpToLine from "@/icons/ArrowUpToLine";
import dynamic from "next/dynamic";
import { useCallback, useState } from "react";

const ShowcaseModal = dynamic(() => import("./ShowcaseModal"), { ssr: false });

const SectionLabel = ({ children }: { children: string }) => (
  <Typography variant="sm" weight="medium" color="muted" className="w-full">
    {children}
  </Typography>
);

const OverlayShowcase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <>
      <ShowcaseCard title="Tooltips" description="Tooltip variants and placement options." className="lg:col-span-2">
        <div className="w-full space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <SectionLabel>Variants:</SectionLabel>
            <Tooltip content="Default tooltip" variant="default">
              <Button size="sm">Default</Button>
            </Tooltip>
            <Tooltip content="Success tooltip" variant="success">
              <Button size="sm" color="success">
                Success
              </Button>
            </Tooltip>
            <Tooltip content="Info tooltip" variant="info">
              <Button size="sm">Info</Button>
            </Tooltip>
            <Tooltip content="Warning tooltip" variant="warning">
              <Button size="sm" color="warning">
                Warning
              </Button>
            </Tooltip>
            <Tooltip content="Error tooltip" variant="error">
              <Button size="sm" color="error">
                Error
              </Button>
            </Tooltip>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <SectionLabel>Placements:</SectionLabel>
            <Tooltip content="Top placement" placement="top">
              <Button size="sm">Top</Button>
            </Tooltip>
            <Tooltip content="Bottom placement" placement="bottom">
              <Button size="sm">Bottom</Button>
            </Tooltip>
            <Tooltip content="Left placement" placement="left">
              <Button size="sm">Left</Button>
            </Tooltip>
            <Tooltip content="Right placement" placement="right">
              <Button size="sm">Right</Button>
            </Tooltip>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <SectionLabel>Hover example:</SectionLabel>
            <Tooltip content="Hover to see this tooltip" variant="info" placement="top">
              <Badge text="Hover me" icon={<ArrowUpToLine />} color="primary" />
            </Tooltip>
          </div>
        </div>
      </ShowcaseCard>

      <ShowcaseCard
        title="Modal Dialog"
        description="Accessible modal with smooth animations and backdrop blur."
        className="lg:col-span-2"
      >
        <Button onClick={openModal} size="md">
          Open Modal Example
        </Button>
        <Typography variant="sm" color="subtle">
          The modal code is loaded only when you open it.
        </Typography>
      </ShowcaseCard>

      {isModalOpen && <ShowcaseModal onClose={closeModal} />}
    </>
  );
};

export default OverlayShowcase;
