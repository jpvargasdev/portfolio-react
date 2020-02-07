import React from "react";
import PropTypes from "prop-types";

// components
import Filter from 'components/Elements/Filter';
import ProjectCard from 'components/Elements/ProjectCard';

// style
import "./works.scss";

class Projects extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.onFilterChange = this.onFilterChange.bind();
  }

  onFilterChange() {
    console.log('On filter change');
  }

  render() {
    const { projects } = this.props;
    return (
      <div className="projects projects_filter">
        <Filter onFilterChange={this.onFilterChange} />
        <ul className="projects projects_container">
          {projects.map(element => (
            <ProjectCard element={element} />
          ))}
        </ul>
      </div>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.shape([])
};

Projects.defaultProps = {
  projects: []
};

export default Projects;
