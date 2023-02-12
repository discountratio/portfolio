
const projects = [
  {
    id: 1,
    title: "User Profile for a Language Learning Application",
    bigIcon: " fa-solid fa-language",
    description:
      "  Fully responsive landing page for a user profile on a language learning website that fetches country data from a REST API for basic stats and language information. Features dynamically created elements from a JSON file and uses custom components.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "REST API",
      "JSON",
      "Vite",
      "Chakra UI",
    ],
    image: "/assets/language-project.jpg",
    link: "https://github.com/discountratio/userprofile",
    preview:
      "https://htmlpreview.github.io/?https://github.com/discountratio/userprofile/blob/main/dist/index.html",
  },

  {
    id: 2,
    title: "Digital Artist Portfolio and Shop",
    bigIcon: " fa-solid fa-brush",
    description:
      " Portfolio and shop for an artist with a gallery of AI-generated assets and custom JavaScript functions to create and populate the dynamic gallery. Features a shopping cart that uses local storage to store user shopping data and background moving gradient UI achieved via CSS animation.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "REST API",
      "JSON",
    ],
    image: "/assets/penelope.jpg",
    link: "https://github.com/discountratio/rabbit-website",
    preview:
      "https://rabbitsforsale.netlify.app/",
  },
];
const skills = [
  {
    id: 1,
    title: "HTML",
    icon: "fab fa-html5",
  },
  {
    id: 2,
    title: "CSS",
    icon: "fab fa-css3-alt",
  },
  {
    id: 3,
    title: "JavaScript",
    icon: "fab fa-js-square",
  },
  {
    id: 4,
    title: "React",
    icon: "fab fa-react",
  },
  {
    id: 5,
    title: "Node",
    icon: "fab fa-node-js",
  },
  {
    id: 6,
    title: "PostgreSQL",
    icon: "fas fa-database",
  },
  {
    id: 7,
    title: "Git",
    icon: "fab fa-git-alt",
  },
  {
    id: 8,
    title: "GitHub",
    icon: "fab fa-github",
  },
  {
    id: 9,
    title: "codepen",
    icon: "fab fa-codepen",
  },
  {
    id: 10,
    title: "npm",
    icon: "fab fa-npm",
  },
];

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
