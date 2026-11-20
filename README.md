# DKNOVIX TECHNOLOGIES — CINEMATIC CRIMSON FUTURISTIC WEBSITE

> **INNOVATING TODAY. BUILDING TOMORROW.**  
> *ENGINEER THE FUTURE.*

---

## Overview

A world-class, cinematic website built for **DKNOVIX TECHNOLOGIES**, featuring a persistent 3D WebGL robotic environment, dynamic volumetric crimson atmospheric backlighting, mouse/scroll parallax, futuristic glassmorphic UI, and comprehensive project & founder showcases.

---

## Visual Design System & Palette

- **Deep Black**: `#050505` (Dominant environment and atmospheric canvas)
- **Carbon Black**: `#0B0B0E` (Surface cards and HUD glass panels)
- **Dark Burgundy**: `#26070D` (Volumetric ambient depth, badge backplates)
- **Crimson Red**: `#FF172F` (Primary core identity, glowing visor, halo backlighting)
- **Fire Red**: `#E52B35` (High-contrast button gradients & dynamic lasers)
- **Fiery Orange**: `#FF612E` (Secondary rim lighting & gradient accents)
- **Warm White**: `#F5F5F5` (High-contrast crisp typography)
- **Muted Grey**: `#92929B` (Technical telemetry, subtitles, HUD lines)

---

## Key Features & Architecture

### 1. Immersive Continuous 3D Animated Background (`src/components/3d/`)
- **Shared Persistent Canvas**: Runs across the entire website without re-mounting or hitching across sections.
- **Centerpiece Humanoid Robot (`RobotModel.tsx`)**:
  - Precision mechanical bust with matte-black stealth metallic armor (`metalness: 0.92, roughness: 0.22`).
  - Cranium plating, brow visor, jaw actuators, chin guard.
  - Glowing crimson optical visor with white-hot focus points (`#FF172F` and `#FFFFFF`).
  - Titanium spinal vertebrae and dual hydraulic neck pistons that flex with head rotation.
  - Chest armor with laser-etched DKNOVIX insignia and central Quantum Arc Reactor with spinning gyro energy ring.
  - Stealth pauldrons with glowing red edge conduits.
  - Rhythmic breathing expansion and lifelike cursor-tracking interpolation.
- **Atmospheric Crimson Environment (`AtmosphericFogLight.tsx`)**:
  - Volumetric red halo effect positioned behind the robot.
  - Light rays passing through slowly moving crimson fog (`THREE.FogExp2('#050505', 0.042)`).
  - Cybernetic ground grid fading into distance.
- **Floating Gyroscopic & Holographic Elements (`FloatingElements.tsx`)**:
  - Concentric gimbal / gyro rings rotating on offset axes.
  - Holographic wireframe icosahedrons and octahedrons drifting at varying depths.
  - Tech data nodes with glowing orbital rings.
- **Particles & Embers (`ParticlesEmbers.tsx`)**:
  - Hundreds of glowing crimson and fiery orange embers rising and drifting with mouse responsiveness.
- **Mouse & Scroll Interpolation**:
  - Dynamic camera repositioning, perspective shifts, and lighting angles responding to scroll position and cursor coordinates.

### 2. Cinematic Introduction (`CinematicIntro.tsx`)
- Pitch-black screen start.
- Crimson laser beam cutting horizontally across the screen.
- Decrypting DKNOVIX TECHNOLOGIES typography reveal.
- Traveling red light sweep across the logo.
- Tagline reveal: `INNOVATING TODAY. BUILDING TOMORROW.`
- Smooth fade transition to reveal the 3D robotic background (with quick skip option).

### 3. Navigation Bar (`Navbar.tsx`)
- Transparent initially, transitioning to dark glass on scroll (`#050505/80 backdrop-blur-xl`).
- Brand symbol with rotating core.
- Active section tracking with glowing crimson underline indicator.
- Glowing red CTA: `LET'S TALK`.
- Integrated Web Audio sci-fi sound effects synthesizer with mute/unmute toggle.
- Responsive mobile drawer.

### 4. Hero Section (`HeroSection.tsx`)
- Upper badge: `THE NEXT GENERATION OF TECHNOLOGY`.
- Main headline: `WE BUILD WHAT'S NEXT.` (with crimson-to-orange gradient).
- Primary button `EXPLORE OUR WORLD` and secondary `START A PROJECT`.
- Balanced negative space framing the 3D robot centerpiece.
- Telemetry telemetry HUD metrics and `SCROLL TO DISCOVER` animated mouse indicator.

