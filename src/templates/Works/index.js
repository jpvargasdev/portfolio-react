import React from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";

// components
import Filter from 'components/Elements/Filter';
import ProjectCard from 'components/Elements/ProjectCard';

// style
import "./works.scss";

class Works extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    const { projects } = this.props;
    this.setState({
      projects
    });
  }

  onFilterChange = (item) => {
    const { projects } = this.props;

    const newProjects = projects.filter(project => {
      if (project.node.technologies.indexOf(item) > -1) {
        return project;
      }
      if (item === "All") {
        return project
      }
    });
    this.setState({ projects: newProjects });
  }

  onOpenProject = (element) => {
    navigate(
      `/works/project?id=${element.id}`,
      {
        state: { element }
      }
    );
  }

  render() {
    const { description } = this.props;
    const { projects } = this.state;
    return (
      <div className="projects projects_filter">
        <div className="projects_description">{description}</div>
        <Filter onFilterChange={this.onFilterChange} />
        <ul className="projects_container">
          {projects.map(element => (
            <ProjectCard element={element} onClick={this.onOpenProject} />
          ))}
        </ul>
      </div>
    );
  }
}

Works.propTypes = {
  projects: PropTypes.shape([]),
  description: PropTypes.string,
};

Works.defaultProps = {
  projects: [],
  description: '',
};

export default Works;
