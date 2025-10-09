## Project Overview

This project is a fast, mobile-first landing site for Sneaker Zoo & Apparel, a premium sneaker boutique. It is built using **Next.js 15**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, and **Framer Motion**. The application is designed to be a modern, responsive web presence for the business, featuring a gallery, contact form, and business information.

## Building and Running

### Installation

To install the project dependencies, use one of the following commands:

```bash
pnpm install
# or
npm install
# or
yarn install
```

### Development

To run the project in development mode:

```bash
pnpm dev
# or
npm run dev
```

The application will be accessible at [http://localhost:3000](http://localhost:3000).

### Build

To build the project for production:

```bash
pnpm build
pnpm start
```

## Development Conventions

*   **Technology Stack:** The project primarily uses Next.js with TypeScript for the frontend, Tailwind CSS for styling, shadcn/ui for UI components, and Framer Motion for animations.
*   **Mobile-First Design:** The application is designed with a mobile-first approach, ensuring responsiveness across various devices.
*   **Type Safety:** TypeScript is used throughout the codebase to ensure type safety and improve code quality.
*   **Component-Based Architecture:** The UI is structured using reusable React components, with a dedicated `components` directory for organization.
*   **Configuration:** Business information, SEO metadata, and other constants are managed in the `lib` directory, particularly in `lib/constants.ts` and `lib/seo.ts`.
*   **API Endpoints:** API routes are handled within the `app/api` directory, following Next.js API route conventions.
*   **Styling:** Tailwind CSS is used for utility-first styling, with `postcss.config.js` and `tailwind.config.ts` for configuration.
*   **Image Management:** Gallery images are expected to be placed in `public/gallery/` and named sequentially (e.g., `01.jpg`).
*   **SEO:** The project includes configurations for sitemap, robots.txt, and Open Graph metadata to optimize for search engines and social media sharing.
*   **Deployment:** The project is optimized for deployment on platforms like Vercel, with clear instructions provided in the `README.md`.

### Troubleshooting

*   **Images not loading?**
    *   Check file paths match exactly.
    *   Ensure images are in `public/` directory.
    *   Clear Next.js cache: `rm -rf .next`.
*   **Styles not applying?**
    *   Run `pnpm dev` to rebuild Tailwind.
    *   Check for typos in className props.
    *   Verify `globals.css` is imported in layout.
*   **Build errors?**
    *   Run `pnpm lint` to check for issues.
    *   Check TypeScript errors: `pnpm tsc --noEmit`.
    *   Clear cache and reinstall: `rm -rf node_modules .next && pnpm install`.
*   **TypeScript errors:**
    *   Missing React types (`@types/react`, `@types/react-dom`). Fix with `pnpm add -D @types/react @types/react-dom`.
    *   Undefined Tailwind CSS classes. Fix by extending `theme.colors` in `tailwind.config.js`.
    *   ESLint warnings about `children` prop. Fix by using `React.PropsWithChildren`.
    *   CSS conflicts between height and padding properties (e.g., `h-10` and `py-2`). Choose one to avoid layout issues.
