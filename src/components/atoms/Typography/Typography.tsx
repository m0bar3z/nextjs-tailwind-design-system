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

type TextColors =
  | "inherit"
  | "default"
  | "muted"
  | "subtle"
  | "disabled"
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "inverse";

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
  xs: "text-ds-xs",
  sm: "text-ds-sm",
  base: "text-ds-base",
  lg: "text-ds-lg",
  xl: "text-ds-xl",
  "2xl": "text-ds-2xl",
  "3xl": "text-ds-3xl",
  "4xl": "text-ds-4xl",
  "5xl": "text-ds-5xl",
  "6xl": "text-ds-6xl",
  "7xl": "text-ds-7xl",
};

const weightMap: Record<TextWeights, string> = {
  regular: "font-ds-regular",
  medium: "font-ds-medium",
  semibold: "font-ds-semibold",
  bold: "font-ds-bold",
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
  inverse: "text-ds-white",
};

const responsiveVariantMap: Record<Exclude<TextBreakpoints, "base">, Record<TextVariants, string>> = {
  sm: {
    xs: "sm:text-ds-xs",
    sm: "sm:text-ds-sm",
    base: "sm:text-ds-base",
    lg: "sm:text-ds-lg",
    xl: "sm:text-ds-xl",
    "2xl": "sm:text-ds-2xl",
    "3xl": "sm:text-ds-3xl",
    "4xl": "sm:text-ds-4xl",
    "5xl": "sm:text-ds-5xl",
    "6xl": "sm:text-ds-6xl",
    "7xl": "sm:text-ds-7xl",
  },
  md: {
    xs: "md:text-ds-xs",
    sm: "md:text-ds-sm",
    base: "md:text-ds-base",
    lg: "md:text-ds-lg",
    xl: "md:text-ds-xl",
    "2xl": "md:text-ds-2xl",
    "3xl": "md:text-ds-3xl",
    "4xl": "md:text-ds-4xl",
    "5xl": "md:text-ds-5xl",
    "6xl": "md:text-ds-6xl",
    "7xl": "md:text-ds-7xl",
  },
  lg: {
    xs: "lg:text-ds-xs",
    sm: "lg:text-ds-sm",
    base: "lg:text-ds-base",
    lg: "lg:text-ds-lg",
    xl: "lg:text-ds-xl",
    "2xl": "lg:text-ds-2xl",
    "3xl": "lg:text-ds-3xl",
    "4xl": "lg:text-ds-4xl",
    "5xl": "lg:text-ds-5xl",
    "6xl": "lg:text-ds-6xl",
    "7xl": "lg:text-ds-7xl",
  },
  xl: {
    xs: "xl:text-ds-xs",
    sm: "xl:text-ds-sm",
    base: "xl:text-ds-base",
    lg: "xl:text-ds-lg",
    xl: "xl:text-ds-xl",
    "2xl": "xl:text-ds-2xl",
    "3xl": "xl:text-ds-3xl",
    "4xl": "xl:text-ds-4xl",
    "5xl": "xl:text-ds-5xl",
    "6xl": "xl:text-ds-6xl",
    "7xl": "xl:text-ds-7xl",
  },
  "2xl": {
    xs: "2xl:text-ds-xs",
    sm: "2xl:text-ds-sm",
    base: "2xl:text-ds-base",
    lg: "2xl:text-ds-lg",
    xl: "2xl:text-ds-xl",
    "2xl": "2xl:text-ds-2xl",
    "3xl": "2xl:text-ds-3xl",
    "4xl": "2xl:text-ds-4xl",
    "5xl": "2xl:text-ds-5xl",
    "6xl": "2xl:text-ds-6xl",
    "7xl": "2xl:text-ds-7xl",
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
