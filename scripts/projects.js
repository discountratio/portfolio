export const projects = [
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

export default projects;
