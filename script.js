import projects from "./projects.js";

import skills from "./skills.js";

const projectsContainer = document.querySelector(".project-container");
const skillsList = document.querySelector("#skills-list");

const renderProjects = () => {
  projects.forEach((project) => {
    const { id, title, bigIcon, description, icons, link, preview } = project;
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    projectCard.innerHTML = `
        <div class="project-card-top">
        <div class="project-icon">
            <i class=" ${bigIcon} "></i>
        </div>
    
        <div class="project-links">
            <a href="${link}" class="project-link" target="_blank">
            <i class="fab fa-git"></i>
            </a>
    
            <a href="${preview}" class="project-link" target="_blank">
            <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
        </div>
    
        <h3 class="project-title">${title}</h3>
    
        <p class="project-description">
        ${description}
        </p>
    
        <div class="project-icons">
        ${icons
          .map((icon) => {
            return `<i class="project-icon ${icon}"></i>`;
          })
          .join("")}
        </div>
        `;

    projectsContainer.appendChild(projectCard);
  });
};

function renderSkills() {
  skills.forEach((skill) => {
    const { id, title, icon } = skill;
    const skillItem = document.createElement("li");
    skillItem.classList.add("list-item", "skill-list-item");

    skillItem.innerHTML = `
                <span class='skill-list-title'> ${title} 
                <i class='${icon} list-icon'></i>
                </span>
            `;

    skillsList.appendChild(skillItem);
    console.log(skillItem);
  });
}

renderSkills();
renderProjects();
