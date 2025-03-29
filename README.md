# Wolf and Pup App

Wolf & Pup is a community-focused coffee shop app built with Next.js, React, and TailwindCSS. It serves as a marketing website, customer engagement platform, and future content management system.

## Key Features
- **Home Page**: Showcases brand, services, and call-to-actions
- **About Us**: Detailed company story and vision
- **Cafe**: Menu information and offerings
- **Work**: Information about workspace areas, phone rooms, meeting spaces
- **Play (The Glades)**: Waiver information, admission details, and memberships
- **Membership**: Pricing details, membership benefits, and tiers
- **Calendar**: Displays upcoming community workshops and events
- **Party**: Information on party packages and booking options
- **Contact Page**: Allows customers to reach out via a form
- **Newsletter Signup**: Captures emails for marketing campaigns
- **Dark Mode & Theming**: Custom branding with fast color updates
- **Admin Login (Future)**: For managing content without code

## Technical Stack
- **Framework**: Next.js 15.2 (App Router)
- **UI Library**: React 19
- **Styling**: TailwindCSS v4, shadcn/ui components
- **Deployment**: Vercel
- **Icons**: Lucide React
- **Fonts**: Geist and custom brand fonts
- **Form Handling**: React Hook Form with @hookform/resolvers
- **Radix UI**: Accessible UI primitives (popover, dialog, dropdown, etc.)

## Project Structure
- `src/app/`: Next.js App Router pages
- `src/components/`: React components (UI components in `ui/`)
- `src/lib/`: Utility functions and shared logic
- `src/hooks/`: Custom React hooks
- `public/`: Static assets

## Package Manager

This project uses [pnpm](https://pnpm.io/) as its package manager for efficient dependency management.

### pnpm Commands

```bash
pnpm install   # Install dependencies
pnpm dev       # Start development server
pnpm build     # Build for production
pnpm start     # Start production server
pnpm lint      # Run ESLint
```

Ensure you have pnpm installed globally:

```bash
npm install -g pnpm
```

## Code Style Guidelines
- TypeScript strict mode enabled
- React Server Components (RSC) enabled
- TailwindCSS v4 with direct HSL format (`bg-[hsl(var(--primary))]`)
- Path aliases (`@/components`, `@/lib`, etc.)
- File naming conventions: kebab-case for files, PascalCase for React components, camelCase for utility functions

## Deploy on Vercel

Deploy your Next.js app easily using [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For more details, visit [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Customizing Theme Colors

Theme colors are defined using CSS variables in `src/app/globals.css`. To customize the theme colors, simply update the HSL values:

```css
:root {
  --primary: 202, 15%, 47%; /* Wolf Gray */
  --secondary: 35, 76%, 61%; /* Pup Orange */
  --accent: 105, 22%, 51%; /* Wolf Green */
  /* Update these values to change your theme colors */
}
```

Changes will automatically reflect throughout the application due to TailwindCSS integration.
