import { Mock_Projects } from "./MockProjects";
import ProjectList from "./ProjectList";
import { Project } from "./Project";

function ProjectsPage() {
	const saveProject = (project: Project) => {
		console.log('Saving project: ', project);
	};
	
	return (
		<>
			<h1>Projects</h1>
			<ProjectList 
				onSave={saveProject}
				projects={Mock_Projects} />
		</>
	)
}

export default ProjectsPage