// ============ DATA ============
// ============ SKILLS ============
const skillsData = [
  {
    title: "Frontend Development",
    color: "skill-purple",
    iconClass: "",
    tags: ["HTML5", "CSS", "JavaScript", "React.js"],
    iconSVG: `
      <rect x="3" y="3" width="18" height="18" rx="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    `,
  },
  {
    title: "Backend & Core",
    color: "skill-blue",
    iconClass: "blue",
    tags: ["Python", "C", "C++", "Problem Solving", "Graph Theory"],
    iconSVG: `
      <rect x="2" y="2" width="20" height="8" rx="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2"></rect>
    `,
  },
  {
    title: "AI & Data",
    color: "skill-green",
    iconClass: "green",
    tags: ["Artificial Intelligence", "Machine Learning"],
    iconSVG: `
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    `,
  },
  {
    title: "Tools & Automation",
    color: "skill-orange",
    iconClass: "orange",
    tags: ["Git", "Task Scheduling", "Playwright", "Browser-Use"],
    iconSVG: `
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    `,
  },
  {
    title: "Cloud Computing",
    color: "skill-sky",
    iconClass: "sky",
    tags: ["AWS (Basic)", "Cloud Computing"],
    iconSVG: `
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
    `,
  },
];

// ============ EXPERIENCE ============
const experienceData = [
  {
    company: "AWS",
    type: "virtual work experience",
    role: "Solutions Architecture",
    date: "July 2025",
    links: {
      certificate:
        "contents/Certifications/AWS_Solutions_Architecture__Ravi_Tejesh_Nagasarapu.pdf",
      drive: null,
      github: null,
    },
  },
  {
    company: "HP Life",
    type: "virtual work experience",
    role: "AI for Beginners",
    date: "March 2025",
    links: {
      certificate:
        "contents/Certifications/HP_LIFE_AI_for_Beginners_Ravi_Tejesh_Nagasarapu.pdf",
      drive: null,
      github: null,
    },
  },
  {
    company: "Tata",
    type: "virtual work experience",
    role: "GenAI Powered Data Analyst",
    date: "July 2025",
    links: {
      certificate:
        "contents/Certifications/Tata_GenAI_Powered_Data_Analytics_Ravi_Tejesh_Nagasarapu.pdf",
      drive: null,
      github: null,
    },
  },
  {
    company: "Electronic Arts",
    type: "virtual work experience",
    role: "Software Engineering",
    date: "Feb 2025",
    links: {
      certificate:
        "contents/Certifications/EArts_Certification_Ravi_Tejesh_Nagasarapu.pdf",
      drive: null,
      github: null,
    },
  },
  {
    company: "Verizon",
    type: "virtual work experience",
    role: "Cloud Platform",
    date: "Feb 2025",
    links: {
      certificate:
        "contents/Certifications/Verizon_Cloud_Computing_Ravi_Tejesh_Nagasarapu.pdf",
      drive: null,
      github: null,
    },
  },
  {
    company: "TCS iON",
    type: "Certificate of Achievement",
    role: "Young Professional",
    date: "April 2025",
    links: {
      certificate:
        "contents/Certifications/TCS_ION_Young_Professional_Ravi_Tejesh_Nagasarapu.pdf",
      drive: null,
      github: null,
    },
  },
  {
    company: "Mastercard",
    type: "virtual work experience",
    role: "Cybersecurity",
    date: "July 2025",
    links: {
      certificate:
        "contents/Certifications/Master_card_Cybersecurity_Ravi_Tejesh_Nagasarapu.pdf",
      drive: null,
      github: null,
    },
  },
  {
    company: "Skyscanner",
    type: "virtual work experience",
    role: "Software Engineering",
    date: "March 2025",
    links: {
      certificate:
        "contents/Certifications/SkyScanner_Certificate_Ravi_Tejesh_Nagasarapu.pdf",
      drive: null,
      github: null,
    },
  },
];

// ============  PROJECTS ============
const projects = [
  {
    title: "Farmers Market",
    category: "Web Development",
    description:
      "Farmers Market is a web platform connecting farmers and customers, enabling direct sales of fresh, local products. It features user authentication, product management, a shopping cart, transaction history.",
    tags: ["HTML5", "CSS", "JavaScript"],
    link: null,
    github: "https://github.com/Ravitejeshnagasarapu/Farmers_market",
    image: "contents/Images/Farmer_market_image.png",
  },
  {
    title: "Portfolio Website",
    category: "Web Development",
    description:
      "A modern, responsive personal portfolio built with HTML, CSS, and JavaScript, featuring glassmorphism design, dark mode, and smooth animations.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    link: "https://ravitejeshnagasarapu.github.io/Portfolio",
    github: "https://github.com/Ravitejeshnagasarapu/Portfolio",
    image: "contents/Images/preview.png",
  },
];

