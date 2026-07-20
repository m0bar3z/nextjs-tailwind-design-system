# Next.js Tailwind Design System

A public reference project for building a custom, reusable design system inside a modern Next.js application.

The project combines a live component showcase with isolated Storybook examples. It focuses on consistent component APIs, reusable design tokens, responsive behavior, accessibility, and maintainable frontend architecture. It is an application and learning resource—not an npm package.

## Tech stack

- [Next.js](https://nextjs.org/) with the App Router
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/) in strict mode
- [Tailwind CSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)
- [Lucide React](https://lucide.dev/) icons
- [Framer Motion](https://motion.dev/) for animation
- ESLint, Prettier, Husky, and Commitlint for code quality

## Features

- Interactive design-system showcase at the application root
- Components organized using atomic-design principles
- Custom color, typography, shadow, and blur tokens
- Responsive typography variants
- Locally hosted Inter variable font
- Component variants, sizes, colors, and interaction states
- Storybook development environment
- Conventional Commit enforcement

## Component status

The component set is actively being expanded. A check in the **Storybook** column means the component currently has a dedicated story.

| Category     | Component  | Implemented | Storybook |
| ------------ | ---------- | :---------: | :-------: |
| Foundation   | Typography |     Yes     |     —     |
| Action       | Button     |     Yes     |    Yes    |
| Form         | Input      |     Yes     |    Yes    |
| Form         | Checkbox   |     Yes     |    Yes    |
| Form         | Radio      |     Yes     |    Yes    |
| Form         | Select     |     Yes     |    Yes    |
| Form         | Switch     |     Yes     |    Yes    |
| Feedback     | Alert      |     Yes     |     —     |
| Data display | Badge      |     Yes     |     —     |
| Data display | Card       |     Yes     |     —     |
| Overlay      | Modal      |     Yes     |     —     |
| Overlay      | Tooltip    |     Yes     |     —     |

The repository also contains a small custom icon set under `src/icons`.

## Getting started

### Requirements

- Node.js 20.9 or newer
- npm

### Installation

```bash
git clone https://github.com/m0bar3z/nextjs-tailwind-design-system.git
cd nextjs-tailwind-design-system
npm install
```

Start the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:1998](http://localhost:1998) to view the component showcase.

Start Storybook in a separate terminal:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to browse components in isolation.

## Available scripts

| Command                   | Description                                       |
| ------------------------- | ------------------------------------------------- |
| `npm run dev`             | Start the Next.js development server on port 1998 |
| `npm run build`           | Create an optimized production build              |
| `npm run start`           | Start the production server                       |
| `npm run lint`            | Run ESLint across the project                     |
| `npm run storybook`       | Start Storybook on port 6006                      |
| `npm run build-storybook` | Create a static Storybook build                   |

## Project structure

```text
.
├── .storybook/               # Storybook configuration
├── public/
│   └── fonts/                # Locally hosted Inter font files
└── src/
    ├── app/                  # Next.js App Router and showcase page
    ├── components/
    │   ├── atoms/            # Foundational UI components
    │   ├── molecules/        # Components composed from atoms
    │   └── index.ts          # Component exports
    ├── icons/                # Custom React icon components
    ├── stories/              # Storybook starter examples
    └── styles/
        ├── globals.css       # Tailwind setup and shared tokens
        └── tokens/           # Design-token definitions
```

Each reusable component lives in its own directory with its implementation, styles, and—where available—Storybook story colocated together.

## Design-system conventions

- Prefix design-system utilities and CSS classes with `ds-` to avoid collisions.
- Extend native HTML attributes so components retain expected browser behavior.
- Keep component variants explicit and type-safe.
- Prefer semantic HTML before adding ARIA attributes.
- Support keyboard navigation and visible focus states for interactive components.
- Add stories for default, variant, disabled, error, loading, and edge-case states.
- Use the `@/` alias for imports from `src`.
- Keep application-specific showcase components separate from reusable primitives.

## Adding a component

1. Choose the appropriate atomic-design category.
2. Create a directory using the component name, for example `src/components/atoms/Avatar`.
3. Add the typed React implementation and colocated styles.
4. Export the component from `src/components/index.ts`.
5. Add Storybook stories for its supported states and interactions.
6. Add it to the main showcase when it helps demonstrate real composition.
7. Run the quality checks before opening a pull request.

## Contributing

Contributions, bug reports, accessibility improvements, and component proposals are welcome.

1. Fork the repository and create a focused branch.
2. Keep each change scoped and include relevant stories or documentation.
3. Run the checks below.
4. Use a [Conventional Commit](https://www.conventionalcommits.org/) message, such as `feat(button): add loading state`.
5. Open a pull request describing the problem, solution, and testing performed.

```bash
npm run lint
npm run build
npm run build-storybook
```

Husky runs linting before commits, and Commitlint validates commit messages.

## Roadmap

- Complete Storybook coverage for every existing component
- Add automated interaction and accessibility tests
- Introduce semantic tokens and light, dark, and system themes
- Harden existing components for keyboard and screen-reader use
- Add layout primitives and a complete form-field API
- Expand overlays, navigation, feedback, and data-display components
- Add realistic example pages built entirely from the design system
- Add continuous integration for lint, build, Storybook, and tests

## License

This project is available under the [MIT License](LICENSE).
