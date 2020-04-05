import React from "react";
import PropTypes from "prop-types";

// components
import { Seo } from "components/Base";
import { Layout } from "components/Elements"

// template
import Project from "templates/Project";

// styles
import "../../styles/index.scss";

const IndexPage = ({ location }) => {
  return (
    <main>
      <Seo title="Project" />
      <Project element={location.state.element} />
      <Layout showMenu showParticles />
    </main>
  );
};

IndexPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      element: PropTypes.object
    })
  })
};

IndexPage.defaultProps = {
  location: {
    state: {
      element: null
    }
  }
};

export default IndexPage;
