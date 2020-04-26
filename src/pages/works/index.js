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
          about {
            json
          }
          introduction
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
    }
    contentfulAuthor(page: { eq: "Projects" }) {
      text {
        json
      }
      seoTitle
    }
  }
`;

const orderForProjects = [
  "Univisión",
  "Lending Club",
  "Hallmark",
  "NFL",
  "Softseguros",
  "Rapigo",
  "ARTgrama"
];

const filterProjects = projects => {
  const projectsFiltered = Array.from(
    new Set(projects.map(a => a.node.title))
  ).map(title => {
    return projects.find(a => a.node.title === title);
  });
  const projectsFilteredByName = orderForProjects.map(item => {
    return projectsFiltered.find(a => a.node.title === item);
  });

  return projectsFilteredByName;
};

const WorksPage = ({ data }) => {
  const {
    text: { json },
    seoTitle
  } = data.contentfulAuthor;
  const projects = filterProjects(data.allContentfulProjects.edges);

  const RichText = renderRichText(json);
  return (
    <main>
      <Seo title={seoTitle} />
      <Works projects={projects} description={RichText} />
      <Layout showMenu showParticles />
    </main>
  );
};

WorksPage.propTypes = {
  data: PropTypes.shape({
    allContentfulProjects: PropTypes.shape({
      edges: PropTypes.array
    }),
    contentfulAuthor: PropTypes.shape({
      text: PropTypes.shape({
        json: PropTypes.object
      }),
      seoTitle: PropTypes.string
    })
  })
};

WorksPage.defaultProps = {
  data: {}
};

export default WorksPage;
