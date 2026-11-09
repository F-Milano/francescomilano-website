// All image paths are relative to this project folder.
window.projectData = window.projectData || {};
window.projectData["geometry-of-structural-form"] = {
  title: "Geometry of Structural Form",
  subtitle: "Efficient Truss with Graphic Statics",
  previewImage: "icon.webp",
  credits: [
    { label: "Credits", value: "Lorenz Lachauer, Toni Kotnik, ETH Zurich" }
  ],
  blocks: [
    { type: "image", src: "images/gif_1.gif", alt: "Geometry of Structural Form — animated structural model" },
    {
      type: "text",
      text: [
        "Following the method described in ",
        { emphasis: "“Lachauer L. and Kotnik T., Geometry of Structural Form, Advances of Architectural Geometry 2010, Vienna, Austria, 2010, pp.193-203”" },
        ", we developped a computational tool for the inscription of structural constraints into architectural form. From the abstract of the article: ",
        { emphasis: "“Based on techniques from graphic statics, the force distribution in building structures is visualized using geometric diagrams. This diagrammatic representation allows a formal description that shows the relationship between the force flow and the structural form. The formal character of this description enables the direct implementation of a parametric truss geometry that maintains major structural behavioral characteristics under deformation. An interactive model of a structural freeform roof is developed through this link between a parametric truss definition and a design-driving NURBS surface. This allows for an intuitive exploration of the constrained design space in real time. Formal explorations and the comparison with built examples demonstrate the effectiveness of this approach.”" }
      ]
    }
  ]
};
