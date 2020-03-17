import React from "react";
import PropTypes from "prop-types";

// api
import { graphql } from "gatsby";

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
      <Seo />
      <Project element={location.state.element} />
      <Layout showMenu showParticles />
    </main>
  );
};

IndexPage.propTypes = {
  element: PropTypes.object.isRequired,
};

IndexPage.defaultProps = {
  element: {}
};

export default IndexPage;
