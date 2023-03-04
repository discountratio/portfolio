const smallProjects = [
  {
    id: 1,
    title: "Kanban Board",
    description: `Add, edit, and delete tasks. Drag and drop tasks between columns. Built with React, Chakra UI, and Vite.`,
    tech: ["React", "Vite", "Chakra UI"],
    image: "./assets/kanban-preview.png",
    link: "https://github.com/kev-nr-ley/kanbanboard",
    preview: "https://app.netlify.com/sites/kevin-kanban",
  },
  {
    id: 2,
    title: "Calculator",
    description: `A simple calculator built with HTML, CSS, and JavaScript.`,
    tech: ["HTML", "SCSS", "JavaScript"],
    image: "./assets/calculator-preview.png",
    link: "https://github.com/kev-nr-ley/calculator",
    preview:
      "https://htmlpreview.github.io/?https://github.com/kev-nr-ley/calculator/blob/main/calculator.html",
  },
];

const projects = [
  {
    id: 4,
    title: "Restaurant Redesign",
    bigIcon: " fa-solid fa-fork-and-knife",
    description:
      "Worked with a UI/UX designer to responsively impleement their website redesign. Reduced loading times by 50% with image optimization and reducing HTTP requests. ",

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
    image: "./assets/nongbu.png",
    link: "https://github.com/kev-nr-ley/nongbuWebsite",
    preview: "https://penelopepark.netlify.app/",
  },
  {
    id: 1,
    title: "Digital Artist Portfolio and Shop",
    bigIcon: " fa-solid fa-brush",
    description:
      " Portfolio and shop for an artist with a gallery of AI-generated assets and custom JavaScript functions to create and populate the dynamic gallery. Features a shopping cart that uses local storage to store user shopping data and background moving gradient UI achieved via CSS animation.",
    tech: ["HTML", "SCSS", "JavaScript", "JSON"],
    image: "./assets/penelopeparkpreview.png",
    link: "https://github.com/discountratio/rabbit-website",
    preview: "https://penelopepark.netlify.app/",
  },
  {
    id: 2,
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
    image: "./assets/userprofilepreview.png",
    link: "https://github.com/discountratio/userprofile",
    preview:
      "https://htmlpreview.github.io/?https://github.com/discountratio/userprofile/blob/main/dist/index.html",
  },
  {
    id: 3,
    title: "Personal Portfolio Project",
    bigIcon: " fa-solid fa-user",
    description:
      "You’re on my portfolio site! A personal portfolio project for a web developer that features a responsive design and custom JavaScript functions to create a dynamic gallery of projects and dynamic skills list. Check out the GitHub link.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "./assets/kevinpreview.png",
    link: "/index.html",
    preview: "https://kevinriley.netlify.app",
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

const renderProjects = () => {
  const projectsContainer = document.querySelector("#projects-container");
  projects.forEach((project) => {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project");
    projectContainer.innerHTML = `
<div class="project-image-container image-container">
  <a href="${project.preview}" target="_blank" class="project-link">
    <img class="project-image image" src=${project.image} alt="screenshot of ${
      project.name
    }" />
  </a>
</div>
  <div class="project-info-container">
    <h3 class="project-title">${project.title}</h3>
    <div class="project-description-container">
      <p class="project-description">${project.description}</p>
    </div>
    <div class="project-list-link-container">
      <ul class="project-list">
      ${project.tech
        .map((tech) => `<li class="project-list-item">${tech}</li>`)
        .join("")}
      </ul>
      <div class="project-links">
        <a  href="${project.link}" 
            target="_blank" 
            class="project-link">
            <i class="fab fa-github"></i>
        </a>

        <a  href="${project.preview}" 
            target="_blank"  
            class="project-link">
            <i class="fas fa-window-restore"></i>
        </a>
      </div>
    </div>
  </div>
</div> `;
    projectsContainer.appendChild(projectContainer);
  });
};

const renderSmallProjects = () => {
  const smallProjectsContainer = document.querySelector(
    "#small-projects-container"
  );
  smallProjects.forEach((project) => {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("small-project");
    projectContainer.innerHTML = `
<div class="small-project-image-container small-image-container">
  <a href="${project.preview}" target="_blank" class="small-project-link">
    <img class="small-project-image" src=${project.image} alt="screenshot of ${project.name}" />
  </a>
</div>
  <div class="small-project-info-container">
    <h3 class="small-project-title">${project.title}</h3> 
    <div class="small-project-description-container">
      <p class="small-project-description">${project.description}</p>
    </div>
    <div class="small-project-list-link-container">
  
      <div class="small-project-links">
        <a  href="${project.link}"
            target="_blank"
            class="small-project-link">
            <i class="fab fa-github"></i>
        </a>

        <a  href="${project.preview}"
            target="_blank"
            class="small-project-link">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
        
  </div>
</div> `;
    smallProjectsContainer.appendChild(projectContainer);
  });
};

function renderSkills() {
  const skillsList = document.querySelector("#skills-list");
  skills.forEach((skill) => {
    const { id, title, icon } = skill;
    const skillItem = document.createElement("li");
    skillItem.classList.add("list-item", "skill-list-item");

    skillItem.innerHTML = `
                <span class='skill-list-title'> 
                <i class='${icon} skill-list-icon'></i>
                ${title} 
                </span>
            `;

    skillsList.appendChild(skillItem);
  });
}

const navLinks = [...document.querySelectorAll(".navlink")];
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    handleNavButton();
  });
});

const navButton = document.getElementById("nav-button");
navButton.addEventListener("click", (e) => {
  e.preventDefault();
  handleNavButton();
});

const handleNavButton = () => {
  const nav = document.getElementById("nav");
  nav.classList.toggle("nav-display");
};

renderSkills();
renderProjects();
renderSmallProjects();