### 5. About Us (`AboutSection.tsx`)
- Heading: `TECHNOLOGY WITHOUT LIMITS.`
- DKNOVIX mission and vision callout cards.
- 4 interactive feature cards: `INNOVATION`, `INTELLIGENCE`, `CREATIVITY`, `EXCELLENCE` with corner HUD brackets and glowing hover effects.

### 6. Services (`ServicesSection.tsx`)
- Heading: `WHAT WE ENGINEER.`
- 6 premium cards:
  - `01 – WEB DEVELOPMENT`
  - `02 – AI & MACHINE LEARNING`
  - `03 – SOFTWARE DEVELOPMENT`
  - `04 – DATA ANALYTICS`
  - `05 – UI/UX DESIGN`
  - `06 – IT SOLUTIONS`
- Interactive hover effects, laser line glow, tech stack tags, and direct service-selection trigger for the contact form.

### 7. Founder Profile (`FounderSection.tsx`)
- Heading: `THE HUMAN BEHIND THE TECHNOLOGY.`
- Founder: **Dharun Karthik S L**
- Designation: **FOUNDER & TECHNOLOGY DEVELOPER**
- Location: **Abu Dhabi, United Arab Emirates**
- Education: **B.Tech Artificial Intelligence and Data Science (2022–2026)**
- Complete biography prose.
- Cybernetic HUD portrait card with scanlines, verified status badge, technical proficiency meters, LinkedIn, GitHub, and interactive Resume Dossier modal & download.

### 8. Technology Ecosystem (`TechEcosystem.tsx`)
- Heading: `BUILT WITH INTELLIGENCE.`
- Categorized tabs (ALL, PROGRAMMING, AI & ML, ANALYTICS, WEB, IoT).
- Interactive cards for Python, Java, SQL, JavaScript, TensorFlow, Keras, Scikit-learn, Pandas, NumPy, Power BI, Excel, Tableau, Matplotlib, HTML5, CSS3, React, Tailwind CSS, ESP32, NodeMCU, Sensors Array, and Blynk.
- Animated proficiency meters.

### 9. Featured Projects (`FeaturedProjects.tsx`)
- Heading: `INNOVATION IN ACTION.`
- Large cinematic project cards:
  - **PROJECT 01: SMART UMBRELLA FOR BIKES AND CYCLES USING IoT** (MSME Hackathon 2024 Winner — ₹15 Lakhs Worth)
  - **PROJECT 02: MRI-BASED LUMBAR SPINE DEGENERATIVE CONDITION DETECTION** (Deep Learning CNN Diagnostic Framework)
  - **PROJECT 03: FIRE DETECTION SYSTEM** (Hazard Sentinel & Alert Array)
  - **PROJECT 04: WEB & SOFTWARE DEVELOPMENT** (Modern WebGL & React Enterprise Applications)
- Interactive "VIEW ARCHITECTURE" modal with engineering dossiers, telemetry stats, GitHub, and Live Demo links.

### 10. Achievements Timeline (`AchievementsSection.tsx`)
- Heading: `BUILT THROUGH INNOVATION.`
- Animated vertical connected timeline:
  - MSME Hackathon 2024 Victory
  - Project Recognition Worth ₹15 Lakhs
  - Published International Research Paper
  - B.Tech Artificial Intelligence & Data Science – 2026

### 11. Creative Process (`CreativeProcess.tsx`)
- Heading: `IDEAS. ENGINEERING. IMPACT.`
- 4-phase connected pipeline: `01 DISCOVER`, `02 DESIGN`, `03 DEVELOP`, `04 DELIVER` with specific key deliverables.

### 12. Contact Section (`ContactSection.tsx`)
- Heading: `LET'S CREATE SOMETHING EXTRAORDINARY.`
- Real interactive form with input validation (Full Name, Email, Company, Service Required, Project Description).
- Realistic transmission state and celebratory success screen with confetti.
- Action buttons: `SEND ENQUIRY` and `CONTACT VIA WHATSAPP` (auto-encodes project parameters into WhatsApp chat).
- Verified Abu Dhabi, UAE coordinates and direct communication channels.

### 13. Footer (`Footer.tsx`)
- Brand signature: `DKNOVIX TECHNOLOGIES — INNOVATING TODAY. BUILDING TOMORROW.`
- Navigation links, services, social media, copyright, system status indicator, and animated back-to-top button.
- Closing mantra: `ENGINEER THE FUTURE.`

---

## Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 + Custom Sci-Fi Theme Tokens
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **Motion & Micro-Interactions**: Framer Motion
- **Audio Synthesizer**: Web Audio API (zero external audio file dependencies)
- **Icons**: Lucide Icons + Custom SVG Cybernetic Brand Glyphs

---

## Getting Started

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
npm run preview
```
