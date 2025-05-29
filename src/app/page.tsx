import Typography from "@/components/atoms/Typography/Typography";

export default function HomePage() {
  return (
    <div className="grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h3 className="text-xs">xs sample text</h3>
      <h3 className="text-sm">sm sample text</h3>
      <h3 className="ds-text-h3-medium">h3</h3>
      <h3 className=" ds-text-h3-normal">h3</h3>

      <h4 className="ds-text-h4-bold">h4</h4>
      <h4 className="ds-text-h4-semibold">h4</h4>
      <h4 className="ds-text-h4-medium">h4</h4>
      <h4 className="ds-text-h4-normal">h4</h4>

      <h5 className="ds-text-h5-bold">h5</h5>
      <h5 className="ds-text-h5-semibold">h5</h5>
      <h5 className="ds-text-h5-medium">h5</h5>
      <h5 className="ds-text-h5-normal">h5</h5>

      <h6 className="ds-text-h6-bold">h6</h6>
      <h6 className="ds-text-h6-semibold">h6</h6>
      <h6 className="ds-text-h6-medium">h6</h6>
      <h6 className="ds-text-h6-normal">h6</h6>

      <Typography Tag="h5">test from typzczxczogrphy</Typography>
      <br />
    </div>
  );
}
