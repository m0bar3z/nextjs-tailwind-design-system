import { ElementType, ReactNode } from "react";

/**
 * variant must be chnaged to something like MUI
 */

type TextVariants = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";

type TextWeights = "regular" | "medium" | "semibold" | "bold";

interface Props {
  variants?: TextVariants;
  weight?: TextWeights;
  className?: string;
  Tag?: ElementType;
  children: ReactNode;
}

const Typography = (props: Props) => {
  const { Tag = "div" } = props;

  return <Tag>{props.children}</Tag>;
};

export default Typography;
