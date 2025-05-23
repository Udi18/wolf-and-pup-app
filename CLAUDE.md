# Wolf and Pup App - Development Guide

## Project Overview
Wolf & Pup is a community-focused coffee shop that integrates workspaces, play areas for kids and pets, and event spaces. This app serves as:
- A marketing website to provide business information
- A platform for customer engagement (newsletter, contact forms, event listings)
- A future content management system for managing text and media updates

## Key Features
- Home Page – Showcases brand, services, and call-to-actions
- About Us Section – Detailed company story and vision
- Cafe Section – Menu information and offerings
- Work Section – Information about workspace areas, phone rooms, meeting spaces
- Play Section (The Glades) – Waiver information, admission details, and memberships
- Membership Section – Pricing details, membership benefits, and tiers
- Calendar Section – Displays upcoming community workshops and events
- Party Section – Information on party packages and booking options
- Contact Page – Allows customers to reach out via a form
- Newsletter Signup – Captures emails for marketing campaigns
- Dark Mode & Theming – Custom branding with fast color updates
- Admin Login (Future) – For managing content without code

## Technical Stack
- Next.js 15.2 (App Router) – Modern, scalable framework
- React 19 – UI rendering and component reusability
- TailwindCSS v4 – Flexible, maintainable styling system
- shadcn/ui – Reusable UI components (use existing instead of creating new)
- Vercel – Deployment and performance

## Build & Development Commands
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Code Style Guidelines
- **TypeScript**: Strict mode enabled (`strict: true`)
- **Components**: React Server Components (RSC) enabled by default
- **CSS**: Tailwind v4 with shadcn/ui components
- **Imports**: Use path aliases (`@/components`, `@/lib`, etc.)
- **Fonts**: Uses Geist font family plus custom brand fonts
- **Icons**: Lucide React for icons
- **Colors**: Use Wolf & Pup brand colors through CSS variables in HSL format
  - Wolf: Brown (#6a5448), Gray (#697e89), Green (#719176)
  - Pup: Orange (#e8a74f), Green (#b7cb98), Pink (#ead9d0)
- **Tailwind v4 Notes**:
  - Use direct HSL format: `bg-[hsl(var(--primary))]` instead of utility classes
  - Avoid using `@apply` with responsive variants in CSS
  - Define custom styles directly rather than through @layer utilities when possible

## Naming Conventions
- React components: PascalCase (e.g., `Button.tsx`)
- Utility functions: camelCase (e.g., `cn()`)
- File naming: kebab-case for most files

## Project Structure
- `src/app/` - Next.js App Router pages
- `src/components/` - React components (UI components in `ui/`)
- `src/lib/` - Utility functions and shared logic

## Agent Interaction Guidelines
- Proceed step-by-step, clearly outlining each action.
- Confirm all information and text additions with the user before proceeding.
- Regularly check in with the user to validate progress and gather feedback.