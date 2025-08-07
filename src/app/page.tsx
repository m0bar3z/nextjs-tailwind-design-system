import Input from "@/components/atoms/FormControls/Input/Input";

export default function HomePage() {
  return (
    <div className="min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <div className="flex items-center gap-2">
        <Input variant="underline" />
        <Input variant="light" />
        <Input variant="bordered" />
      </div>
    </div>
  );
}
