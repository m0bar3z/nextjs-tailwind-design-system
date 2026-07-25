import Button from "@/components/atoms/Button/Button";
import Checkbox from "@/components/atoms/FormControls/Checkbox/Checkbox";
import Input from "@/components/atoms/FormControls/Input/Input";
import Radio from "@/components/atoms/FormControls/Radio/Radio";
import Select from "@/components/atoms/FormControls/Select/Select";
import Switch from "@/components/atoms/FormControls/Switch/Switch";
import Typography from "@/components/atoms/Typography/Typography";
import ShowcaseCard from "@/components/molecules/ShowcaseCard/ShowcaseCard";
import ArrowUpToLine from "@/icons/ArrowUpToLine";

const SELECT_OPTIONS = [
  { label: "Education", value: "edu" },
  { label: "Science", value: "sci" },
  { label: "Art", value: "art" },
];

const CoreShowcase = () => (
  <>
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

    <ShowcaseCard title="Form Controls" description="Checkboxes, radio buttons, and switches for form interactions.">
      <div className="w-full space-y-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Checkbox aria-label="Default checkbox" />
            <Typography variant="sm">Default</Typography>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox variant="soft" aria-label="Soft checkbox" />
            <Typography variant="sm">Soft</Typography>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Radio name="showcase-radio" aria-label="First radio option" />
            <Typography variant="sm">Radio 1</Typography>
          </div>
          <div className="flex items-center gap-2">
            <Radio name="showcase-radio" variant="soft" aria-label="Second radio option" />
            <Typography variant="sm">Radio 2</Typography>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Switch variant="soft" aria-label="Toggle showcase setting" />
          <Typography variant="sm">Toggle switch</Typography>
        </div>
      </div>
    </ShowcaseCard>

    <ShowcaseCard title="Select Dropdown" description="Dropdown selection component with custom styling.">
      <div className="w-full">
        <Select options={SELECT_OPTIONS} aria-label="Showcase category" />
      </div>
    </ShowcaseCard>
  </>
);

export default CoreShowcase;
