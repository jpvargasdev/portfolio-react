import React from "react";
import PropTypes from "prop-types";

// api
import { graphql } from "gatsby";

// components
import { Seo } from "components/Base";
import { Layout } from "components/Elements"

// template
import Home from "templates/Home";

// styles
import "../styles/index.scss";

export const query = graphql`
  {
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

const IndexPage = ({ data }) => {
  const { json } = data.allContentfulAuthor.edges[0].node.description;

  return (
    <main>
      <Layout showParticles showMenu showSocial />
      <Seo title="Home" />
      <Home description={json} />
    </main>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    allContentfulAuthor: PropTypes.shape({
      edges: PropTypes.shape([])
    })
  })
};

IndexPage.defaultProps = {
  data: {}
};

export default IndexPage;
