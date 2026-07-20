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

type TextColors = "inherit" | "default" | "muted" | "subtle" | "disabled" | "primary" | "success" | "warning" | "error" | "inverse";

type TextBreakpoints = "base" | "sm" | "md" | "lg" | "xl" | "2xl";

type ResponsiveTextVariants = TextVariants | Partial<Record<TextBreakpoints, TextVariants>>;

type TypographyOwnProps<T extends ElementType = "div"> = {
  as?: T;
  variant?: ResponsiveTextVariants;
  weight?: TextWeights;
  color?: TextColors;
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

const colorMap: Record<TextColors, string> = {
  inherit: "text-inherit",
  default: "text-ds-gray-900",
  muted: "text-ds-gray-600",
  subtle: "text-ds-gray-500",
  disabled: "text-ds-gray-300",
  primary: "text-ds-blue-600",
  success: "text-ds-teal-600",
  warning: "text-ds-yellow-700",
  error: "text-ds-red-600",
  inverse: "text-white",
};

const responsiveVariantMap: Record<Exclude<TextBreakpoints, "base">, Record<TextVariants, string>> = {
  sm: {
    xs: "sm:text-xs",
    sm: "sm:text-sm",
    base: "sm:text-base",
    lg: "sm:text-lg",
    xl: "sm:text-xl",
    "2xl": "sm:text-2xl",
    "3xl": "sm:text-3xl",
    "4xl": "sm:text-4xl",
    "5xl": "sm:text-5xl",
    "6xl": "sm:text-6xl",
    "7xl": "sm:text-7xl",
  },
  md: {
    xs: "md:text-xs",
    sm: "md:text-sm",
    base: "md:text-base",
    lg: "md:text-lg",
    xl: "md:text-xl",
    "2xl": "md:text-2xl",
    "3xl": "md:text-3xl",
    "4xl": "md:text-4xl",
    "5xl": "md:text-5xl",
    "6xl": "md:text-6xl",
    "7xl": "md:text-7xl",
  },
  lg: {
    xs: "lg:text-xs",
    sm: "lg:text-sm",
    base: "lg:text-base",
    lg: "lg:text-lg",
    xl: "lg:text-xl",
    "2xl": "lg:text-2xl",
    "3xl": "lg:text-3xl",
    "4xl": "lg:text-4xl",
    "5xl": "lg:text-5xl",
    "6xl": "lg:text-6xl",
    "7xl": "lg:text-7xl",
  },
  xl: {
    xs: "xl:text-xs",
    sm: "xl:text-sm",
    base: "xl:text-base",
    lg: "xl:text-lg",
    xl: "xl:text-xl",
    "2xl": "xl:text-2xl",
    "3xl": "xl:text-3xl",
    "4xl": "xl:text-4xl",
    "5xl": "xl:text-5xl",
    "6xl": "xl:text-6xl",
    "7xl": "xl:text-7xl",
  },
  "2xl": {
    xs: "2xl:text-xs",
    sm: "2xl:text-sm",
    base: "2xl:text-base",
    lg: "2xl:text-lg",
    xl: "2xl:text-xl",
    "2xl": "2xl:text-2xl",
    "3xl": "2xl:text-3xl",
    "4xl": "2xl:text-4xl",
    "5xl": "2xl:text-5xl",
    "6xl": "2xl:text-6xl",
    "7xl": "2xl:text-7xl",
  },
};

const getVariantClasses = (variant: ResponsiveTextVariants = "base") => {
  if (typeof variant === "string") {
    return variantMap[variant];
  }

  return [
    variantMap[variant.base ?? "base"],
    variant.sm && responsiveVariantMap.sm[variant.sm],
    variant.md && responsiveVariantMap.md[variant.md],
    variant.lg && responsiveVariantMap.lg[variant.lg],
    variant.xl && responsiveVariantMap.xl[variant.xl],
    variant["2xl"] && responsiveVariantMap["2xl"][variant["2xl"]],
  ];
};

const TypographyBase = forwardRef(function Typography(
  { as, variant = "base", weight = "regular", color, className, children, ...restProps }: TypographyProps<ElementType>,
  ref: ComponentPropsWithRef<ElementType>["ref"]
) {
  const Component = as || "div";

  return (
    <Component
      ref={ref}
      className={clsx(getVariantClasses(variant), weightMap[weight], color && colorMap[color], className)}
      {...restProps}
    >
      {children}
    </Component>
  );
});

TypographyBase.displayName = "Typography";

const MemoizedTypography = memo(TypographyBase) as TypographyComponent;
(MemoizedTypography as { displayName?: string }).displayName = "Typography";

export default MemoizedTypography;
