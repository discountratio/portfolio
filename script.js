import  projects from  './projects.js';

/* <div class="project-card">
<div class="project-card-top">
  <div class="project-icon">
    <i class="fas fa-utensils"></i>
  </div>

  <div class="project-links">
    <a href="" class="project-link">
      <i class="fab fa-github"></i>
    </a>

    <a href="" class="project-link">
      <i class="fas fa-external-link-alt"></i>
    </a>
  </div>
</div>

<h3 class="project-title">Project Title Here</h3>

<p class="project-description">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  Quibusdam, sapiente. lorem20
</p>

<div class="project-icons">
  <i class="project-icon fab fa-html5"></i>
  <i class="project-icon fab fa-css3"></i>
  <i class="project-icon fab fa-js-square"></i>
  <i class="project-icon fab fa-react"></i>
</div> */


const projectsContainer = document.querySelector('.project-container');



const renderProjects = () => {
    projects.forEach((project) => {
        const { id, title, bigIcon, description, icons, link, image } = project;
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
    
        projectCard.innerHTML = `
        <div class="project-card-top">
        <div class="project-icon">
            <i class="fas fa-${bigIcon}"></i>
        </div>
    
        <div class="project-links">
            <a href="${link}" class="project-link">
            <i class="fab fa-github"></i>
            </a>
    
            <a href="${link}" class="project-link">
            <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
        </div>
    
        <h3 class="project-title">${title}</h3>
    
        <p class="project-description">
        ${description}
        </p>
    
        <div class="project-icons">
        ${icons.map((icon) => {
            return `<i class="project-icon fab fa-${icon}"></i>`;
        })
        .join('')}
        </div>
        `;
    
        projectsContainer.appendChild(projectCard);
    });
    };

renderProjects();
