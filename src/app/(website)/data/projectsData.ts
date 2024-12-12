const projectDetails
: Record<string, {
    title: string;
    description: string;
    details: string;
    technologies: string[];
    image: string
  }> 
  = {
    "task-management": {
      title: "Task Management System",
      description: "A robust task management application to track and manage daily tasks.",
      details: "This project uses Angular for the frontend and Ruby on Rails for the backend. It features authentication, CRUD operations, and task categorization.",
      technologies: ["Angular", "Rails", "PostgreSQL"],
      image: ""
    },
    "personal-website": {
      title: "Personal Website",
      description: "A sleek and modern portfolio website.",
      details: "Built with Next.js and Tailwind CSS, this website showcases my skills, projects, and contact information.",
      technologies: ["Next.js", "Tailwind CSS"],
      image: "/alexandreguzwebsite.png"
    },
    "torah-learning": {
      title: "Torah Learning App",
      description: "A resourceful app for Torah study.",
      details: "Integrates Sefaria's API to provide access to Jewish texts. Features include bookmarks, commentaries, and search functionalities.",
      technologies: ["React Native", "Node.js"],
      image: ""
    },
    "jewish-history": {
      title: "Jewish History Timeline",
      description: "Interactive timeline of key events in Jewish history.",
      details: "A visually engaging project using D3.js to present data interactively.",
      technologies: ["D3.js", "JavaScript"],
      image: ""
    },
  };
  
  export default projectDetails;
  