import { useStaticQuery, graphql } from "gatsby";

export function getHomeData() {
  const data = useStaticQuery(
    graphql`
      query {
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
    `
  );

  return data.allContentfulAuthor.edges[0].node.description;
}

export function getProjects() {
  return {};
}
