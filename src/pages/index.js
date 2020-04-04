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
  const { json } = data.allContentfulAuthor.edges[1].node.description;

  return (
    <main>
      <Seo title="Full-Stack Mobile and Web Developer Portfolio" />
      <Home description={json} />
      <Layout showParticles showMenu showSocial />
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
