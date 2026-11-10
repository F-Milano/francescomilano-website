"use strict";

// Folder names in homepage display order. Add new project folders here.
window.projectFolders = ["rbs-recycled-pc-shell", "3dp-curtain-wall", "supernatural-collection", "efficient-hybrid-structure","livmats", "geometry-of-structural-form", "cobogo", "hyphae", "la-muela", "buga-fibre-pavillion", "tamaco", "furetsu", "dahlia", "cerimonias", "mesas-luminicas", "rotoscoping-architecture", "cnc-furniture", "tautwood", "modulos-efimeros-de-residencia", "palabras-para-una-tormenta", "tectonica-digital"];
window.projectData = {};

// Classic scripts also work when opening index.html directly from disk.
window.portfolioProjectsReady = Promise.all(window.projectFolders.map((id) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `./projects/${id}/project.js`;
    script.onload = () => {
      const data = window.projectData[id];
      if (!data) {
        reject(new Error(`Missing project data for ${id}`));
        return;
      }
      const base = new URL(`./projects/${id}/`, document.baseURI);
      const asset = (path) => new URL(path, base).href;
      resolve({
        ...data,
        id,
        contentReference: `./project.html?project=${encodeURIComponent(id)}`,
        previewImage: asset(data.previewImage),
        blocks: data.blocks.map((block) => {
          if (block.type === "image") return { ...block, src: asset(block.src) };
          if (block.type === "imageRow") {
            return { ...block, images: block.images.map((image) => ({ ...image, src: asset(image.src) })) };
          }
          return block;
        })
      });
    };
    script.onerror = () => reject(new Error(`Could not load project: ${id}`));
    document.head.append(script);
  });
})).then((projects) => {
  window.portfolioProjects = projects;
  return projects;
});