// ============ THEME MANAGEMENT ============
const initTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.body.classList.add("dark");
  }
};

const toggleTheme = () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

// ============ NAVIGATION ============
const initNavigation = () => {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-link");
  const themeToggle = document.getElementById("themeToggle");
  const mobileThemeToggle = document.getElementById("mobileThemeToggle");

  // Scroll effect
  let isScrolling = false;

  window.addEventListener("scroll", () => {
    if (!isScrolling) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }

        updateActiveSection();
        isScrolling = false;
      });
      isScrolling = true;
    }
  });

  // Mobile menu toggle
  hamburger.addEventListener("click", () => {
    const isOpen = hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", isOpen);
  });

  // Smooth scroll for nav links
  navLinks.forEach((link) => {
    const handleNavActivation = () => {
      // Close mobile menu only if it's open
      if (mobileMenu.classList.contains("active")) {
        mobileMenu.classList.remove("active");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
      }
    };
    // Mouse click
    link.addEventListener("click", handleNavActivation);
    // Keyboard activation
    link.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        handleNavActivation();
      }
    });
  });

  // Theme toggles
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
  if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener("click", toggleTheme);
  }
};

const updateActiveSection = () => {
  const sections = ["home", "about", "skills", "projects", "contact"];
  const scrollPosition = window.scrollY + 100;

  sections.forEach((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      const offsetHeight = element.offsetHeight;

      if (
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + offsetHeight
      ) {
        document.querySelectorAll(".nav-link, .mobile-link").forEach((link) => {
          link.classList.remove("active");
        });
        document
          .querySelectorAll(`[data-section="${sectionId}"]`)
          .forEach((link) => {
            link.classList.add("active");
          });
      }
    }
  });
};

