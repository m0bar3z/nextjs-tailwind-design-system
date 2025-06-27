import clsx from "clsx";
import { type ElementType, memo, ReactNode } from "react";

type TextVariants = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";

type TextWeights = "regular" | "medium" | "semibold" | "bold";

interface Props {
  variant?: TextVariants;
  weight?: TextWeights;
  className?: string;
  Tag?: ElementType;
  children: ReactNode;
}

const Typography = (props: Props) => {
  const { Tag = "div", variant = "base", weight = "regular", className, ...restProps } = props;

  const variantMap: Record<TextVariants, string> = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
  };

  const weightMap: Record<TextWeights, string> = {
    regular: "font-regular",
    medium: "font-medium",
    semibold: "font-seminold",
    bold: "font-bold",
  };

  return (
    <Tag className={clsx(variantMap[variant], weightMap[weight], className)} {...restProps}>
      {props.children}
    </Tag>
  );
};

export default memo(Typography);
