# ALD1 Fan Site — Alpha Drive One

A fan-made React website for the 5th generation K-pop group **Alpha Drive One (ALD1)**, built around a racing/motorsport visual theme ("paddock," "engine," neon race-track aesthetics). Includes member profiles with stat cards, a discography section with embedded YouTube tracks, and smooth scroll-based navigation.

## Features

- **Animated Loader** — racing-themed intro animation before the site reveals itself
- **Sticky Navbar** — scroll-aware active section highlighting + mobile hamburger menu
- **Hero Section** — "Enter Paddock" CTA that smooth-scrolls into the members section
- **About Section** — group introduction/formula section
- **Member Cards & Modal** — grid of member cards (photo, role, nationality, height, MBTI) that open a detailed modal with stat bars (Leadership, Rap, Vocal, Dance) on click
- **Music Section** — singles and B-sides list with embedded YouTube playback
- **Back-to-Top Button** — appears after scrolling past the hero section

## Tech Stack

- **React 19** (Create React App / `react-scripts`)
- Plain CSS (component-scoped stylesheets, no CSS framework)
- **ESLint** + **Prettier** for linting/formatting
- **React Testing Library** for component tests

## Project Structure

```
src/
├── App.js                     # Root component, section routing & scroll logic
├── components/
│   ├── Loader.js               # Intro loading animation
│   ├── Navbar.js                # Scroll-aware nav bar
│   ├── Hero.js                   # Landing/hero section
│   ├── About.js / AboutBox.js    # Group intro
│   ├── Members.js / MemberCard.js / MemberModal.js   # Member grid + detail modal
│   ├── Music.js / Formula.js     # Discography section
│   ├── Footer.js
│   ├── BackToTop.js
│   └── __tests__/Navbar.test.js
├── data/
│   ├── members.js               # Member profile data
│   └── music.js                  # Track list (YouTube IDs)
├── hooks/
│   └── useVisible.js             # Scroll-visibility hook
├── styles/                       # Per-component CSS files
└── assets/images/                # Member photos
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Setup

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

Outputs a production build to the `build/` folder.

### Lint & Format

```bash
npm run lint
npm run format
```

## Disclaimer

This is an unofficial, fan-made project created for personal/portfolio purposes. All group names, member likenesses, and music belong to their respective owners/agency. Not affiliated with or endorsed by the artists or their label.

## Author

Created by a fan as a personal web development project.
