const projectDetails
: Record<string, {
    title: string;
    description: string;
    details: string;
    technologies: string[];
    image: string;
    comments: string,
    link: string
  }> 
  = {
    "fit-app": {
      title: "Fit App",
      description: "A responsive app using angular material.",
      details: "This project uses Angular for the frontend and Ruby on Rails for the backend. It features authentication, CRUD operations, and task categorization.",
      technologies: ["Angular", "Rails", "PostgreSQL"],
      image: "",
      comments: "",
      link: ""
    },
    "personal-website": {
      title: "Personal Website",
      description: "A sleek and modern portfolio website.",
      details: "Built with Next.js and Tailwind CSS, this website showcases my skills, projects, and contact information.",
      technologies: ["Next.js", "Tailwind CSS"],
      image: "/site.png",
      comments: "lololololooooooohdfghgfdfghjfdgasdfggfdsdfgfvdfghgfdfgfdbjbvcvbnbvcvb xciting and challenging project. My good friend Samuel Azulay conceived the project. He was inspired to see that many people did not fully understand the laws, which is why they ended up breaking the Sabbath unintentionally. When he called me, I accepted the contract immediately. Since this was not our main occupation, we dedicated some time e",
      link: ""
    },
    "yalkut-yossef": {
      title: "Yalkut Yossef in Portuguese",
      description: "Translation of the book Yalkut Yossef into Portuguese",
      details: "This project ",
      technologies: ["React Native", "Node.js"],
      image: "/yalkut_yossef_collection.png",
      comments: "This was a very exciting and challenging project. My good friend Samuel Azulay conceived the project. He was inspired to see that many people did not fully understand the laws, which is why they ended up breaking the Sabbath unintentionally. When he called me, I accepted the contract immediately. Since this was not our main occupation, we dedicated some time each day to it. I translated, he revised and made grammatical corrections and checked again to make sure there had been no change in the understanding of the law. When we had finished, we were invited to edit and print it through the Safra family in memory of Mr. Josef Safra.",
      link: ""
    },
    "chabura1": {
      title: "'Achshevei'",
      description: "A deep and comprehensive explanation of the concept of 'Achshevei' in Halacha.",
      details: "A visually engaging project using D3.js to present data interactively.",
      technologies: ["D3.js", "JavaScript"],
      image: "/achshevei.png",
      comments: "An in-depth explanation of the concept of Achshevei - אחשביה. When a food is not fit to be consumed and yet someone wants to eat it. It covers cases such as a protein taken from a non-kosher animal being used as an ingredient in a food. It covers situations in the modern food industry, such as meat produced in a laboratory using a non-kosher protein being allowed to be consumed.",
      link: "https://docs.google.com/document/d/1LHK5Wvu0jG6tdmbrgf2qkgLBsBKIiY3X/edit?usp=sharing&ouid=107432280376833991040&rtpof=true&sd=true"
    },
  };
  
  export default projectDetails;
  