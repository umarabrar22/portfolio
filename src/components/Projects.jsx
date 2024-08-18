import React from "react";
import { Button, Chip } from "@material-tailwind/react";
import { PROJECTS } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Projects = ({id}) => {
	return (
		<section id={id} className="sm:py-10 sm:px-32 px-4 py-12 bg-black">
			<h1 className="text-center text-4xl tracking-wide text-white">
				PROJECTS
			</h1>
			<div className="grid  xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 mt-14 gap-10">
				{PROJECTS.map((project) => {
					return (
						<div className="mt-6 w-fit bg-black rounded-3xl cursor-pointer ">
							<div>
								<img
									src={project.image}
									alt={project.title}
									className=" rounded-3xl aspect-video w-full"
								/>
							</div>
							<div className="px-2 py-4">
								<div>
									<h3 className="text-lg text-white">{project.title}</h3>
									<p className="text-sm text-white mt-2">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-4 mt-4">
										{project.technologies.map((tech) => (
											<Chip
												variant="ghost"
												value={tech}
												className="rounded-full bg-white text-black hover:bg-black hover:text-white hover:scale-105"
											/>
										))}
									</div>
								</div>
								<div className="mt-6 flex gap-4">
									<Button className="p-3 bg-white hover:scale-95">
										<FontAwesomeIcon
											icon={faGithub}
											className="text-3xl text-black  "
										/>
									</Button>
									<Button className="p-3 bg-white text-black hover:scale-95 text-sm font-normal">
										View Project
									</Button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
