import clsx from "clsx";
import {
  type ComponentPropsWithRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  forwardRef,
  memo,
  type ReactElement,
  type ReactNode,
} from "react";

type TextVariants = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";

type TextWeights = "regular" | "medium" | "semibold" | "bold";

type TypographyOwnProps<T extends ElementType = "div"> = {
  as?: T;
  variant?: TextVariants;
  weight?: TextWeights;
  className?: string;
  children?: ReactNode;
};

type TypographyProps<T extends ElementType = "div"> = TypographyOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof TypographyOwnProps<T>>;

type TypographyComponent = <T extends ElementType = "div">(
  props: TypographyProps<T> & { ref?: ComponentPropsWithRef<T>["ref"] }
) => ReactElement | null;

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
  semibold: "font-semibold",
  bold: "font-bold",
};

const TypographyBase = forwardRef(function Typography(
  { as, variant = "base", weight = "regular", className, children, ...restProps }: TypographyProps<ElementType>,
  ref: ComponentPropsWithRef<ElementType>["ref"]
) {
  const Component = as || "div";

  return (
    <Component ref={ref} className={clsx(variantMap[variant], weightMap[weight], className)} {...restProps}>
      {children}
    </Component>
  );
});

TypographyBase.displayName = "Typography";

const MemoizedTypography = memo(TypographyBase) as TypographyComponent;
(MemoizedTypography as { displayName?: string }).displayName = "Typography";

export default MemoizedTypography;
