# Ventora Labs - Marketing & Consulting Website

A modern, dark-themed marketing and consulting website built with Next.js 14 and Tailwind CSS.

## Features

- 🎨 **Modern Dark Theme** - Sleek dark design with vibrant green accents
- ✨ **Animated 3D Cube** - Eye-catching hero section with CSS 3D transforms
- 🎭 **Smooth Animations** - Floating elements, marquee scrolling, and hover effects
- 📱 **Fully Responsive** - Optimized for all screen sizes
- ⚡ **Next.js 14** - Built with the latest App Router
- 🎯 **Tailwind CSS** - Utility-first CSS framework with custom theming

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Inter & Space Grotesk (Google Fonts)
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & animations
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Homepage
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section with 3D cube
│   ├── Marquee.tsx      # Scrolling marquee banner
│   ├── Services.tsx     # Services grid section
│   ├── Method.tsx       # Ventora Method section
│   ├── CTA.tsx          # Call-to-action section
│   ├── Footer.tsx       # Site footer
│   └── index.ts         # Component exports
```

## Customization

### Colors

Update the color palette in `tailwind.config.ts`:

```ts
colors: {
  primary: "#00E08E",        // Tech Green
  "primary-hover": "#00B371",
  secondary: "#10B981",      // Emerald
  "background-dark": "#020302",
  "card-dark": "#0A0C0A",
  // ...
}
```

### Fonts

Fonts are configured in `src/app/layout.tsx` using Next.js font optimization.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT License - feel free to use this for your own projects!

