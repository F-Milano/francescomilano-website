// All image paths are relative to this project folder.
window.projectData = window.projectData || {};
window.projectData["rotoscoping-architecture"] = {
  title: "Rotoscoping Architecture",
  subtitle: "An Animation Tecnique Applyed to Construction",
  previewImage: "icon.webp",
  credits: [
    { label: "Credits", value: "Karen Antorveza, Rodrigo Martin Iglesias, TaMaCo, cheLA, UBA" }
  ],
  blocks: [
    {
      type: "text",
      text: [
        "“Rotoscoping Architecture” was developed within the framework of an academic research project, lead by ", { text: "TaMaCo", href: "https://francescomilano.cargo.site/TaMaCo" }, " and UBA (Universidad de Buenos Aires) collaboratively. The idea at the base consist of exploring smart low-tech ways to produce complex architectonic morphologies, designed with a 3D modelling software. The concept is particularly interesting in a context like Latin America, where high tech fabrication facilities such as robotic arms are not easily available. The proposed solution take inspirtion from the rotoscoping, an animation technique which consist of tracing over motion picture footage, frame by frame, to produce realistic action. In our workflow, a digital volume is first reduced to a series of parallel sections, which are than exported as PDF files. Next, one by one the PDF are projected on the floor by a beamerzenithally placed. The projection is used as a template for the construction of a frame composed by 1” x 1” timber elements. The frames all together, arranged in numerical order, re-create physically the original, digital volume."
      ]
    },
    
    { type: "image", src: "images/1.jpg", alt: "Rotoscoping Architecture — project image 1" },
    {
      type: "imageRow",
      columns: 2,
      images: [
        { src: "images/10.jpg", alt: "Rotoscoping Architecture — project image 10" },
        { src: "images/11.jpg", alt: "Rotoscoping Architecture — project image 11" }
      ]
    },
    { type: "image", src: "images/d1.jpg", alt: "Rotoscoping Architecture — project drawing d1" },
    { type: "image", src: "images/d3.jpg", alt: "Rotoscoping Architecture — project drawing d3" },
    { type: "image", src: "images/d4.jpg", alt: "Rotoscoping Architecture — project drawing d4" },
    { type: "image", src: "images/d2.jpg", alt: "Rotoscoping Architecture — project drawing d2" },
    {
      type: "imageRow",
      columns: 4,
      images: [
        { src: "images/2.jpg", alt: "Rotoscoping Architecture — project image 2" },
        { src: "images/3.jpg", alt: "Rotoscoping Architecture — project image 3" },
        { src: "images/4.jpg", alt: "Rotoscoping Architecture — project image 4" },
        { src: "images/5.jpg", alt: "Rotoscoping Architecture — project image 5" },
        { src: "images/6.jpg", alt: "Rotoscoping Architecture — project image 6" },
        { src: "images/7.jpg", alt: "Rotoscoping Architecture — project image 7" },
        { src: "images/8.jpg", alt: "Rotoscoping Architecture — project image 8" },
        { src: "images/9.jpg", alt: "Rotoscoping Architecture — project image 9" }
      ]
    }
  ]
};
