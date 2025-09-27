import type { SVGProps } from "react";
const SvgArrowUpSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"
    />
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m16 12-4-4-4 4M12 16V8" />
  </svg>
);
export default SvgArrowUpSquare;
