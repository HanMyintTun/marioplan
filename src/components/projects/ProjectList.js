import React from 'react'
import { Link } from 'react-router-dom'
import projectReducer from '../../store/reducers/projectReducer'
import ProjectSummary from './ProjectSummary'
const ProjectList = ({projects}) => {
    //console.log(projects)
    return (
        <div className="project-list section">
           { projects && projects.map(project => {
                return(
                    <Link to={'/projects/' + project.id} key={project.id}>
                        <ProjectSummary project={project} />
                    </Link>
                )
           })}
        </div>
    )
}

export default ProjectList