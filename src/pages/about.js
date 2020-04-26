import React from "react";
import PropTypes from "prop-types";

// api
import { graphql } from "gatsby";

// components
import { Seo } from "components/Base";
import { Layout } from "components/Elements"
import renderRichText from "components/Base/RichText";

// template
import About from "templates/About";

// styles
import "../styles/index.scss";

export const query = graphql`
  {
    contentfulAuthor(page: { eq: "About" }) {
      text {
        json
      }
      seoTitle
      image {
        title
        file {
          url
        }
      }
    }
  }
`;

const AboutPage = ({ data }) => {
  const {
    text: { json },
    seoTitle,
    image
  } = data.contentfulAuthor;
  const RichText = renderRichText(json);

  return (
    <main>
      <Seo title={seoTitle} />
      <About description={RichText} image={image} />
      <Layout showParticles showMenu showSocial stickyIcons />
    </main>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    contentfulAuthor: PropTypes.shape({
      text: PropTypes.shape({
        json: PropTypes.object
      }),
      seoTitle: PropTypes.string,
      image: PropTypes.object
    })
  })
};

AboutPage.defaultProps = {
  data: {}
};

export default AboutPage;
