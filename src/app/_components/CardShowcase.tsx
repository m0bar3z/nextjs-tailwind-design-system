import Button from "@/components/atoms/Button/Button";
import Typography from "@/components/atoms/Typography/Typography";
import Card from "@/components/molecules/Card/Card";
import ShowcaseCard from "@/components/molecules/ShowcaseCard/ShowcaseCard";

const CardShowcase = () => (
  <ShowcaseCard
    title="Card Component"
    description="Flexible card component with header, body, and footer sections."
    className="lg:col-span-2"
  >
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
      <Card title="Card with Footer" subtitle="Subtitle text" footer={<Button size="sm">Action</Button>}>
        <Typography variant="sm" color="muted">
          This card includes title, subtitle, content, and footer sections.
        </Typography>
      </Card>
      <Card title="Simple Card">
        <Typography variant="sm" color="muted">
          A simple card with a title and content for displaying information.
        </Typography>
      </Card>
    </div>
  </ShowcaseCard>
);

export default CardShowcase;
