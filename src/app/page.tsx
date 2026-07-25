import AlertShowcase from "@/app/_components/AlertShowcase";
import BadgeShowcase from "@/app/_components/BadgeShowcase";
import CardShowcase from "@/app/_components/CardShowcase";
import CoreShowcase from "@/app/_components/CoreShowcase";
import OverlayShowcase from "@/app/_components/OverlayShowcase";
import TypographyShowcase from "@/app/_components/TypographyShowcase";
import Typography from "@/components/atoms/Typography/Typography";

export default function HomePage() {
  return (
    <main className="from-ds-slate-50 via-ds-white to-ds-blue-50 min-h-screen bg-gradient-to-br">
      <header className="border-ds-gray-200 bg-ds-white/80 border-b backdrop-blur-sm">
        <div className="container mx-auto px-4 py-10 sm:px-6 sm:py-12">
          <div className="mx-auto max-w-3xl text-center">
            <Typography
              as="h1"
              variant={{ base: "3xl", sm: "4xl" }}
              weight="bold"
              className="from-ds-blue-600 to-ds-teal-600 mb-4 bg-gradient-to-r bg-clip-text text-transparent"
            >
              Design System Showcase
            </Typography>
            <Typography variant={{ base: "base", sm: "lg" }} color="muted">
              Explore accessible, responsive UI components built with React, TypeScript, and Tailwind CSS.
            </Typography>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-10 sm:px-6 sm:py-12" aria-labelledby="components-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <Typography as="h2" id="components-heading" variant="2xl" weight="bold" color="default" className="mb-2">
              Components
            </Typography>
            <Typography color="muted">
              Interactive examples of the components available in this design system.
            </Typography>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CoreShowcase />
            <TypographyShowcase />
            <BadgeShowcase />
            <AlertShowcase />
            <CardShowcase />
            <OverlayShowcase />
          </div>

          <footer className="border-ds-gray-200 from-ds-blue-50 to-ds-teal-50 mt-12 rounded-xl border bg-gradient-to-r p-6 text-center sm:p-8">
            <Typography variant="xl" weight="semibold" color="default" className="mb-2">
              Built with Modern Web Technologies
            </Typography>
            <Typography color="muted">React • TypeScript • Tailwind CSS • Next.js</Typography>
          </footer>
        </div>
      </section>
    </main>
  );
}
