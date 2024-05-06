import { Mock_Projects } from "./MockProjects";
import ProjectList from "./ProjectList";

function ProjectsPage() {
	return (
		<>
			<h1>Projects</h1>
			<ProjectList projects={Mock_Projects} />
		</>
	)
}

export default ProjectsPage