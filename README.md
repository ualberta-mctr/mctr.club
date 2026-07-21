# mctr.club

Visit the live website at [mctr.club](https://mctr.club)

## Project Structure

Notable files and locations in the project

```text
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── pages/
│   ├── scripts/
│   ├── settings/
│   └── styles/
```

* **`public/`** Contains static assets that do not need to be processed by Astro’s build system 
* **`src/assets/`** Contains images used throughout the site  
* **`src/components/`**: Reusable Astro UI elements
* **`src/content/`**: Reserved for Astro’s **Content Collections**. This folder contains the `.md` files for events and updates on the website
* **`src/layouts/`**: Reusable Astro Layouts
* **`src/pages/`**: This folder contains all the pages on the website, URLs are built from file-based routing
* **`src/scripts/`**: Miscellaneous javascript functions
* **`src/settings/`**: JSON files for configuring the website
* **`src/styles/`**: Contains `global.css` with a TailwindCSS import and variables used throughout the project


## Contributing Guide
Read the guide at `src/pages/resources/contribute/index.md`


## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Tech Stack
* **[Astro](https://astro.build/)** – A modern web framework optimized for speed. It utilizes an "island architecture" to deliver ultra-fast performance by shipping zero client-side JavaScript by default.
* **[Tailwind CSS](https://tailwindcss.com/)** – A utility-first CSS framework that enables rapid UI development and responsive design directly within your HTML and Astro components.
* **[Lucide](https://lucide.dev/)** – An open-source icon library that provides a clean, consistent, and lightweight collection of customizable icons for your UI components.
* **[MDX](https://mdxjs.com/)** – An extension of Markdown that lets you write JSX directly within your content, enabling interactive components and dynamic elements inside markdown files.
* **[Schedule-X](https://schedule-x.dev/)** – A modern, responsive JavaScript event calendar and scheduling library designed for smooth performance and flexible integration.

## Credits
This website was built using code from the following projects
- https://github.com/PavelDoGreat/WebGL-Fluid-Simulation 
- https://github.com/AnjayGoel/astro-sienna
- https://github.com/jomorespi/manduca
- https://github.com/dodolalorc/astro-navfolio
- https://github.com/cbetz/pulsar-lite
- https://github.com/fauziralpiandi/astrogent
