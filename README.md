# Scotland Community Hub

A community platform for Scotland residents to stay connected through events, shared memories, and local updates.

## About

Scotland Community Hub is a web application designed to bring our community together. It provides a central place for residents to discover upcoming events, access administrative tools for event management, and share photos from community gatherings.

## Features

### Planned Features

The following features will be developed in separate branches:

| Feature | Branch | Description |
|---------|--------|-------------|
| **Home Page with Events Calendar** | `feature/events-calendar` | A landing page featuring an interactive calendar displaying all planned community events |
| **Admin Dashboard** | `feature/admin-dashboard` | Secure login area for administrators to create, update, and manage community events |
| **Photo Gallery** | `feature/photo-gallery` | Community gallery where members can upload and browse photos from past events |

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Adamowska-Natalia/scotland_community_hub.git
   cd scotland_community_hub
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
scotland_community_hub/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Reusable UI components
│   └── ui/                 # shadcn/ui components
├── lib/                    # Utility functions and helpers
├── public/                 # Static assets
└── README.md
```

## Branch Strategy

This project follows a feature-branch workflow:

- `main` - Production-ready code
- `feature/*` - New feature development
- `fix/*` - Bug fixes
- `v0/*` - Development branches from v0

## Contributing

1. Create a new branch from `main` for each feature
2. Make your changes
3. Submit a pull request for review

## License

This project is for the Scotland Community.

---

Built with care for the Scotland Community
