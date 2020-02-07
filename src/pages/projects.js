import React from "react";
import PropTypes from "prop-types";

// api
import { graphql } from "gatsby";

// components
import { Seo } from "components/Base";
import { Layout } from "components/Elements"

// template
import Works from "templates/Works";

// styles
import "../styles/index.scss";

export const query = graphql`
  {
    allContentfulProjects {
      edges {
        node {
          id
          webUrl
          title
          resume
          technologies
          iosUrl
          androidUrl
          appImages {
            id
            file {
              url
            }
          }
        }
      }
    }
  }
`;

const WorksPage = ({ data }) => {
  const projects = data.allContentfulProjects.edges;
  return (
    <main>
      <Seo title="Projects" />
      <Works projects={projects} />
      <Layout showMenu showParticles stickyMenu />
    </main>
  );
};

WorksPage.propTypes = {
  data: PropTypes.shape({
    allContentfulProjects: PropTypes.shape({
      edges: PropTypes.shape([])
    })
  })
};

WorksPage.defaultProps = {
  data: {}
};

export default WorksPage;
