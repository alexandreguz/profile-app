"use client"
import { useParams } from "next/navigation";
import projectDetails from "@/app/(website)/data/projectsData";
import Image from "next/image";
import Link from "next/link";

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
        <div className="bg-gray-100">
            <div className="flex justify-between ">
                <div className="p-10 m-10">
                    <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                    <p className="text-xl text-gray-700 mb-6">{project.description}</p>
                    {/* <p className="text-lg text-gray-600 mb-4">{project.details}</p> */}
                    {/* <h2 className="text-2xl font-semibold mb-2">Technologies Used:</h2> */}
                    {/* <ul className="list-disc pl-6">
                        {project.technologies.map((tech) => (
                            <li key={tech} className="text-lg text-gray-700">{tech}</li>
                        ))}
                    </ul> */}
                </div>
                <div>
                    <p className="text-lg text-gray-600 mb-4 pl-10 m-10">
                        <Image
                            src={project.image}
                            width={500}
                            height={300}
                            alt="project image"
                        />
                    </p>
                </div>
            </div>

                <div className="pl-20">
                    <p className="text-4xl font-bold mb-4"> Comments</p>
                    <p className="text-xl text-gray-700 mb-6">{project.comments}</p>
                    <Link href={`${project.link}`} key={project.title}>Check Here</Link>
                </div>
                </div>
        </>
    );
}