// ============ SCROLL ANIMATIONS ============
const initScrollAnimations = () => {
  const animatedElements = document.querySelectorAll(".scroll-animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  animatedElements.forEach((el) => observer.observe(el));
};

// ============ RENDER SKILLS ============
const renderSkills = () => {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;

  grid.innerHTML = "";

  skillsData.forEach((skill, index) => {
    const card = document.createElement("div");
    card.className = `skill-card ${skill.color} scroll-animate`;
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
      <div class="skill-icon ${skill.iconClass}">
        <svg width="24" height="24" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" stroke-width="2">
          ${skill.iconSVG}
        </svg>
      </div>

      <h3>${skill.title}</h3>

      <div class="skill-tags">
        ${skill.tags.map(tag => `<span>${tag}</span>`).join("")}
      </div>
    `;

    grid.appendChild(card);
  });

  initScrollAnimations();
};

// ============ RENDER EXPERIENCE ============
const renderExperience = () => {
  const grid = document.getElementById("experienceGrid");
  if (!grid) return;

  grid.innerHTML = "";

  experienceData.forEach((exp) => {
    const card = document.createElement("div");
    card.className = "experience-card";
    const iconsHTML = [];
    if (exp.links?.certificate) {
      iconsHTML.push(`
        <a
          href="javascript:void(0)"
          role="button"
          class="experience-icon cert"
          data-certificate="${exp.links.certificate}"
          data-overlay-text="View Certificate"
          data-tooltip=""
          aria-label="View Certificate"
        >
          <svg width="18" height="18" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      `);
    }

    if (exp.links?.drive) {
      iconsHTML.push(`
        <a
          href="${exp.links.drive}"
          class="experience-icon drive"
          target="_blank"
          rel="noopener noreferrer"
          data-overlay-text="View Drive Proof"
          data-tooltip=""
          aria-label="View Drive Proof"
        >
          <svg width="18" height="18" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 22 20 2 20"></polygon>
          </svg>
        </a>
      `);
    }

    if (exp.links?.github) {
      iconsHTML.push(`
        <a
          href="${exp.links.github}"
          class="experience-icon github"
          target="_blank"
          rel="noopener noreferrer"
          data-overlay-text="View Source Code"
          data-tooltip=""
          aria-label="View Source Code"
        >
          <svg width="18" height="18" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      `);
    }

    card.innerHTML = `
      <div class="experience-accent"></div>
    
      <div class="experience-content">
        <div class="experience-top">
          <h4>${exp.company}</h4>
          <span class="experience-type">${exp.type}</span>
        </div>
    
        <div class="experience-meta">
          <span class="experience-role">${exp.role}</span>
          <span class="experience-date period">${exp.date}</span>
        </div>
    
        ${
          iconsHTML.length
            ? `<div class="experience-links">${iconsHTML.join("")}</div>`
            : ""
        }
      </div>
    `;
    grid.appendChild(card);
  });
};

// ============ PROJECTS ============
let currentFilter = "All";
let searchQuery = "";
let visibleCount = 3;
const LOAD_INCREMENT = 3;

const getTechIcon = (tag) => {
  const deviconMap = {
    Python: "devicon-python-plain",
    "React.js": "devicon-react-original",
    TypeScript: "devicon-typescript-plain",
    JavaScript: "devicon-javascript-plain",
    "Tailwind CSS": "devicon-tailwindcss-original",
    "C++": "devicon-cplusplus-plain",
    HTML5: "devicon-html5-plain",
    CSS: "devicon-css3-plain",
    CSS3: "devicon-css3-plain",
    "Node.js": "devicon-nodejs-plain",
    TensorFlow: "devicon-tensorflow-original",
  };

  if (deviconMap[tag]) {
    return `<i class="${deviconMap[tag]} tech-icon" title="${tag}"></i>`;
  }

  // Default code icon for other tags
  return `<svg class="tech-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" title="${tag}"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
};

const getCategoryIcon = (category) => {
  if (category.includes("AI")) {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line></svg>`;
  } else if (category.includes("Web")) {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`;
  } else {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`;
  }
};

const createProjectCard = (project, index) => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.style.animationDelay = `${index * 0.1}s`;

  const linksHTML = `
    <div class="project-links">
      ${
        project.github
          ? `<a
                href="${project.github}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-secondary project-btn project-icon-link"
                aria-label="View Source Code"
                data-tooltip=""
              >

        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      </a>`
          : ""
      }
      ${
        project.link
          ? `<a
                href="${project.link}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary project-btn project-icon-link"
                aria-label="View Project"
                data-tooltip=""
              >

        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      </a>`
          : ""
      }
    </div>
  `;

  const techIconsHTML = project.tags
    .slice(0, 5)
    .map((tag) => getTechIcon(tag))
    .join("");
  const tagsHTML = project.tags
    .map((tag) => `<span class="project-tag">${tag}</span>`)
    .join("");

  card.innerHTML = `
    <div class="project-image">
      <img src="${project.image}" alt="${
    project.title
  }" width="800" height="500" loading="lazy"/>
      <div class="project-image-overlay"></div>
      <span class="project-category-badge">${project.category}</span>
      ${linksHTML}
    </div>
    <div class="project-content">
      <div class="project-header">
        <div class="project-icon">${getCategoryIcon(project.category)}</div>
        <h3 class="project-title">${project.title}</h3>
      </div>
      <p class="project-description">${project.description}</p>
      <div class="project-tech-icons">${techIconsHTML}</div>
      <div class="project-tags">${tagsHTML}</div>
    </div>
  `;

  // Trigger animation
  setTimeout(() => card.classList.add("visible"), 50);

  return card;
};

const filterProjects = () => {
  const query = searchQuery.toLowerCase();

  return projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tags.some((tag) => tag.toLowerCase().includes(query));

    const matchesCategory =
      currentFilter === "All" || project.category.includes(currentFilter);
    return matchesSearch && matchesCategory;
  });
};

const renderProjects = () => {
  const grid = document.getElementById("projectsGrid");
  const noResults = document.getElementById("noResults");
  const loadMoreContainer = document.getElementById("loadMoreContainer");

  grid.innerHTML = "";

  const filteredProjects = filterProjects();
  const displayedProjects = filteredProjects.slice(0, visibleCount);

  if (displayedProjects.length === 0) {
    noResults.classList.add("visible");
    loadMoreContainer.style.display = "none";
  } else {
    noResults.classList.remove("visible");

    displayedProjects.forEach((project, index) => {
      grid.appendChild(createProjectCard(project, index));
    });

    if (filteredProjects.length > visibleCount) {
      loadMoreContainer.style.display = "flex";
    } else {
      loadMoreContainer.style.display = "none";
    }
  }
};

const initProjects = () => {
  const searchInput = document.getElementById("projectSearch");
  const clearSearch = document.getElementById("clearSearch");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const clearFilters = document.getElementById("clearFilters");

  // Initial render
  renderProjects();

  // Search functionality
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    visibleCount = 3; // Reset visible count

    if (searchQuery) {
      clearSearch.classList.add("visible");
    } else {
      clearSearch.classList.remove("visible");
    }

    renderProjects();
  });

  clearSearch.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearSearch.classList.remove("visible");
    visibleCount = 3;
    renderProjects();
  });

  // Filter functionality
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.category;
      visibleCount = 3;
      renderProjects();
    });
  });

  // Load more
  loadMoreBtn.addEventListener("click", () => {
    loadMoreBtn.classList.add("loading");
    loadMoreBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
      <span>Loading...</span>
    `;

    setTimeout(() => {
      visibleCount += LOAD_INCREMENT;
      renderProjects();
      loadMoreBtn.classList.remove("loading");
      loadMoreBtn.innerHTML = `
        <span>Load More Projects</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
      `;
    }, 800);
  });

  // Clear all filters
  clearFilters.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    currentFilter = "All";
    clearSearch.classList.remove("visible");
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
      if (btn.dataset.category === "All") {
        btn.classList.add("active");
      }
    });
    visibleCount = 3;
    renderProjects();
  });
};

