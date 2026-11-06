"use strict";

const content = document.querySelector("#project-content");

function makeImageFigure(image, eager = false) {
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = image.src;
  img.alt = image.alt || "";
  img.loading = eager ? "eager" : "lazy";
  figure.append(img);
  if (image.caption) {
    const caption = document.createElement("figcaption");
    caption.textContent = image.caption;
    figure.append(caption);
  }
  return figure;
}

window.portfolioProjectsReady.then((projects) => {
const projectId = new URLSearchParams(window.location.search).get("project");
const project = projects.find((item) => item.id === projectId);
if (!project) {
  document.querySelector("#project-title").textContent = "Project not found";
  document.querySelector("#project-subtitle").textContent = "Use the close button to return to the homepage.";
} else {
  document.title = `${project.title} — Francesco Milano`;
  document.querySelector("#project-title").textContent = project.title;
  document.querySelector("#project-subtitle").textContent = project.subtitle;
  const credits = document.querySelector("#project-credits");
  project.credits.forEach((credit) => {
    const label = document.createElement("dt");
    const value = document.createElement("dd");
    label.textContent = credit.label;
    value.textContent = credit.value;
    credits.append(label, value);
  });
  project.blocks.forEach((block, index) => {
    let element;
    if (block.type === "image") {
      element = makeImageFigure(block, index === 0);
    } else if (block.type === "imageRow") {
      element = document.createElement("div");
      element.className = "image-row";
      element.style.setProperty("--columns", Math.min(5, Math.max(2, block.images.length)));
      block.images.forEach((image) => element.append(makeImageFigure(image)));
    } else if (block.type === "text") {
      element = document.createElement("p");
      element.className = "text-block";
      element.textContent = block.text;
    } else {
      return;
    }
    element.classList.add("content-block");
    content.append(element);
  });
}
}).catch((error) => {
  document.querySelector("#project-title").textContent = "Project could not be loaded";
  document.querySelector("#project-subtitle").textContent = "Please refresh or use the close button to return to the homepage.";
  console.error(error);
});
