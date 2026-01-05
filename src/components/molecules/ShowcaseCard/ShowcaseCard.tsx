import Typography from "@/components/atoms/Typography/Typography";
import clsx from "clsx";
import { type ReactNode } from "react";

interface Props {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

const ShowcaseCard = ({ title, description, children, className }: Props) => {
  return (
    <div
      className={clsx(
        "group border-ds-gray-200 shadow-ds-sm hover:shadow-ds-md rounded-xl border bg-white p-6 transition-all",
        className
      )}
    >
      <div className="mb-4">
        <Typography variant="lg" weight="semibold" className="text-ds-gray-900">
          {title}
        </Typography>
        {description && (
          <Typography variant="sm" className="text-ds-gray-500 mt-1">
            {description}
          </Typography>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
};

export default ShowcaseCard;
