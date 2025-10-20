# Cesto AI Landing Page

A modern, responsive landing page for Cesto AI - an AI-driven digital platform designed to revolutionize the food & beverage industry.

## Features

- **Hero Section**: Eye-catching container scroll animation with compelling headline
- **Features Section**: 6 feature cards highlighting AI capabilities
- **How It Works**: 3-step process visualization
- **Stats Section**: Key metrics showcase with testimonial placeholder
- **CTA Section**: Strong call-to-action with dual buttons
- **Footer**: Complete footer with links and social media
- **Responsive Design**: Mobile-first approach with smooth animations
- **SEO Optimized**: Proper meta tags and Open Graph support

## Tech Stack

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS 4**: Utility-first CSS framework
- **shadcn/ui**: High-quality UI components
- **Framer Motion**: Smooth animations
- **Lucide React**: Beautiful icon library

## Design Specifications

- **Primary Color**: Emerald Green (#10b981)
- **Background**: White (#ffffff)
- **Font**: Manrope (all weights)
- **Style**: Professional, modern, clean

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone <repository-url>
   cd cesto-landing
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
cesto-landing/
├── app/
│ ├── layout.tsx # Root layout with font and metadata
│ ├── page.tsx # Main landing page
│ └── globals.css # Global styles and theme
├── components/
│ ├── ui/ # shadcn/ui components
│ ├── navbar.tsx # Fixed navigation bar
│ ├── hero-section.tsx # Hero with scroll animation
│ ├── features-section.tsx
│ ├── how-it-works-section.tsx
│ ├── stats-section.tsx
│ ├── cta-section.tsx
│ └── footer.tsx
├── lib/
│ └── utils.ts # Utility functions
└── public/ # Static assets
\`\`\`

## Customization

### Adding Your Logo

Replace the placeholder logo in the navbar and footer components with your actual logo:

1. Add your logo image to the `public/` directory
2. Update the logo in `components/navbar.tsx`
3. Update the logo in `components/footer.tsx`

### Adding Video/Demo

Replace the placeholder in the hero section:

1. Add your video file to `public/`
2. Update `components/hero-section.tsx` to include your video

### Colors

To change the color scheme, update the CSS variables in `app/globals.css`:

\`\`\`css
:root {
--primary: #10b981;
--primary-hover: #059669;
--primary-light: #d1fae5;
}
\`\`\`

## Contributing

Feel free to submit issues and enhancement requests!

## License

Copyright © 2025 Cesto AI. All rights reserved.
