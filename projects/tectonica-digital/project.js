// All image paths are relative to this project folder.
window.projectData = window.projectData || {};
window.projectData["tectonica-digital"] = {
  title: "Tectonica Digital",
  subtitle: "Triangular Mesh Beam Layout",
  previewImage: "icon.webp",
  credits: [
    {
      label: "Credits",
      value: [
        { text: "Arturo De La Fuente", href: "https://www.arturodelafuente.com/" },
        ", Karen Antorveza, TaMaCo, CheLA."
      ]
    }
  ],
  blocks: [
    { type: "image", src: "images/1.png", alt: "Tectonica Digital — project image 1" },
    {
      type: "text",
      text: "“Tectonica Digital” is a practical investigation aimed to solve, through parametric design and digital fabrication, the construction of geometrically complex reticular structures. The central core of the experience was the production of an algorithm, which could generate automatically the CNC cut file of the pieces necessary to make the beam to beam connection for a given surface. The Grasshopper definition which was developed receive as an input a 3D mesh, and automatically transform it in the 3D model of a set of beams, linked one each other through custom-joints. Beams and joints are conceived to be fabricated respectively with timber, and laser cut metal sheet. One of the most significant problem that the project managed to deal with, was the production of torsion-free nodes. This result was achieved through correcting the beams torsion with a planarize tool in Kangaroo Physics."
    },
    {
      type: "imageRow",
      columns: 2,
      images: [
        { src: "images/2.gif", alt: "Tectonica Digital — project animation 2" },
        { src: "images/3.png", alt: "Tectonica Digital — project image 3" }
      ]
    },
    {
      type: "imageRow",
      columns: 3,
      images: [
        { src: "images/4.jpg", alt: "Tectonica Digital — project image 4" },
        { src: "images/5.jpg", alt: "Tectonica Digital — project image 5" },
        { src: "images/6.jpg", alt: "Tectonica Digital — project image 6" },
        { src: "images/7.jpg", alt: "Tectonica Digital — project image 7" },
        { src: "images/8t.gif", alt: "Tectonica Digital — project animation 8t" },
        { src: "images/9.jpg", alt: "Tectonica Digital — project image 9" },
        { src: "images/10.jpg", alt: "Tectonica Digital — project image 10" },
        { src: "images/8.jpg", alt: "Tectonica Digital — project image 8" },
        { src: "images/16.jpg", alt: "Tectonica Digital — project image 16" },
        { src: "images/14.jpg", alt: "Tectonica Digital — project image 14" },
        { src: "images/11.jpg", alt: "Tectonica Digital — project image 11" },
        { src: "images/13.jpg", alt: "Tectonica Digital — project image 13" }
      ]
    }
  ]
};
