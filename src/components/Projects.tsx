import Link from "next/link";

type ProjectType = "technology" | "religion";

const projects: {
  id: string;
  title: string;
  description: string;
  type: ProjectType;
}[] = [
    {
      id: "fit-app",
      title: "App to control exercises",
      description: "A responsive app to control workouts using Angular Material.",
      type: "technology",
    },
    {
      id: "personal-website",
      title: "Personal Website",
      description: "A modern and responsive portfolio website built with Next.js and Tailwind.",
      type: "technology",
    },
    {
      id: "yalkut-yossef",
      title: "Yalkut Yossef Translation",
      description: "Spread throughout Brazil and other Portuguese-speaking countries. the laws of Shabbat.",
      type: "religion",
    },
    {
      id: "chabura1",
      title: "'Achshevei'",
      description: "A deep and comprehensive explanation of the concept of 'Achshevei' in Halacha",
      type: "religion",
    },
  ];

const colorClasses = {
  technology: "bg-blue-500 hover:bg-blue-600",
  religion: "bg-yellow-500 hover:bg-yellow-600",
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
        <Link href={`/projects/${project.id}`} key={project.title}>
            <div
              className={`p-6 rounded-lg shadow-lg text-white cursor-pointer transition transform hover:scale-105 ${colorClasses[project.type]}`}
            >
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-lg">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
