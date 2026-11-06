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

window.portfolioProjectsReady.then((projects) => {
projects.forEach((project, index) => {
  const button = document.createElement("a");
  button.href = project.contentReference;
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
  projectList.append(button);
  if (index < projects.length - 1) projectList.append(" ");

  const image = new Image();
  image.src = project.previewImage;
});
}).catch((error) => {
  projectList.textContent = "Projects could not be loaded. Please refresh to try again.";
  console.error(error);
});

previewImage.addEventListener("error", hidePreview);
document.addEventListener("pointerdown", (event) => {
  if (!event.target.closest(".project")) hidePreview();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hidePreview();
});
