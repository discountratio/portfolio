import projects from "./projects.js";

import skills from "./skills.js";

const skillsList = document.querySelector("#skills-list");

const renderProjects = () => {
const projectsContainer = document.querySelector("#projects-container");

  projects.forEach((project) => {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");
    projectContainer.innerHTML = 
    `
    <div class="project-image-container">
    <img class="project-image" src=${project.image} alt="screenshot of ${project.name}" />
  </div>
    <div class="project-information">

    

      <h3 class="project-title">${project.title}</h3>
      <div class="project-text-block">
        <p>
          ${project.description}
        </p>
      </div>
      <div class="project-bottom">
        <ul class="project-library-list">
          ${project.tech.map((tech) => `<li class="project-list-item">${tech}</li>`).join("")}
        </ul>

        <div class="project-links">
          <a href="${project.link}" class="project-link"><i class="fab fa-github"></i></a>
          <a href="${project.preview}" class="project-link"><i class="fas fa-window-restore"></i></a>
        </div>
        
      </div>
    </div>
  
    `
    projectsContainer.appendChild(projectContainer);
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
