// All image paths are relative to this project folder.
window.projectData = window.projectData || {};
window.projectData["hyphae"] = {
  title: "Hyphae Growth",
  subtitle: "Agent Based System + SLS 3D Printing",
  previewImage: "icon.webp",
  credits: [
    { label: "Credits", value: "Karen Antorveza, Mengdi Zha, ITECH, ICD" }
  ],
  blocks: [
    {
      type: "text",
      text: "The mycelium is the vegetative part of fungi, which consists of a network of interconnected filamentous cells called hyphae. The logic followed by this structure while growing can be outlined in a defined set of rules: it is concentric, it is directional, it branches progressively, it is space-filling, etc.. We simulated this conduct computationally through an agent-based algorithm, where a certain amount of particles iteratively move away from a central point, wanders in space, and reproduce following precise behavioural instructions. Volumetric propertiey was given to the trajectory of each particle using a voxelization algorithm. The wire frame system was turned into a thee dimensional object, which was finally materialized through SLS 3D printing."
    },
    { type: "image", src: "images/1.jpg", alt: "Hyphae Growth — project image 1" },
    { type: "image", src: "images/2.jpg", alt: "Hyphae Growth — project image 2" },
    { type: "image", src: "images/3.jpg", alt: "Hyphae Growth — project image 3" },
    { type: "image", src: "images/4.jpg", alt: "Hyphae Growth — project image 4" }
  ]
};
