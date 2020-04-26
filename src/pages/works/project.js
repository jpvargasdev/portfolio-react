import React from "react";
import PropTypes from "prop-types";

// components
import { Seo } from "components/Base";
import { Layout } from "components/Elements"

// template
import Project from "templates/Project";

// styles
import "../../styles/index.scss";

const ProjectPage = ({ location }) => {
  return (
    <main>
      <Seo title="Project" />
      <Project
        element={(location && location.state && location.state.element) || null}
      />
      <Layout showMenu showParticles />
    </main>
  );
};

ProjectPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      element: PropTypes.object
    })
  })
};

ProjectPage.defaultProps = {
  location: {
    state: {
      element: null
    }
  }
};

export default ProjectPage;
