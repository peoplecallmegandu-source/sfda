# Horizon Realty — Interactive Real Estate Website

A modern, multi-page real estate website template built with Tailwind CSS, expressive design (glassmorphism, gradients, parallax), and JavaScript-driven interactivity. Designed to be bold, fast, and conversion-focused for property listings, seller leads, and buyer engagement.

Project structure

my-project/
├── public/
│   ├── index.html          # Main landing page (hero, search, featured, listings)
│   ├── about.html          # About page (team, story, process)
│   └── contact.html        # Contact & booking (form with validation)
├── server/
│   └── index.js            # Express server, static hosting + demo API
├── package.json            # Project dependencies & scripts
├── render.yaml             # Example Render.com deployment config
└── README.md               # Documentation (this file)

Key features

- Full-bleed layout: every main content wrapper uses full-bleed containers (w-full / main > .full) to fill the viewport.
- Tailwind CSS classes used directly in HTML (via CDN) for rapid prototyping.
- Glassmorphism, gradient accents, and layered shadows for modern depth.
- Dark/light theme toggle persisting preference in localStorage.
- Parallax-like hero, reveal-on-scroll animations (IntersectionObserver), and carousel.
- Interactive components: search filtering, favorites (saved to localStorage), modal booking form, FAQ accordion.
- Form validations with accessible error messaging and simulated API endpoint (/api/contact).
- Lazy loading of images and progressive enhancement for links and actions.
- Accessibility: semantic markup, keyboard-friendly modal, ARIA-friendly roles.

Fonts & images

- Fonts used: Poppins (UI) and Merriweather (display). Each HTML file contains comment markers for the font names to comply with the design pipeline: <!-- {{font: Poppins}} --> and <!-- {{font: Merriweather}} -->.
- Images use AI-resolvable placeholders in the format: https://pixabay.com/get/g52337baa8a6c1d20105aa6c068ebe480a5e2d0689953d74b75d2baf50e4f2214d501394eea548aeb2e56d0478df91335c6d6d0222ff7d315fe493c3b9855d86c_640.jpg. Replace these placeholders with real image URLs or base64 data URIs for production. The placeholder pipeline will fetch high-quality images from sources like Unsplash/Pexels.

Development

Requirements:
- Node.js 14+ (recommended)

Install and run locally:

1. Install dependencies:

   npm install

2. Start the server:

   npm start

   The site will be available at http://localhost:3000

For development with auto-reload:

   npm run dev

Deployment

A sample render.yaml is included for Render.com. The start command uses `npm start` (node server/index.js).

Customization notes

- Tailwind: This project uses the CDN build of Tailwind for simplicity. For production, adopt a Tailwind CLI/PostCSS workflow to remove unused styles and optimize builds.
- Images: Replace https://images.unsplash.com/photo-1641372028605-0e33512bebf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODkyNDZ8MHwxfHNlYXJjaHw0fHwuLi58ZW58MHwwfHx8MTc1NTM1MzcxNnww&ixlib=rb-4.1.0&q=80&w=1080 placeholders with your branded images or optimized image URLs.
- Content: Edit the HTML files in public/ to change copy, promotions, or property data.
- Integrations: Wire the /api/contact endpoint to an email service (SendGrid) or CRM for real leads.

Accessibility & SEO

- Each page includes meta descriptions and OG tags for better sharing.
- Use semantic headings and roles. Enhancements like focus trapping in modals and ARIA labels are implemented in a basic form; consider using a library for robust production needs.

Extending the project

- Add user accounts and saved searches.
- Integrate live MLS feeds or a headless CMS to manage listings.
- Build a dedicated seller dashboard to track offers and showings.

Support

If you want this template tailored for your brokerage, property portfolio, or brand (logo, colors, integrated CRM), open an issue or reach out directly — I can help adapt design, content, and backend integrations.

Enjoy building remarkable real estate experiences with Horizon Realty.