// ============ CONTACT FORM ============
const initContactForm = () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const status = document.getElementById("formStatus");
    status.textContent = `Thanks ${name}, your message has been received.`;
    status.classList.add("visible");
    form.reset();
  });
};

// ============ FOOTER YEAR ============
const setCurrentYear = () => {
  document.getElementById("currentYear").textContent = new Date().getFullYear();
};

// ============ SMOOTH SCROLL FOR HERO BUTTONS ============
const initHeroButtons = () => {
  const heroButtons = document.querySelectorAll(".cta-buttons .btn");

  heroButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const href = btn.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (!target) return;

      const offset = 80;
      const position =
        target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: position, behavior: "smooth" });
    });
  });
};

// ============ LOADING SCREEN ============
const initLoader = () => {
  const loader = document.getElementById("loader");

  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 1500);
  });

  // Fallback: hide loader after 3 seconds max
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 3000);
};

// ============ SCROLL PROGRESS BAR ============
const initScrollProgress = () => {
  const progressBar = document.getElementById("scrollProgress");
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + "%";
        ticking = false;
      });
      ticking = true;
    }
  });
};

// ============ PARALLAX BLOBS ============
const initParallaxBlobs = () => {
  const hero = document.querySelector(".hero");
  const blobs = document.querySelectorAll(".blob");

  if (!hero || blobs.length === 0) return;

  // Mouse parallax
  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const mouseX = e.clientX - rect.left - centerX;
    const mouseY = e.clientY - rect.top - centerY;

    blobs.forEach((blob) => {
      blob.style.setProperty("--parallax-x", mouseX * 0.05 + "px");
      blob.style.setProperty("--parallax-y", mouseY * 0.05 + "px");
    });
  });

  // Reset on mouse leave
  hero.addEventListener("mouseleave", () => {
    blobs.forEach((blob) => {
      blob.style.setProperty("--parallax-x", "0px");
      blob.style.setProperty("--parallax-y", "0px");
    });
  });

  // Scroll parallax
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const heroHeight = hero.offsetHeight;

    if (scrollY < heroHeight) {
      blobs.forEach((blob, index) => {
        const speed = (index + 1) * 0.1;
        blob.style.setProperty("--parallax-y", scrollY * speed + "px");
      });
    }
  });
};

// ============ OPEN CERTIFICATE ============
const openCertificate = (icon) => {
  const modal = document.getElementById("certificateModal");
  const frame = document.getElementById("certificateFrame");
  if (!modal || !frame) return;

  const url = icon?.dataset?.certificate;
  if (!url) return;

  frame.src = url;
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

// ============ CERTIFICATE MODAL ============
const initCertificateModal = () => {
  const modal = document.getElementById("certificateModal");
  const frame = document.getElementById("certificateFrame");

  if (!modal || !frame) return;

  document.addEventListener("click", (e) => {
    const certBtn = e.target.closest(".experience-icon.cert");
    const closeBtn = e.target.closest("[data-close-modal]");

    if (certBtn) {
      e.preventDefault();
      openCertificate(certBtn);
    }

    if (closeBtn && modal.classList.contains("active")) {
      closeModal();
    }
  });

  const closeModal = () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    frame.src = "";
    document.body.style.overflow = "";
  };

  document.addEventListener("keydown", (e) => {
    const certBtn = document.activeElement;
    if (
      (e.key === "Enter" || e.key === " ") &&
      certBtn?.classList?.contains("cert")
    ) {
      e.preventDefault();
      openCertificate(certBtn);
    }
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
};

// ============ INITIALIZE ============
document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initTheme();
  initNavigation();
  renderSkills();
  renderExperience();
  initScrollAnimations();
  initProjects();
  initContactForm();
  initHeroButtons();
  initScrollProgress();
  initParallaxBlobs();
  setCurrentYear();
  initCertificateModal();
});





