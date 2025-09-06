import Checkbox from "@/components/atoms/FormControls/Checkbox/Checkbox";
import Input from "@/components/atoms/FormControls/Input/Input";
import Switch from "@/components/atoms/FormControls/Switch/Switch";

export default function HomePage() {
  return (
    <div className="container m-auto flex h-dvh flex-col items-center gap-6 p-6">
      <div className="flex items-center gap-2">
        <Input variant="underline" />
        <Input variant="light" />
        <Input variant="bordered" />
      </div>

      <div className="flex w-full items-center justify-center gap-2">
        <Checkbox />
        <Checkbox variant="soft" />
      </div>

      <div className="flex w-full items-center justify-center gap-2">
        <Switch />
      </div>
    </div>
  );
}
