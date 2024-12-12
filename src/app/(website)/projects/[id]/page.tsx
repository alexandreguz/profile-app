"use client"
import { useParams } from "next/navigation";
import projectDetails from "@/app/(website)/data/projectsData";
import Image from "next/image";

export async function generateStaticParams() {
    // Extraia os IDs dos projetos
    return Object.keys(projectDetails).map((id) => ({ id }));
  }

export default function ProjectDetail() {
    const params = useParams();
    const projectId = Array.isArray(params.id) ? params.id[0] : params.id;

    if (!projectId || !(projectId in projectDetails)) {
        return (
            <div className="p-10">
                <h1 className="text-4xl font-bold text-red-500">Project Not Found</h1>
                <p className="text-lg mt-4">The project you are looking for does not exist.</p>
            </div>
        );
    }

    const project = projectDetails[projectId];

    return (
        <>
            <div className="p-10 flex">
                <div className="p-10">
                    <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                    <p className="text-xl text-gray-700 mb-6">{project.description}</p>
                    <p className="text-lg text-gray-600 mb-4">{project.details}</p>
                    <h2 className="text-2xl font-semibold mb-2">Technologies Used:</h2>
                    <ul className="list-disc pl-6">
                        {project.technologies.map((tech) => (
                            <li key={tech} className="text-lg text-gray-700">{tech}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className="text-lg text-gray-600 mb-4">
                        <Image
                            src={project.image}
                            width={700}
                            height={170}
                            alt="me"
                        />
                    </p>
                </div>
            </div>
            <hr />
            <div className="p-10">
                <div className="p-10">
                    <p className="text-4xl font-bold mb-4">ccwicwiciwcnw</p>
                    <p className="text-xl text-gray-700 mb-6">{project.description}</p>
                </div>
            </div>

        </>
    );
}

