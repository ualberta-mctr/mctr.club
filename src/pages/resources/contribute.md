---
layout: ../../layouts/TextLayout.astro
title: "Website Administration"
description: "A guide on how the website is structured"
publishDate: "2026-06-23"
author: 'Gabriel Baltazart'
authorRole: 'Webmaster'
tags: ['admin', 'housekeeping']
---

The purpose of the article is to proivide any interested contributors as well as any future maintainers of the mechatronics website a guide on how the website is structured. 

## General
Don't include HEIC assets on the website, convert to a more widely supported like `.png` or `.jpg` first

## Updates
Updates live as .md files in src/content/updates/, manage by Astro Content Collections. To keep images and articles as organized bundles, each update has the following file structure in the project directory
```
src/
└── content/
    └── updates/
        └── sampleUpdate/
           ├── image.png
           └── index.md
```
In the example above, this would create a new update at the url `mctr.club/updates/sampleUpdate`. It is important to name the article `index.md` to maintain a clean file path. Naming the file something like `sampleUpdate.md` will result in a url that looks like `mctr.club/updates/sampleupdate/sampleupdate`.



```yaml
---
title: "String"
description: "String"
publishDate: "2026-06-23"
updateDate: "YYYY-MM-DD" # Optional
author: "String"
tags: ['string', 'string']
---
```
All markdown files in the Updates section must have the metadata listed above in the `.md` frontmatter for the website to compile succesfully 

## About
The main file for the about page is located at `/src/pages/about/index.astro`. On this page it is possible to add or remove `<TeamGrid />` elements to depending on needs. The `<TeamGrid />` tag requires that a json file be passed using the folloing syntax `<TeamGrid members={const}/>`. 