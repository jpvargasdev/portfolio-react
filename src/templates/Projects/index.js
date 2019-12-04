import React from "react";
import PropTypes from "prop-types";

// components
import ProjectCard from 'components/Elements/ProjectCard';

// style
import "./projects.scss";

const Projects = ({ projects }) => {
  return (
    <ul className="projects_container">
      {projects.map(element => {
        return <ProjectCard element={element} />;
      })}
    </ul>
  );
};

Projects.propTypes = {
  projects: PropTypes.shape([])
};

Projects.defaultProps = {
  projects: []
};

export default Projects;
