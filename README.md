# Francesco Milano — portfolio

A minimal, buildless portfolio made with plain HTML, CSS, and JavaScript.

## Preview locally

Open `index.html` directly in your browser. No install or build is required.
Alternatively, if Python is installed, run `python -m http.server 8000` from
this repository and open http://localhost:8000. Stop the server with Ctrl+C.

## Files

- `index.html`: page structure, heading, project navigation, and preview layer.
- `styles.css`: responsive typography, bottom-aligned list, and centered preview.
- `projects.js`: five placeholder records with title, subtitle, local preview
  image path, and a content reference reserved for a future project page.
- `script.js`: renders the list and manages hover, keyboard, and touch previews.
- `assets/previews/`: five original abstract SVG placeholder illustrations.

Hover over either part of a project to reveal its preview and bold its title.
Tab focus also reveals previews. Click or tap a project to open its project page.
Escape dismisses any homepage preview.
Only one image appears at a time, behind the text as in the supplied reference.

## Project pages

`project.html` is a shared white page template; `project.js` renders the project
selected by its URL, for example `./project.html?project=livmats`.
The fixed X in the upper-right corner returns to `index.html`. Its top and right
margins match the homepage heading margins. Browser Back also works normally.

Each project has `credits` (label/value pairs) and ordered `blocks` in
`projects.js`. The current starter content is assigned near the bottom of that
file; replace it with each project's real content as it becomes available.
Supported blocks:

```js
{ type: "image", src: "./assets/photo.jpg", alt: "Description", caption: "Optional caption" }
{ type: "text", text: "A paragraph about the project." }
{ type: "imageRow", images: [
  { src: "./assets/detail-1.jpg", alt: "First detail" },
  { src: "./assets/detail-2.jpg", alt: "Second detail" }
] }
```

Image rows support two to five images on desktop and wrap into two columns on
mobile (one on very narrow screens). All five pages currently contain clearly
marked placeholder credits, images, and text, with example rows of varying sizes.

All assets use relative paths, compatible with a GitHub Pages repository site.
To publish there later, configure Pages to serve the repository root.
