# mctr.site

## Project Structure

Notable files and locations in the project

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── settings.json
```

### Folders

* **`public/`**
Contains static assets that do not need to be processed by Astro’s build system 
* **`components/`**: Reusable Astro UI elements
* **`content/`**: Reserved for Astro’s **Content Collections**. This folder contains the `.md` files for the updates on the website
* **`data/`** & `utils/`: Miscellaneous functions
* **`layouts/`**: Reusable Astro Layouts
* **`pages/`**: This folder contains all the pages on the website, URLs are built from file-based routing
* **`styles/`**: Contains `global.css` with a TailwindCSS import and variables used throughout the project


### Notable Configuration Files

* **`settings.json`**
This configuration file is used to edit the links available at `mctr.club/links`


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


## Credits
This website was built using code from the following projects
- https://github.com/PavelDoGreat/WebGL-Fluid-Simulation 
- https://github.com/AnjayGoel/astro-sienna
- https://github.com/jomorespi/manduca
- https://github.com/dodolalorc/astro-navfolio
- https://github.com/cbetz/pulsar-lite
- https://github.com/fauziralpiandi/astrogent
