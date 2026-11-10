// All image paths are relative to this project folder.
window.projectData = window.projectData || {};
window.projectData["knippers-helbig"] = {
  title: "Knippers Helbig",
  subtitle: "Computational Design",
  previewImage: "icon.svg",
  credits: [
    { label: "Credits", value: "Knippers Helbig" }
  ],
  blocks: [
    { type: "image", src: "images/1.webp", alt: "Knippers Helbig — project image 1" },
    { type: "image", src: "images/2.webp", alt: "Knippers Helbig — project image 2" },
    {
      type: "imageRow",
      columns: 2,
      images: [
        { src: "images/3.webp", alt: "Knippers Helbig — project image 3" },
        { src: "images/4.webp", alt: "Knippers Helbig — project image 4" }
      ]
    }
  ]
};
