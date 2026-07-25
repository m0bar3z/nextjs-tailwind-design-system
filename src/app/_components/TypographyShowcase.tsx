import Typography from "@/components/atoms/Typography/Typography";
import ShowcaseCard from "@/components/molecules/ShowcaseCard/ShowcaseCard";

const SectionLabel = ({ children }: { children: string }) => (
  <Typography variant="sm" weight="medium" color="muted">
    {children}
  </Typography>
);

const TypographyShowcase = () => (
  <ShowcaseCard title="Typography" description="Text variants, weights, colors, and semantic tags.">
    <div className="w-full space-y-4">
      <div className="space-y-2">
        <SectionLabel>Variants</SectionLabel>
        <div className="space-y-1">
          <Typography variant="xs">XS / text-ds-xs</Typography>
          <Typography variant="sm">SM / text-ds-sm</Typography>
          <Typography variant="base">Base / text-ds-base</Typography>
          <Typography variant="lg">LG / text-ds-lg</Typography>
          <Typography variant="xl">XL / text-ds-xl</Typography>
          <Typography variant="2xl">2XL / text-ds-2xl</Typography>
          <Typography variant="3xl">3XL / text-ds-3xl</Typography>
          <Typography variant="4xl">4XL / text-ds-4xl</Typography>
        </div>
      </div>

      <div className="space-y-2">
        <SectionLabel>Weights</SectionLabel>
        <div className="space-y-1">
          <Typography weight="regular">Regular</Typography>
          <Typography weight="medium">Medium</Typography>
          <Typography weight="semibold">Semibold</Typography>
          <Typography weight="bold">Bold</Typography>
        </div>
      </div>

      <div className="space-y-2">
        <SectionLabel>Colors</SectionLabel>
        <div className="space-y-1">
          <Typography color="default">Default text</Typography>
          <Typography color="muted">Muted text</Typography>
          <Typography color="primary">Primary text</Typography>
          <Typography color="success">Success text</Typography>
          <Typography color="error">Error text</Typography>
        </div>
      </div>

      <div className="space-y-2">
        <SectionLabel>Responsive</SectionLabel>
        <Typography variant={{ base: "sm", md: "lg", xl: "2xl" }} weight="semibold" color="primary">
          SM on mobile, LG on tablet, 2XL on wide screens
        </Typography>
      </div>

      <div className="space-y-2">
        <SectionLabel>Tags</SectionLabel>
        <div className="space-y-1">
          <Typography as="p">Paragraph text</Typography>
          <Typography as="h3" variant="lg" weight="semibold">
            Heading with h3 tag
          </Typography>
        </div>
      </div>
    </div>
  </ShowcaseCard>
);

export default TypographyShowcase;
