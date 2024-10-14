# HackOMania 2024

This repository is used to deploy the official website for the annual hackathon organized by GeeksHacking. In 2024, the theme is "Innovate for Tomorrow: Building a Resilient Future."

The website can be found at [hackomania2024.geekshacking.com](https://hackomania2024.geekshacking.com).

## Project Overview

This project is built using Astro, a modern static site generator, along with Tailwind CSS for styling. It showcases information about the hackathon, including challenges, prizes, schedule, venue details, and team information.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- pnpm (v6 or later)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/hackomania-2024-website.git
   cd hackomania-2024
   ```

2. Install dependencies:

   ```
   pnpm install
   ```

3. Run the development server:

   ```
   pnpm run dev
   ```

4. Open your browser and navigate to `http://localhost:4321`

## Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── assets/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

For more details on the project structure, refer to the "Project Structure" section in the README:

````15:37:README.md
## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.
````

## Available Scripts

```5:11:package.json
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
```

## Deployment

We used Cloudflare Pages to deploy the website.

To deploy the project on alternative platforms, you can use the following command to generate the static files for deploying to any static hosting service:

```
pnpm run build
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any inquiries, please contact:

- General: contact@geekshacking.com
- Sponsorship: sponsor@geekshacking.com

Join our [Telegram channel](https://t.me/+HlJIBuu9isA2ZWQ1) for updates and discussions.
