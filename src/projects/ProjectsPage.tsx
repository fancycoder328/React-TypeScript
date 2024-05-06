import { Mock_Projects } from "./MockProjects"

function ProjectsPage() {
	return (
		<>
			<h1>Projects</h1>
			<pre>
				{JSON.stringify(Mock_Projects,null, '')}
			</pre>
		</>
	)
}

export default ProjectsPage