// Illustrative project data. Replace the images and copy with your own work.
// Each project opens the shared template with its own project ID.
window.portfolioProjects = [
  { id: "livmats", title: "LivMatS", subtitle: "ITECH Pavilion 2020–21", previewImage: "./assets/previews/livmats.svg", contentReference: "./project.html?project=livmats" },
  { id: "cobogo", title: "Cobogò", subtitle: "Behavioural Robotic Fabrication", previewImage: "./assets/previews/cobogo.svg", contentReference: "./project.html?project=cobogo" },
  { id: "hyphae", title: "Hyphae Growth", subtitle: "Agent Based System + SLS 3D Printing", previewImage: "./assets/previews/hyphae.svg", contentReference: "./project.html?project=hyphae" },
  { id: "la-muela", title: "La Muela", subtitle: "Mycelium Composite Stool", previewImage: "./assets/previews/la-muela.svg", contentReference: "./project.html?project=la-muela" },
  { id: "tautwood", title: "Tautwood", subtitle: "Bending Active Research", previewImage: "./assets/previews/tautwood.svg", contentReference: "./project.html?project=tautwood" }
];

// Starter content only: replace these credits and blocks with real project content.
// Blocks are rendered in order and can be freely added, removed, or rearranged.
window.portfolioProjects.forEach((project, index, projects) => {
  project.credits = [
    { label: "Credits", value: "Project team and collaborators — to be added" },
    { label: "Images", value: "Placeholder illustrations — replace with project photography" }
  ];
  project.blocks = [
    {
      type: "image",
      src: project.previewImage,
      alt: `${project.title} — abstract placeholder illustration`,
      caption: "Placeholder for the main project image."
    },
    {
      type: "text",
      text: "Project description to be added. This space can introduce the concept, context, and approach. Replace this placeholder with your project story."
    },
    {
      type: "imageRow",
      images: Array.from({ length: 2 + (index % 4) }, (_, imageIndex) => ({
        src: projects[(index + imageIndex) % projects.length].previewImage,
        alt: `Placeholder illustration for project detail ${imageIndex + 1}`,
        caption: `Detail ${imageIndex + 1} — placeholder`
      }))
    },
    {
      type: "text",
      text: "Additional project text to be added. Insert more image, imageRow, or text blocks to create the sequence this project needs."
    }
  ];
});
