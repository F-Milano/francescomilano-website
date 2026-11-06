"use strict";

const projectList = document.querySelector("#projects");
const preview = document.querySelector(".preview");
const previewImage = document.querySelector("#preview-image");
let activeButton = null;

function hidePreview() {
  activeButton?.classList.remove("is-active");
  activeButton = null;
  preview.classList.remove("is-visible");
}

function showPreview(button, project) {
  hidePreview();
  activeButton = button;
  button.classList.add("is-active");
  previewImage.src = project.previewImage;
  preview.classList.add("is-visible");
}

window.portfolioProjects.forEach((project, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "project";
  button.dataset.project = project.id;
  const title = document.createElement("span");
  title.className = "project-title";
  title.textContent = project.title;
  const subtitle = document.createElement("span");
  subtitle.className = "project-subtitle";
  subtitle.textContent = `_${project.subtitle}`;
  button.append(title, subtitle);

  button.addEventListener("pointerenter", (event) => {
    if (event.pointerType !== "touch") showPreview(button, project);
  });
  button.addEventListener("pointerleave", (event) => {
    if (event.pointerType !== "touch" && activeButton === button) hidePreview();
  });
  button.addEventListener("focus", () => showPreview(button, project));
  button.addEventListener("blur", () => {
    if (activeButton === button) hidePreview();
  });
  // Until project pages exist, activation displays the preview without a dead link.
  button.addEventListener("click", () => showPreview(button, project));
  projectList.append(button);
  if (index < window.portfolioProjects.length - 1) projectList.append("  ");

  const image = new Image();
  image.src = project.previewImage;
});

previewImage.addEventListener("error", hidePreview);
document.addEventListener("pointerdown", (event) => {
  if (!event.target.closest(".project")) hidePreview();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hidePreview();
});
