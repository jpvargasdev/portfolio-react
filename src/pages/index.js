import React from "react";
import PropTypes from "prop-types";

// api
import { graphql } from "gatsby";

// components
import { Seo } from "components/Base";
import { Layout } from "components/Elements"
import renderRichText from "components/Base/RichText";

// template
import Home from "templates/Home";

// styles
import "../styles/index.scss";

export const query = graphql`
  {
    contentfulAuthor(page: { eq: "Home" }) {
      text {
        json
      }
      seoTitle
    }
  }
`;

const HomePage = ({ data }) => {
  const {
    text: { json },
    seoTitle
  } = data.contentfulAuthor;
  const RichText = renderRichText(json);

  return (
    <main>
      <Seo title={seoTitle} />
      <Home description={RichText} />
      <Layout showParticles showMenu showSocial />
    </main>
  );
};

HomePage.propTypes = {
  data: PropTypes.shape({
    contentfulAuthor: PropTypes.shape({
      text: PropTypes.shape({
        json: PropTypes.object
      }),
      seoTitle: PropTypes.string
    })
  })
};

HomePage.defaultProps = {
  data: {}
};

export default HomePage;
