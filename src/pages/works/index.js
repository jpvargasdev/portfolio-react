import React from "react";
import PropTypes from "prop-types";

// api
import { graphql } from "gatsby";

// components
import { Seo } from "components/Base";
import { Layout } from "components/Elements";
import renderRichText from "components/Base/RichText";

// template
import Works from "templates/Works";

// styles
import "../../styles/index.scss";

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
            description
          }
          images {
            id
            file {
              url
            }
          }
        }
      }
    },
    allContentfulAuthor {
      edges {
        node {
          description {
            json
          }
        }
      }
    }
  }
`;

const WorksPage = ({ data }) => {
  const { json } = data.allContentfulAuthor.edges[0].node.description;
  const projects = data.allContentfulProjects.edges;
  const RichText = renderRichText(json);
  return (
    <main>
      <Seo title="Works" />
      <Works projects={projects} description = {RichText} />
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
