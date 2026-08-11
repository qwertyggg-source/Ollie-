# Editing this website in VS Code

This is a plain static website. There is no React, Node.js, npm, build system, database, or CMS required.

## Open it

1. Extract the ZIP.
2. Open the extracted `isaac-oloche-johnson-artist-website` folder in VS Code.
3. Open `index.html`.
4. For the easiest preview, install the recommended **Live Server** extension.
5. Right-click `index.html` → **Open with Live Server**.

## Main files

- `index.html` — homepage / selected works
- `projects.html` — project index
- `fluid-earth.html` — Fluid Earth project
- `dreaming-new-worlds.html` — Dreaming New Worlds / Totem project
- `travellers-archive.html` — Traveller’s Archive project
- `exhibitions.html` — exhibitions
- `publications.html` — publications / press
- `about.html` — biography and CV
- `contact.html` — contact page
- `assets/css/site.css` — all website styling
- `assets/js/site.js` — interactions and animations
- `assets/images/` — local artwork and documentation images
- `assets/docs/` — project PDF
- `.vscode/` — optional VS Code settings

## Editing content

All content is directly editable in the HTML files. Search for the artwork title, paragraph or section you want to change and edit the text directly.

## Adding an artwork

1. Put the image inside `assets/images/`.
2. Open `index.html`.
3. Copy an existing `<article class="work-card ...">...</article>` block.
4. Change the image filename, title, year/medium and link.
5. If the artwork has a dedicated project page, link it instead of using `#`.

## Changing the design

Nearly all visual styling is in:

`assets/css/site.css`

You can change typography, spacing, layout, image ratios, borders, hover effects and responsive behaviour there.

## Important

Keep image filenames and paths accurate. The site intentionally uses local assets so it can run offline and remain portable.

Do not add third-party archival images to the public site unless their reproduction rights have been established.
