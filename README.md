# Francesco Milano — portfolio

A buildless portfolio using plain HTML, CSS, and JavaScript.

## Preview

Open `index.html` directly in your browser, or use VS Code Live Server.
No installation or build is required. All paths work on GitHub Pages.

## Folder structure

```text
projects/
  livmats/
    icon.svg            # Homepage hover preview (replace with your image)
    images/
      01.svg            # Project page images
      02.svg
    project.js          # This project's title, subtitle, credits, and blocks
  cobogo/
  hyphae/
  la-muela/
  tautwood/
projects.js             # Project folder list, display order, and data loader
project.html            # Shared project page template
project-page.js         # Shared renderer; normally no need to edit
index.html              # Homepage
script.js               # Homepage list and hover interactions
about.html              # Biography and contact details
styles.css              # Shared responsive styles
```

Each project's images and data are independent. Existing SVG files are clearly
marked placeholders; JPG, PNG, WebP, and SVG images can all be used.

## Add a project

1. Copy an existing project folder to `projects/your-project/`.
2. Replace `icon.svg` with your homepage preview, for example `icon.webp`.
3. Put page images in that folder's `images/` directory.
4. Edit its `project.js`: change the registration key to `your-project`, update
   the title, subtitle, preview filename, credits, and content blocks.
5. Add `"your-project"` to `window.projectFolders` in the root `projects.js`.
   Its position in this array determines its homepage position.

The registration key must match the folder name. Use lowercase folder names
with hyphens and no spaces. Project links are generated automatically, for
example `./project.html?project=your-project`.

A complete project data example:

```js
window.projectData = window.projectData || {};
window.projectData["your-project"] = {
  title: "Project title",
  subtitle: "Project subtitle",
  previewImage: "icon.webp",
  credits: [
    { label: "Design", value: "Names of collaborators" },
    { label: "Photography", value: "Photographer's name" }
  ],
  blocks: [
    { type: "image", src: "images/01.webp", alt: "Main project view" },
    { type: "text", text: "Your project description." },
    {
      type: "imageRow",
      images: [
        { src: "images/02.webp", alt: "First detail", caption: "Optional caption" },
        { src: "images/03.webp", alt: "Second detail" }
      ]
    }
  ]
};
```

Image paths are relative to the individual project folder, not the repository
root. Blocks appear in the order listed. Add, remove, or rearrange them freely.
Use `image` for a large image, `text` for a paragraph, or `imageRow` for two to
five images. Rows wrap to two columns on mobile and one on very narrow screens.
Captions are optional. Give each meaningful image a descriptive `alt` value.

## Navigation and interactions

Hover or focus a homepage project to reveal its preview. The title thickens
without shifting the surrounding text. Click or tap to open the project page.
The fixed X returns to the homepage; browser Back works normally.

Click the homepage name to open the biography. Edit its text in `about.html`.
Its black name and red text match the homepage heading typography.

## GitHub Pages

Configure GitHub Pages to serve this repository's root. No build step is needed.
