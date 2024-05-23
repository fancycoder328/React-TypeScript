import React, { Fragment, useState } from "react";
import { Mock_Projects } from "./MockProjects";
import ProjectList from "./ProjectList";
import { Project } from "./Project";

function ProjectsPage() {
	const [projects, setProjects] = useState<Project[]>(Mock_Projects);

	const saveProject = (project: Project) => {
		let updatedProjects = projects.map((p: Project) => {
			return p.id === project.id ? project : p;
		});
		setProjects(updatedProjects);
	};

	return (
		<Fragment>
			<h1>Projects</h1>
			<ProjectList
				onSave={saveProject}
				projects={projects} />
		</Fragment>
	)
}

export default ProjectsPage