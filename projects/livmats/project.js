// All image paths are relative to this project folder.
window.projectData = window.projectData || {};
window.projectData["livmats"] = {
  title: "LivMatS",
  subtitle: "ITECH Pavilion 2020–21",
  previewImage: "icon.webp",
  credits: [
    { label: "Credits", value: "ITECH 2020,  ICD, ITKE" }
  ],
  blocks: [
    {
      type: "video",
      src: "https://player.vimeo.com/video/576404217?title=0&byline=0&portrait=0",
      title: "livMatS Pavilion — project film"
    },
    {
      type: "text",
      text: "Located in the Botanical Garden of the University of Freiburg, the livMatS Pavilion offers a viable, resource-efficient alternative to conventional construction methods and therefore represents an important step towards sustainability in architecture. It constitutes the first building ever with a load-bearing structure that is entirely made of robotically wound flax fibre, a material that is fully naturally renewable, biodegradable, and regionally available in Central Europe. Enabled by a novel combination of natural materials and advanced digital technologies, this pavilion stems from the successful collaboration of an interdisciplinary team of architects and engineers of the ITECH master`s program at the Cluster of Excellence “Integrative Computational Design and Construction for Architecture (IntCDC)” at the University of Stuttgart and biologists from the Cluster of Excellence “Living, Adaptive and Energy-autonomous Material Systems (livMatS)” at the University of Freiburg. The bioinspired pavilion showcases how novel co-design processes that account concurrently for geometrical, material, structural, productional, environmental, and aesthetic requirements, together with advanced robotic fabrication techniques applied to natural materials, are capable to generate a unique architecture that is at the same time ecological and expressive. The distinctive, intricate surface appearance of the structural flax elements is evocative of both vernacular examples of latticework and biological systems. The livMatS Pavilion serves as an outdoor lecture room at the University of Freiburg, which uses the Botanic Garden within the concept of “Learning from nature in Nature” as a research and teaching site."
    },
    {
      type: "imageRow",
      columns: 3,
      images: Array.from({ length: 18 }, (_, index) => ({
        src: `images/${index + 1}.webp`,
        alt: `livMatS Pavilion — project photograph ${index + 1}`
      }))
    }
  ]
};
