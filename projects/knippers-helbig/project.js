// All image paths are relative to this project folder.
window.projectData = window.projectData || {};
window.projectData["knippers-helbig"] = {
  title: "Knippers Helbig",
  subtitle: "Computational Design",
  previewImage: "icon.webp",
  credits: [
    { label: "Credits", value: "Knippers Helbig" }
  ],
  blocks: [
    {
      type: "text",
      text: [
        { strong: "UDARNIK CINEMA" },
        " - Development of a concept for the movable shading system of the cinema, which allow the space underneeth the glazing to become completely obscure. Production of a full parametric model, able to display the coreographic movement."
      ]
    },
    { type: "image", src: "images/1.1.webp", alt: "Knippers Helbig — project image 1.1" },
    { type: "image", src: "images/1.2.webp", alt: "Knippers Helbig — project image 1.2" },
    
    {
      type: "imageRow",
      columns: 2,
      images: [
        { src: "images/1.3.webp", alt: "Knippers Helbig — project image 1.3" },
        { src: "images/1.4.webp", alt: "Knippers Helbig — project image 1.4" }
      ]
    },
    {
      type: "text",
      spaceBefore: true,
      text: [
        { strong: "SAP ATRIUM GRIDSHELL" },
        " - Production of a 3D model using Rhino and Grasshopper. Transfer of the 3D information to Revit using “Rhino inside Revit”. The workflow is structured in such a way that the Revit model contains not only geometric information, but also the metadata corresponding to each architectural component family (different beams, glass panels)."
      ]
    },
    { type: "image", src: "images/2.3.webp", alt: "Knippers Helbig — SAP Atrium Gridshell image 2.3" },
    { type: "image", src: "images/2.2.webp", alt: "Knippers Helbig — SAP Atrium Gridshell image 2.2" },
    { type: "image", src: "images/2.1.webp", alt: "Knippers Helbig — SAP Atrium Gridshell image 2.1", spaceBefore: true }
  ]
};
