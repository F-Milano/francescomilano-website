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
Tab focus also reveals previews. On touch devices, tap a project to preview it;
tap outside the list to dismiss. Escape dismisses any preview.
Only one image appears at a time, behind the text as in the supplied reference.

Project buttons currently display previews. Full project pages and navigation
are intentionally deferred. When pages are added, use each record's
`contentReference` as its link destination.

All assets use relative paths, compatible with a GitHub Pages repository site.
To publish there later, configure Pages to serve the repository root.
