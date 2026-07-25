"use client";

import Badge from "@/components/atoms/Badge/Badge";
import Typography from "@/components/atoms/Typography/Typography";
import ShowcaseCard from "@/components/molecules/ShowcaseCard/ShowcaseCard";
import ArrowUpToLine from "@/icons/ArrowUpToLine";
import { useCallback, useState } from "react";

const showBadgeFeedback = () => window.alert("Badge clicked!");

const SectionLabel = ({ children }: { children: string }) => (
  <Typography variant="sm" weight="medium" color="muted" className="w-full">
    {children}
  </Typography>
);

const BadgeShowcase = () => {
  const [clickCount, setClickCount] = useState(0);
  const incrementClickCount = useCallback(() => setClickCount(current => current + 1), []);

  return (
    <ShowcaseCard title="Badges" description="Badge variants, colors, sizes, icons, and interactions.">
      <div className="w-full space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <SectionLabel>Variants:</SectionLabel>
          <Badge text="Solid" variant="solid" color="primary" />
          <Badge text="Outlined" variant="outlined" color="primary" />
          <Badge text="Soft" variant="soft" color="primary" />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <SectionLabel>Colors:</SectionLabel>
          <Badge text="Primary" color="primary" />
          <Badge text="Success" color="success" />
          <Badge text="Error" color="error" />
          <Badge text="Warning" color="warning" />
          <Badge text="Secondary" color="secondary" />
          <Badge text="Dark" color="dark" />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <SectionLabel>Sizes:</SectionLabel>
          <Badge text="Small" size="small" />
          <Badge text="Normal" size="normal" />
          <Badge text="Large" size="large" />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <SectionLabel>With Icons:</SectionLabel>
          <Badge text="With Icon" icon={<ArrowUpToLine />} color="primary" />
          <Badge text="Success" icon={<ArrowUpToLine />} color="success" variant="soft" />
          <Badge text="Error" icon={<ArrowUpToLine />} color="error" variant="outlined" />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <SectionLabel>Clickable:</SectionLabel>
          <Badge
            text={`Clicked: ${clickCount}`}
            icon={<ArrowUpToLine />}
            color="primary"
            onClick={incrementClickCount}
          />
          <Badge text="Click me!" color="success" variant="soft" onClick={showBadgeFeedback} />
        </div>
      </div>
    </ShowcaseCard>
  );
};

export default BadgeShowcase;
