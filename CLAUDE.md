# Curriculum Portfolio — Daniel Císcar Blázquez

## Project Overview
A personal portfolio/curriculum website built with **React (Create React App)** to showcase Daniel's profile as a QA Engineer.

## Owner
- **Name:** Daniel Císcar Blázquez
- **Role:** QA Engineer at Làberit (Valencia, Spain)
- **Email:** danicb1994@hotmail.com
- **GitHub:** github.com/Danico9

## Tech Stack
- **Framework:** React 19 (Create React App)
- **Styling:** Plain CSS (App.css) with CSS custom properties
- **No router needed** — single-page with anchor scroll navigation
- **No extra UI libraries** — pure CSS + inline SVG icons

## Project Structure
```
src/
  components/
    Nav.jsx          # Sticky navigation bar with mobile hamburger
    Hero.jsx         # Full-height hero (name, title, contact links)
    About.jsx        # Professional profile + key competencies
    Experience.jsx   # Work history timeline
    Skills.jsx       # Tech skills (QA + Dev) + languages
    Education.jsx    # Education + ISTQB certification
    Footer.jsx       # Footer with contact links
  data/
    cv.js            # Single source of truth for all CV content
  App.js             # Root component — imports and renders all sections
  App.css            # All component styles (BEM-like naming)
  index.css          # Global reset + font import (Inter)
public/
  CV_Daniel_Ciscar_QA.pdf   # CV PDF — must be placed here for the download button
```

## Section IDs (for nav anchors)
- `#hero` — Hero section
- `#sobre-mi` — About / Perfil Profesional
- `#experiencia` — Experiencia Profesional
- `#habilidades` — Habilidades / Skills
- `#formacion` — Formación & Certificaciones
- `#contacto` — Footer / Contacto

## Design System (CSS vars in App.css)
- **Primary:** `#2563EB` (blue)
- **Accent:** `#10B981` (green — used for "current/active" job status)
- **Dark:** `#0F172A` (navy — hero + footer backgrounds)
- **Background:** `#F8FAFC` (off-white)
- **Font:** Inter (Google Fonts, loaded in index.css)

## CV Data
All content lives in `src/data/cv.js`. To update the CV, edit only that file — components read from it automatically.

## Available Scripts
```bash
npm start    # Dev server on http://localhost:3000
npm run build  # Production build to /build
```

## Deployment
Previously deployed to Firebase Hosting (mycvdancisbla.web.app). Can be redeployed with `firebase deploy` from the project root after `npm run build`.

## PDF Download
The file `CV_Daniel_Ciscar_QA.pdf` must be placed in the `public/` folder for the download button in the Hero section to work. Copy from root: `cp CV_Daniel_Ciscar_QA.pdf public/`.
